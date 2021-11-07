import { CircularProgress, Box } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../../../Hooks/UseAuth";

const AdminRoute = ({ children, ...rest }) => {
	const { user, loading, admin } = UseAuth();
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
				user?.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
