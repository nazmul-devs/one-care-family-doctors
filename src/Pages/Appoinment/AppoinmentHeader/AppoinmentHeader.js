import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Calender from "../Calender/Calender";

const appointHeaderStyle = {
	background: `url(${bg})`,
	width: "100%",
};

const AppoinmentHeader = ({ value, setValue }) => {
	return (
		<Box style={appointHeaderStyle}>
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
					<Grid item xs={12} md={5}>
						<Typography
							variant="h3"
							sx={{ fontWeight: "bold", color: "#34495E", my: 3 }}
						>
							Appoinment
						</Typography>
						<Calender value={value} setValue={setValue} />
					</Grid>
					<Grid
						sx={{ justifyContent: "flex-end", display: "flex" }}
						item
						xs={12}
						md={7}
					>
						<img width="600" src={chair} alt="" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AppoinmentHeader;
