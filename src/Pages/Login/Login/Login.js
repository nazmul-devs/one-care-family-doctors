import { Container, Grid, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import img from "../../../images/login.png";

const Login = () => {
	const { Login } = UseAuth();
	const [inputData, setInputData] = useState({});
	const history = useHistory();
	const location = useLocation();

	const handleInput = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newInputData = { ...inputData };
		newInputData[field] = value;
		setInputData(newInputData);
	};

	const submitHandle = (e) => {
		Login(inputData.email, inputData.password, location, history);
		e.preventDefault();
	};
	return (
		<>
			<Container sx={{ mt: 4 }}>
				<Grid
					container
					spacing={3}
					sx={{
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<Grid item sx={12} md={6}>
						<Typography
							variant="h6"
							sx={{ mb: 8, color: "text.secondary" }}
						>
							Login
						</Typography>
						<form onSubmit={submitHandle}>
							<TextField
								onChange={handleInput}
								sx={{ width: "60%", my: 1 }}
								id="standard-basic"
								label="Email"
								type="email"
								name="email"
								variant="standard"
							/>
							<TextField
								onChange={handleInput}
								sx={{ width: "60%", my: 1 }}
								id="standard-basic"
								label="Password"
								type="password"
								name="password"
								variant="standard"
							/>
							<button
								className="btn-all"
								style={{
									display: "block",
									width: "60%",
									margin: "30px auto",
								}}
							>
								Login
							</button>
						</form>
						<Link to="/register" style={{ color: "#34495E" }}>
							New here ? Register pleace
						</Link>
					</Grid>
					<Grid item sx={12} md={6}>
						<img width="100%" src={img} alt="" />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Login;
