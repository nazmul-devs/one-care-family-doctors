import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const appoinmentBook = [
	{
		id: 1,
		name: "Teeth Orthodontics",
		time: "8.00 AM - 9.00 AM",
		space: 10,
	},
	{
		id: 2,
		name: "Cosmetics Dentistry",
		time: "10.05 AM - 11.30 AM",
		space: 15,
	},
	{
		id: 3,
		name: "Teeth Cleaning",
		time: "11.00 AM - 12.30 AM",
		space: "08",
	},
	{
		id: 4,
		name: "Cavity Protection",
		time: "12.00 AM - 2.00 PM",
		space: "08",
	},
	{
		id: 5,
		name: "Teeth Orthodontics",
		time: "12.00 AM - 2.00 PM",
		space: 12,
	},
	{
		id: 6,
		name: "Cosmetics Dentistry",
		time: "10.05 AM - 11.30 AM",
		space: 15,
	},
];

const AvailableAppoinment = ({ value, handleOpen }) => {
	console.log(value);
	return (
		<Container>
			<Typography
				variant="h4"
				sx={{
					fontWeight: "bold",
					textAlign: "center",
					my: 4,
					color: "#00D0F6",
				}}
			>
				Available Appoinments on {value.toDateString()}
			</Typography>
			<Grid container spacing={4}>
				{appoinmentBook.map((detail) => (
					<Grid item xs={12} md={4} key={detail.id}>
						<Paper
							sx={{ px: 4, py: 2 }}
							sx={{ textAlign: "center", py: 4 }}
						>
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
				))}
			</Grid>
		</Container>
	);
};

export default AvailableAppoinment;
