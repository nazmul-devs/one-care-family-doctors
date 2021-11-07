import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MakeAdmin = () => {
	const [email, setEmail] = useState("");
	const onBlurChane = (e) => {
		const inputEmail = e.target.value;
		setEmail(inputEmail);
	};
	const handleSubmit = (e) => {
		const user = { email };
		fetch("http://localhost:5000/users/admin", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {});
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
