import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../../../Hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = UseAuth();
	if (loading) {
		return <CircularProgress />;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
