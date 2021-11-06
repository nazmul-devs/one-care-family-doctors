import { Grid, Typography } from "@mui/material";
import React from "react";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";
const appoinmentStyle = {
	background: `url(${bg}) center`,
	backgrounSize: "cover",
	height: "65vh",
	backgroundBlendMode: " darken ",
	backgroundColor: "rgba(40, 55, 71, 0.6)",
};

const AppointmentBanner = () => {
	return (
		<div style={appoinmentStyle}>
			<Grid container spacing="4" sx={{ alignItems: "center", mt: 20 }}>
				<Grid item xs="5">
					<img
						src={doctor}
						style={{ width: "580px", marginTop: "-132px" }}
						alt=""
					/>
				</Grid>
				<Grid item xs="7">
					<Typography
						variant="h6"
						sx={{ fontWeight: "bold", color: "#00D0F6" }}
					>
						APPOINMENT
					</Typography>
					<Typography variant="h3" sx={{ color: "#fff", my: 6 }}>
						Make an appoinment <br /> Today
					</Typography>
					<Typography sx={{ fontWeight: "bold", color: "#E5E7E9" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, deleniti! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quidem, deleniti!
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default AppointmentBanner;
