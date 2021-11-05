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
	const [loading, setLoading] = useState(true);
	const auth = getAuth();

	// User Register
	const Register = (email, password, location, history) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// Login user
	const Login = (email, password, location, history) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
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
			})
			.finally(() => setLoading(false));
	};
	// OnState Change
	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
		return unsubscribe;
	}, []);
	return { Register, Login, LogOut, user, error, loading };
};
export default useFirebase;
