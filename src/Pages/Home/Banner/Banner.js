import { Container, Grid, Paper, Typography } from "@mui/material";
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
					py: 16,
				}}
			>
				<Grid item xs={5}>
					<Box>
						<Typography
							variant="h3"
							sx={{
								fontWeight: "bold",
								my: 3,
								color: "#34495E",
							}}
						>
							Your new smile <br /> Start here
						</Typography>
						<Typography
							sx={{ my: 6 }}
							className="secondary-color"
							variant="p"
							component="div"
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Quisquam quis deleniti atque asperiores
						</Typography>
						<button className="btn-all">Learn more</button>
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

			{/* important information */}
			<Grid
				container
				spacing={2}
				sx={{ textAlign: "center", color: "#fff", height: 120 }}
			>
				<Grid item xs={4}>
					<Paper
						sx={{ height: "100%", display: "flex", alignItems: "center" }}
						style={{ background: "#00D0F6" }}
					>
						<Grid
							container
							spacing={2}
							sx={{ alignItems: "center", color: "white" }}
						>
							<Grid item xs={4}>
								<Typography variant="h2" component="h2">
									<i className="far fa-clock"></i>
								</Typography>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Opening hour
								</Typography>
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit.
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper
						sx={{ height: "100%", display: "flex", alignItems: "center" }}
						style={{ background: "#34495E" }}
					>
						<Grid
							container
							spacing={2}
							sx={{ alignItems: "center", color: "white" }}
						>
							<Grid item xs={4}>
								<Typography variant="h2" component="h2">
									<i className="fas fa-map-marker-alt"></i>
								</Typography>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Visit our location
								</Typography>
								<Typography>Banani r-15, D-block Dhakak</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper
						sx={{ height: "100%", display: "flex", alignItems: "center" }}
						style={{ background: "#00D0F6" }}
					>
						<Grid
							container
							spacing={2}
							sx={{ alignItems: "center", color: "white" }}
						>
							<Grid item xs={4}>
								<Typography variant="h2" component="h2">
									<i className="fas fa-phone-alt"></i>
								</Typography>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Contact us now
								</Typography>
								<Typography>01705511718</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Banner;
