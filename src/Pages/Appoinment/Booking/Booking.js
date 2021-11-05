import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AppoinmentModal from "../AppoinmnetModal/AppoinmentModal";

const Booking = ({ detail, value }) => {
	const handleOpen = () => setOpen(true);
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Grid item xs={12} md={4}>
				<Paper sx={{ textAlign: "center", py: 4, px: 4, py: 2 }}>
					<Typography
						variant="h6"
						sx={{ fontWeight: "bold", color: "#00D0F6" }}
					>
						{detail.name}
					</Typography>
					<Typography sx={{ fontWeight: "bold" }}>
						{detail.time}
					</Typography>

					<Typography
						variant="caption"
						display="block"
						gutterBottom
						sx={{ color: "text.secondary" }}
					>
						{detail.space} SPACES AVAILABLE
					</Typography>
					<button onClick={handleOpen} className="btn-all">
						BOOK APPOINMENT
					</button>
				</Paper>
			</Grid>
			<AppoinmentModal
				open={open}
				handleClose={handleClose}
				date={value.toDateString()}
				detail={detail}
			/>
		</>
	);
};

export default Booking;
