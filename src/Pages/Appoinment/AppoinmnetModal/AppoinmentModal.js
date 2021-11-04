import { Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AppoinmentModal = ({ open, handleClose }) => {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						mt: 10,
						background: "#fff",
						width: 500,
						mx: "auto",
						p: 5,
						alignItems: "center",
						borderRadius: 2,
					}}
				>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
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
						<button className="btn-all d-block">Book</button>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

export default AppoinmentModal;
