import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testemonial = () => {
	return (
		<Container sx={{ my: 20 }}>
			<Typography variant="h6" sx={{ fontWeight: "bold", color: "#00D0F6" }}>
				TESTEMONIAL
			</Typography>
			<Typography
				variant="h3"
				sx={{
					fontWeight: "bold",
					my: 3,
					color: "#34495E",
				}}
			>
				What's Our Paitents <br /> Says
			</Typography>

			{/* people information */}
			<Grid container spacing={4}>
				<Grid item xs={12} md={4} sx={{ mt: 8 }}>
					<Paper elevation={2} sx={{ px: 2, py: 3 }}>
						<Typography sx={{ color: "#ABB2B9", textAlign: "justify" }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
							hic laudantium odio eaque repudiandae, modi earum non
							cumque, voluptas reprehenderit quod alias repellendus
							consequatur cum est quaerat beatae dolore facilis.
						</Typography>

						<Box
							sx={{
								mt: 8,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								src={people1}
								style={{ marginRight: "20px" }}
								alt=""
							/>
							<div>
								<Typography
									variant="h6"
									sx={{ fontWeight: "bold", color: "#00D0F6" }}
								>
									Winson Harry
								</Typography>
								<Typography sx={{ color: "#ABB2B9" }}>
									Calofornia
								</Typography>
							</div>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4} sx={{ mt: 8 }}>
					<Paper elevation={2} sx={{ px: 2, py: 3 }}>
						<Typography sx={{ color: "#ABB2B9", textAlign: "justify" }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
							hic laudantium odio eaque repudiandae, modi earum non
							cumque, voluptas reprehenderit quod alias repellendus
							consequatur cum est quaerat beatae dolore facilis.
						</Typography>

						<Box
							sx={{
								mt: 8,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								src={people2}
								style={{ marginRight: "20px" }}
								alt=""
							/>
							<div>
								<Typography
									variant="h6"
									sx={{ fontWeight: "bold", color: "#00D0F6" }}
								>
									Winson Harry
								</Typography>
								<Typography sx={{ color: "#ABB2B9" }}>
									Calofornia
								</Typography>
							</div>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4} sx={{ mt: 8 }}>
					<Paper elevation={2} sx={{ px: 2, py: 3 }}>
						<Typography sx={{ color: "#ABB2B9", textAlign: "justify" }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
							hic laudantium odio eaque repudiandae, modi earum non
							cumque, voluptas reprehenderit quod alias repellendus
							consequatur cum est quaerat beatae dolore facilis.
						</Typography>

						<Box
							sx={{
								mt: 8,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								src={people3}
								style={{ marginRight: "20px" }}
								alt=""
							/>
							<div>
								<Typography
									variant="h6"
									sx={{ fontWeight: "bold", color: "#00D0F6" }}
								>
									Winson Harry
								</Typography>
								<Typography sx={{ color: "#ABB2B9" }}>
									Calofornia
								</Typography>
							</div>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Testemonial;
