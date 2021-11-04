import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import dr1 from "../../../images/people-2.png";
import dr2 from "../../../images/people-3.png";

const Blog = () => {
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
				OUR BLOGS
			</Typography>
			<Typography
				variant="h3"
				sx={{
					textAlign: "center",
					fontWeight: "bold",
					my: 3,
					color: "#34495E",
				}}
			>
				From Our Blog News
			</Typography>

			{/* Blogs */}
			<Grid container spacing={4}>
				<Grid item xs={4}>
					<Paper
						elevation={2}
						sx={{
							color: "#fff",
							px: 3,
							py: 5,
							minHeight: 270,
							background:
								"linear-gradient(90deg, rgba(0,255,176,1) 0%, rgba(0,201,255,1) 100%)",
						}}
					>
						<div>
							<Typography variant="h6" sx={{ fontWeight: "bold" }}>
								Winson Harry
							</Typography>
							<Typography>22 Aug 2019</Typography>
						</div>
						<Typography variant="h5" sx={{ fontWeight: "bold", my: 3 }}>
							Check at least a doctor in a year for your teath.
						</Typography>
						<Typography variant="h3" sx={{ fontWeight: "bold", mt: 5 }}>
							&#x2192;
						</Typography>
					</Paper>
				</Grid>
				{/* 2nd blog */}
				<Grid item xs={4}>
					<Paper
						elevation={2}
						sx={{
							px: 3,
							py: 5,
							minHeight: 270,
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								width="60"
								src={dr1}
								style={{ marginRight: "20px" }}
								alt=""
							/>
							<div>
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Winson Harry
								</Typography>
								<Typography sx={{ color: "#ABB2B9" }}>
									22 Aug 2019
								</Typography>
							</div>
						</Box>

						<Typography
							variant="h5"
							sx={{ fontWeight: "bold", my: 3, color: "text.secondary" }}
						>
							Check at least a doctor in a year for your teath.
						</Typography>
						<Typography
							sx={{ color: "text.disabled", fontWeight: "bold" }}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit.dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Paper>
				</Grid>
				{/* 3rd blog */}
				<Grid item xs={4}>
					<Paper
						elevation={2}
						sx={{
							px: 3,
							py: 5,
							minHeight: 270,
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								width="60"
								src={dr2}
								style={{ marginRight: "20px" }}
								alt=""
							/>
							<div>
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Winson Harry
								</Typography>
								<Typography sx={{ color: "#ABB2B9" }}>
									22 Aug 2019
								</Typography>
							</div>
						</Box>

						<Typography
							variant="h5"
							sx={{ fontWeight: "bold", my: 3, color: "text.secondary" }}
						>
							Check at least a doctor in a year for your teath.
						</Typography>
						<Typography
							sx={{ color: "text.disabled", fontWeight: "bold" }}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit.dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Blog;
