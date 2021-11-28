import { useEffect, useState } from 'react';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import firebaseinitialize from './firebase.init';

firebaseinitialize();
const UseFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	// ! register with email and password
	const registerWithEmail = (email, password, name, history) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setError('');
				const newUser = { email, displayName: name };
				setUser(newUser);
				//! save user to database
				saveUser(email, name, 'POST');
				//! send name to firebase after creation
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
				history.push('/');
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	// ! sign in with email and password
	const signinWithEmail = (email, password, location, history) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.push(destination);
				setError('');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};
	//! google sign in
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider)
			.then((result) => {
				setError('');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// log out user
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setLoading(false));
	};

	// state change
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
		return () => unsubscribed;
	}, [auth]);
	//! save user
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch('http://localhost:5000/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	return {
		user,
		error,
		loading,
		googleSignIn,
		registerWithEmail,
		signinWithEmail,
		logOut,
	};
};

export default UseFirebase;
