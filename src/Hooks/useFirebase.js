import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../Firebase/FirebaseInit";

FirebaseInit();

const useFirebase = () => {
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");
	const [user, setUser] = useState({});
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// User Register
	const Register = (email, password, name, location, history) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const newUser = { email, displayName: name };
				setUser(newUser);
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {
						setSuccess(true);
						// save user call
						saveUser(email, name, "POST");
					})
					.catch((error) => {
						setError(error.message);
					});
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
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
				setSuccess(false);
			})
			.finally(() => setLoading(false));
	};

	// google login handle
	const googleLogin = (location, history) => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				const path = location?.state?.from || "/";
				history.replace(path);
				// save user call
				saveUser(user.email, user.displayName, "PUT");
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
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
			})
			.finally(() => setLoading(false));
	};
	// OnState Change
	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setLoading(false);
			setError("");
		});
		return unsubscribe;
	}, []);

	// save user to database
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		const url = "http://localhost:5000/users";
		fetch(url, {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	// Get admin
	useEffect(() => {
		const url = `http://localhost:5000/users/${user.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setAdmin(data.admin);
			});
	}, [user.email]);
	return {
		Register,
		Login,
		LogOut,
		user,
		error,
		loading,
		success,
		googleLogin,
		token,
		admin,
	};
};
export default useFirebase;
