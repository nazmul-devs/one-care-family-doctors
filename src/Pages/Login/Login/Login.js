import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/login.png";

const Login = () => {
	return (
		<>
			<Container>
				<Grid
					container
					spacing={3}
					sx={{ alignItems: "center", textAlign: "center" }}
				>
					<Grid item sx={12} md={6}>
						<Typography
							variant="h6"
							sx={{ mb: 8, color: "text.secondary" }}
						>
							Login
						</Typography>
						<form>
							<TextField
								sx={{ width: "60%", my: 1 }}
								id="standard-basic"
								label="Email"
								type="email"
								variant="standard"
							/>
							<TextField
								sx={{ width: "60%", my: 1 }}
								id="standard-basic"
								label="Password"
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
								Login
							</button>
						</form>
					</Grid>
					<Grid item sx={12} md={6}>
						<img width="100%" src={img} alt="" />
					</Grid>
				</Grid>
			</Container>

			<Link to="/">Home</Link>
		</>
	);
};

export default Login;
