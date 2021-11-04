import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const doctors = [
	{
		id: 1,
		name: "dr. caudi",
		img: "https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg",
		phone: "01705511718",
	},
	{
		id: 2,
		name: "johny deep",
		img: "https://lh3.googleusercontent.com/proxy/hsAXAow2mANAIea5mJIdyY48nzZwIUSA6bDI7rvAEKpQm_MghkeLH3qMMUChdb9YrPMQTHI-9WIo2E2pnfWyOdfcj--SDYG3uHaM45i6NIopVw3aXA",
		phone: "0177449237",
	},
	{
		id: 3,
		name: "Elijabeth",
		img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg",
		phone: "01708823582",
	},
];

const Doctors = () => {
	return (
		<Container sx={{ my: 20 }}>
			<Typography
				variant="h6"
				sx={{
					textAlign: "center",
					fontWeight: "bold",
					color: "#00D0F6",
				}}
			>
				DOCTORS
			</Typography>

			{/* Blogs */}
			<Grid container spacing={4} sx={{ mt: 4 }}>
				{doctors.map((doctor) => (
					<Grid item xs={4} key={doctor.id} sx={{ textAlign: "center" }}>
						<Box
							sx={{
								px: 3,
								py: 5,
								minHeight: 270,
							}}
						>
							<img
								src={doctor.img}
								style={{
									width: "180px",
									height: "180px",
									borderRadius: "50%",
									objectFit: "cover",
								}}
								alt=""
							/>
							<div>
								<Typography
									variant="h6"
									sx={{
										fontWeight: "bold",
										mt: 3,
										color: "text.secondary",
									}}
								>
									{doctor.name}
								</Typography>
								<Typography
									sx={{ color: "text.disabled", fontWeight: "bold" }}
								>
									<i
										className="fas fa-phone-alt"
										style={{ color: "#00D0F6", marginRight: "10px" }}
									></i>{" "}
									{doctor.phone}
								</Typography>
							</div>
						</Box>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Doctors;
