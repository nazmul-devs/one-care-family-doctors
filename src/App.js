import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appoinment from "./Pages/Appoinment/Appoinment/Appoinment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import PatientAppoinmnet from "./Pages/PatientAppoinment/PatientAppoinmnet";

// #00D0F6, #00dad6
function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute exact path="/appoinment">
						<Appoinment />
					</PrivateRoute>
					<PrivateRoute exact path="/patientAppoinment">
						<PatientAppoinmnet />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
