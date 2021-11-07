import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import UseAuth from "../../Hooks/UseAuth";
import DeshBoardHome from "./DeshBardHome/DeshBoardHome";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddDoctor from "./AddDoctor/AddDoctor";

const drawerWidth = 240;
const PatientAppoinmnet = (props) => {
	let { path, url } = useRouteMatch();
	const { user } = UseAuth();
	const [data, setData] = useState([]);
	const [value, setValue] = React.useState(new Date());
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// get appoinmnet data
	useEffect(() => {
		fetch(
			`http://localhost:5000/appoinment?email=${
				user.email
			}&date=${value.toLocaleDateString()}`
		)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [value]);

	const drawer = (
		<div
			style={{
				backgroundImage:
					"linear-gradient(to top, #00d0f6, #00dff3, #00ece2, #00f7c4, #03ff9c)",
				height: "100vh",
				color: "#fff",
			}}
		>
			<Toolbar />
			<Divider />
			<List>
				{/* link */}
				<Link to="/">
					<Typography
						sx={{
							color: "#fff",
							textDecoration: "none",
							mx: 4,
							textAlign: "center",
							my: 2,
						}}
					>
						HOME
					</Typography>
				</Link>
				<Link to={`${url}`}>
					<Typography
						sx={{
							color: "#fff",
							textDecoration: "none",
							mx: 4,
							textAlign: "center",
							my: 2,
						}}
					>
						DESHBOARD
					</Typography>
				</Link>
				<Link to={`${url}/makeAdmin`}>
					<Typography
						sx={{
							color: "#fff",
							textDecoration: "none",
							mx: 4,
							textAlign: "center",
							my: 2,
						}}
					>
						MAKE ADMIN
					</Typography>
				</Link>
				<Link to={`${url}/addDoctor`}>
					<Typography
						sx={{
							color: "#fff",
							textDecoration: "none",
							mx: 4,
							textAlign: "center",
							my: 2,
						}}
					>
						ADD DOCTOR
					</Typography>
				</Link>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					background: "none",
					boxShadow: "none",
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{
							mr: 2,
							display: { sm: "none" },
							background: "#34495E",
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" sx={{ color: "#283747" }}>
						Appoinment
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
					background: "#00D0F6",
				}}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						background: "#00D0F6",
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						background: "#00D0F6",
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{/* nested route */}
				<Switch>
					<Route exact path={path}>
						<DeshBoardHome
							data={data}
							value={value}
							setValue={setValue}
						/>
					</Route>
					<Route path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</Route>
					<Route path={`${path}/addDoctor`}>
						<AddDoctor />
					</Route>
				</Switch>
			</Box>
		</Box>
	);
};

export default PatientAppoinmnet;
