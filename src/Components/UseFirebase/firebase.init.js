import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
const firebaseinitialize = () => {
	initializeApp(firebaseConfig);
};
export default firebaseinitialize;
