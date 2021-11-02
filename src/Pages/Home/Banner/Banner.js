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

			<Grid
				container
				spacing={2}
				sx={{ textAlign: "center", mt: -10, color: "#fff" }}
			>
				<Grid item xs={4}>
					<Box>
						<Grid
							sx={{
								px: 2,
								justifyContent: "center",
								display: "flex",
								alignItems: "center",
							}}
							container
							style={{ background: "#00DAD6" }}
						>
							<Grid item xs={4}>
								<i className="far fa-clock"></i>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h5">Opening Hours</Typography>
								<Typography variant="p">
									Lorem ipsum dolor sit amet. dolor sit amet.
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Box>
						<Grid
							sx={{
								px: 2,
								justifyContent: "center",
								display: "flex",
								alignItems: "center",
							}}
							container
							style={{ background: "#34495E", color: "#fff" }}
						>
							<Grid item xs={4}>
								<i className="far fa-clock"></i>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h5">Visit our location</Typography>
								<Typography variant="p">
									Banani R-15, D-block Dhaka
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Box>
						<Grid
							sx={{
								px: 2,
								display: "flex",
								alignItems: "center",
							}}
							container
							style={{ background: "#00DAD6" }}
						>
							<Grid item xs={4}>
								<i className="far fa-clock"></i>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h5">Contact us now</Typography>
								<Typography variant="p">
									01705511718 Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quam qui illum
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Banner;
