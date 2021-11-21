import React, { useEffect, useState } from 'react';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	SignOut,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import firebaseinitialize from './firebase.init';

firebaseinitialize();
const UseFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	// google sign in
	const googleSignIn = () => {
		return signInWithPopup(auth, provider)
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
	return { user, error, loading, googleSignIn, logOut };
};

export default UseFirebase;
