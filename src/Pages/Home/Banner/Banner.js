import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import chair from "../../../images/chair.png";

const Banner = () => {
	return (
		<Container>
			<Grid
				container
				spacing={2}
				sx={{
					justifyContent: "center",
					display: "flex",
					alignItems: "center",
					height: "92vh",
				}}
			>
				<Grid item xs={5}>
					<Box>
						<Typography variant="h4" component="div">
							Your new smile <br /> Start here
						</Typography>
						<Typography
							sx={{ m: 2, mb: 6 }}
							className="secondary-color"
							variant="p"
							component="div"
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Quisquam quis deleniti atque asperiores
						</Typography>
						<Button variant="contained">Contained</Button>
					</Box>
				</Grid>
				<Grid
					sx={{ justifyContent: "flex-end", display: "flex" }}
					item
					xs={7}
				>
					<img width="600" src={chair} alt="" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Banner;
