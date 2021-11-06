import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import Booking from "../Booking/Booking";

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

const AvailableAppoinment = ({ value }) => {
	const [appoinmentAdded, setAppoinmentAdded] = useState(false);
	return (
		<>
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
				{appoinmentAdded && (
					<Alert severity="success">
						This service booked successfully
					</Alert>
				)}
				<Grid container spacing={4}>
					{appoinmentBook.map((detail) => (
						<Booking
							key={detail.id}
							setAppoinmentAdded={setAppoinmentAdded}
							detail={detail}
							value={value}
						/>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default AvailableAppoinment;
