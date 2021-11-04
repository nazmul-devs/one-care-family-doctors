import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
							Home
						</Typography>
					</Link>
					<Link to="/appoinment">
						<Typography
							sx={{ color: "#fff", textDecoration: "none", mx: 4 }}
						>
							Appoinment
						</Typography>
					</Link>

					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
