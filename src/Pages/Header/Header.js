import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Header = () => {
	const { user, LogOut } = UseAuth();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						News
					</Typography>

					<Link to="/">
						<Typography
							sx={{ color: "#fff", textDecoration: "none", mx: 4 }}
						>
							HOME
						</Typography>
					</Link>
					<Link to="/appoinment">
						<Typography
							sx={{ color: "#fff", textDecoration: "none", mx: 4 }}
						>
							APPOINMENT
						</Typography>
					</Link>
					{user.email ? (
						<>
							<Link to="/patientAppoinment">
								<Typography
									sx={{ color: "#fff", textDecoration: "none", mx: 4 }}
								>
									APPOINMENT DETAILS
								</Typography>
							</Link>
							<Button onClick={LogOut} color="inherit">
								<i className="fas fa-sign-out-alt"></i> Logout
							</Button>
						</>
					) : (
						<Link to="/login">
							<Typography
								sx={{ color: "#fff", textDecoration: "none", mx: 4 }}
							>
								LOGIN
							</Typography>
						</Link>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
