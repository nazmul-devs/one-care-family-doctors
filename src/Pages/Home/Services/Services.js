import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Services = () => {
	return (
		<Container sx={{ mt: 20 }}>
			<Typography variant="h3">Service we provide</Typography>
			<Grid container spacing={2} sx={{ textAlign: "center" }}>
				<Grid item xs={4}>
					<Typography variant="h5">hello</Typography>
					<Typography variant="h5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Distinctio beatae eligendi iusto vitae adipisci corrupti
						dignissimos eaque cupiditate. Fugit, consequatur?
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h5">hello</Typography>
					<Typography variant="h5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Distinctio beatae eligendi iusto vitae adipisci corrupti
						dignissimos eaque cupiditate. Fugit, consequatur?
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h5">hello</Typography>
					<Typography variant="h5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Distinctio beatae eligendi iusto vitae adipisci corrupti
						dignissimos eaque cupiditate. Fugit, consequatur?
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
