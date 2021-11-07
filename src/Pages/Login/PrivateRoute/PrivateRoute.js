import { CircularProgress, Box } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../../../Hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = UseAuth();
	if (loading) {
		return (
			<Box sx={{ textAlign: "center" }}>
				<CircularProgress sx={{ textAlign: "center", my: 15 }} />
			</Box>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email ? (
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
