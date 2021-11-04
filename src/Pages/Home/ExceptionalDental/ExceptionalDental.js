import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";

const ExceptionalDental = () => {
	return (
		<Container>
			<Grid container spacing="3" sx={{ alignIems: "center" }}>
				<Grid item xs="5">
					<img src={treatment} sx={{ width: 300 }} alt="" />
				</Grid>
				<Grid item xs="7">
					<Typography variant="h3" sx={{ fontWeight: "bold" }}>
						Exceptional Dental <br />
						Care, on Your Terms
					</Typography>
					<Typography sx={{ color: "text.secondary" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptas ipsum possimus, ipsam maxime ullam, soluta earum in
						esse consequuntur architecto animi vel voluptatibus provident
						cum error exercitationem voluptatum quae reprehenderit.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ExceptionalDental;
