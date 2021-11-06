import { Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UseAuth from "../../../Hooks/UseAuth";

const AppoinmentModal = ({ open, handleClose, detail, date }) => {
	const { user } = UseAuth();
	return (
		<Box>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						my: 3,
						background: "#fff",
						width: 500,
						mx: "auto",
						p: 5,
						alignItems: "center",
						borderRadius: 2,
					}}
				>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h3"
						sx={{ textAlign: "center", color: "#00D0F6", my: 2 }}
					>
						{detail.name}
					</Typography>
					<Box
						component="form"
						sx={{ textAlign: "center", mt: 4, pb: 6, px: 4 }}
					>
						<TextField
							sx={{ background: "#fff", width: "100%", my: 1 }}
							id="outlined-basic"
							defaultValue={date}
							variant="outlined"
							disabled
						/>
						<TextField
							sx={{ background: "#fff", width: "100%", my: 1 }}
							id="outlined-basic"
							variant="outlined"
							defaultValue={detail.time}
							disabled
						/>
						<TextField
							sx={{ background: "#fff", width: "100%", my: 1 }}
							id="outlined-basic"
							defaultValue={user.displayName}
							variant="outlined"
						/>

						<TextField
							sx={{ background: "#fff", width: "100%", my: 1 }}
							id="outlined-basic"
							placeholder="Email"
							variant="outlined"
							defaultValue={user.email}
						/>
						<TextField
							sx={{ background: "#fff", width: "100%", my: 1 }}
							id="outlined-basic"
							placeholder="Phone Number"
							variant="outlined"
						/>

						<button
							style={{ float: "right" }}
							className="btn-all d-block"
						>
							Book
						</button>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

export default AppoinmentModal;
