import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../images/footer-bg.png";

const footerStyle = {
	background: `url(${bg})`,
	width: "100%",
};

const Footer = () => {
	return (
		<Box sx={{ mt: 10 }} style={footerStyle}>
			<Grid container sx={{ alignItems: "center" }}>
				{/* Emergency */}
				<Grid item xs={3} sx={{ textAlign: "center" }}>
					<Box
						sx={{
							px: 3,
							py: 5,
							minHeight: 270,
						}}
					>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Emergency Dental Care
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Check up
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Treatment of personal Diseases
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Tooth extraction
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Check up
						</Typography>
					</Box>
				</Grid>
				{/* Services */}
				<Grid item xs={3} sx={{ textAlign: "center" }}>
					<Box
						sx={{
							px: 3,
							py: 5,
							minHeight: 270,
						}}
					>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "#00D0F6",
							}}
						>
							SERVICES
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Emergency Dental Care
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Check up
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Treatment of personal Diseases
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Tooth extraction
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Check up
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={3} sx={{ textAlign: "center" }}>
					<Box
						sx={{
							px: 3,
							py: 5,
							minHeight: 270,
						}}
					>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "#00D0F6",
							}}
						>
							SERVICES
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Emergency Dental Care
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Check up
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Treatment of personal Diseases
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Tooth extraction
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Check up
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={3} sx={{ textAlign: "center" }}>
					<Box
						sx={{
							px: 3,
							py: 5,
							minHeight: 270,
						}}
					>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "#00D0F6",
							}}
						>
							OUR ADDRESS
						</Typography>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								color: "text.secondary",
							}}
						>
							Banani R-15, D-block Dhaka
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<hr />
			<Typography sx={{ textAlign: "center", py: 1 }}>
				Copyright © 2021 One Care family Doctors
			</Typography>
		</Box>
	);
};

export default Footer;
