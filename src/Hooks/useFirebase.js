import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../Firebase/FirebaseInit";

FirebaseInit();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const auth = getAuth();

	// User Register
	const Register = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {})
			.catch((error) => {
				setError(error.message);
			});
	};

	// Login user
	const Login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {})
			.catch((error) => {
				setError(error.message);
			});
	};

	// LogOut
	const LogOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	// OnState Change
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
		});
		return unsubscribe;
	}, []);
	return { Register, Login, LogOut, user, error };
};
export default useFirebase;
