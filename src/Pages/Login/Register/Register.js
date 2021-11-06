import {
	Alert,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Typography,
	Box,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import img from "../../../images/login.png";

const Register = () => {
	const { Register, loading, error, success } = UseAuth();
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
		if (inputData.password !== inputData.password2) {
			alert("Incorrect password");
			e.preventDefault();
			return;
		}
		Register(
			inputData.email,
			inputData.password,
			inputData.name,
			location,
			history
		);
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
					{loading ? (
						<Box sx={{ textAlign: "center" }}>
							<CircularProgress sx={{ textAlign: "center", my: 15 }} />
						</Box>
					) : (
						<Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
							<Typography
								variant="h6"
								sx={{ mb: 8, color: "text.secondary" }}
							>
								Register
							</Typography>

							{error && (
								<Alert
									sx={{ margin: "0 auto", width: "60%" }}
									severity="error"
								>
									{error}
								</Alert>
							)}
							{success && (
								<Alert
									severity="success"
									sx={{ margin: "0 auto", width: "60%" }}
								>
									User register successfully!
								</Alert>
							)}

							<form onSubmit={submitHandle}>
								<TextField
									onChange={handleInput}
									name="name"
									sx={{ width: "60%", my: 1 }}
									id="standard-basic"
									label="Name"
									variant="standard"
								/>
								<TextField
									onChange={handleInput}
									name="email"
									sx={{ width: "60%", my: 1 }}
									id="standard-basic"
									label="Email"
									type="email"
									variant="standard"
								/>
								<TextField
									onChange={handleInput}
									name="password"
									sx={{ width: "60%", my: 1 }}
									id="standard-basic"
									label="Password"
									type="password"
									variant="standard"
								/>
								<TextField
									onChange={handleInput}
									name="password2"
									sx={{ width: "60%", my: 1 }}
									id="standard-basic"
									label="Confirm Password"
									type="password"
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
									Register
								</button>
							</form>
							<Link to="/login" style={{ color: "#34495E" }}>
								Already Register ? Login pleace
							</Link>
						</Grid>
					)}

					<Grid item xs={12} md={6}>
						<img width="100%" src={img} alt="" />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Register;
