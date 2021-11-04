import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";

// #00D0F6, #00dad6
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
