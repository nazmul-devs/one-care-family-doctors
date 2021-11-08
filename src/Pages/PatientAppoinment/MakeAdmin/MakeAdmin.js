import { Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";

const MakeAdmin = () => {
	const { token } = UseAuth();
	const [makeAdmin, setMakeAdmin] = useState(false);
	const [email, setEmail] = useState("");
	const onBlurChane = (e) => {
		const inputEmail = e.target.value;
		setEmail(inputEmail);
	};
	const handleSubmit = (e) => {
		const user = { email };
		fetch("https://polar-ocean-96606.herokuapp.com/users/admin", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					setMakeAdmin(true);
				}
			});
		e.preventDefault();
	};
	return (
		<Box
			component="form"
			sx={{
				textAlign: "center",
				my: 3,
				"& > :not(style)": { m: 1, width: "50%" },
			}}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			{makeAdmin && (
				<Alert severity="success" sx={{ margin: "0 auto", width: "60%" }}>
					User register successfully!
				</Alert>
			)}
			<TextField
				onBlur={onBlurChane}
				id="standard-basic"
				label="Email"
				type="email"
				variant="standard"
			/>
			<button className="btn-all" style={{ marginTop: "30px" }}>
				Submit
			</button>
		</Box>
	);
};

export default MakeAdmin;
