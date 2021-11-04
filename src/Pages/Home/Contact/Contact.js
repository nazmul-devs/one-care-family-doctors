import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const bg =
	"https://omegaunderground.com/wp-content/uploads/2020/09/Medical-Training-and-Tech-Can-Be-Key-to-A-Healthy-Heart.jpg";

const contactStyle = {
	background: `url(${bg})`,
	backgroundBlendMode: " darken ",
	backgroundColor: "rgba(40, 55, 71, 0.6)",
};

const Contact = () => {
	return (
		<Box style={contactStyle}>
			<Container sx={{ py: 10, textAlign: "center" }}>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: "bold",
						color: "#00D0F6",
					}}
				>
					CONTACT US
				</Typography>
				<Typography
					variant="h3"
					sx={{
						textAlign: "center",
						fontWeight: "bold",
						my: 3,
						color: "#fff",
					}}
				>
					Always Connect With us
				</Typography>
				{/* form */}
				<Box component="form" sx={{ textAlign: "center", mt: 6 }}>
					<TextField
						sx={{ background: "#fff", width: "60%", my: 2 }}
						id="filled-basic"
						label="Email"
						variant="filled"
						placeholder="Your email"
					/>
					<TextField
						sx={{ background: "#fff", width: "60%", my: 2 }}
						id="filled-basic"
						label="Subject"
						variant="filled"
						placeholder="Subject"
					/>

					<TextField
						sx={{ background: "#fff", width: "60%" }}
						id="standard-multiline-static"
						multiline
						rows={4}
						placeholder="Message"
						variant="standard"
					/>
				</Box>
				<Button
					sx={{
						background: "#00D0F6",
						color: "#fff",
						borderRadius: "0",
						px: 8,
						py: 1,
						mt: 6,
					}}
				>
					Submit
				</Button>
			</Container>
		</Box>
	);
};

export default Contact;
