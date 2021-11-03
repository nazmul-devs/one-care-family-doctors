import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const Services = () => {
	return (
		<Container sx={{ mt: 15 }}>
			<Typography
				sx={{
					textAlign: "center",
					fontWeight: "bold",
					color: "#00D0F6",
				}}
			>
				SERVICES
			</Typography>
			<Typography
				variant="h4"
				sx={{
					textAlign: "center",
					fontWeight: "bold",
					my: 3,
					color: "#34495E",
				}}
			>
				Service we provide
			</Typography>
			<Grid container spacing={4} sx={{ textAlign: "center" }}>
				<Grid item xs={4}>
					<img src={fluoride} sx={{ width: "80%" }} alt="" />
					<Typography variant="h5" sx={{ fontWeight: "bold", my: 3 }}>
						Fluoride Treatment
					</Typography>
					<Typography variant="p" sx={{ color: "text.secondary" }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor
						sit amet consectetur adipisicing elit.
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<img src={cavity} alt="" />
					<Typography variant="h5" sx={{ fontWeight: "bold", my: 3 }}>
						Cavity Filling
					</Typography>
					<Typography variant="p" sx={{ color: "text.secondary" }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor
						sit amet consectetur adipisicing elit.
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<img src={whitening} alt="" />
					<Typography variant="h5" sx={{ fontWeight: "bold", my: 3 }}>
						Teath Whiteningt
					</Typography>
					<Typography variant="p" sx={{ color: "text.secondary" }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor
						sit amet consectetur adipisicing elit.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
