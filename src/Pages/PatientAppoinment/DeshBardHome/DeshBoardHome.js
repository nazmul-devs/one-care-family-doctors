import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Calender from "../../Appoinment/Calender/Calender";
import AppoinmentTable from "../AppoinmentTable/AppoinmentTable";

const DeshBoardHome = ({ value, setValue, data }) => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={5} sx={{ shadow: "2px 2px 8px lightgray" }}>
				<Paper elevation={3} sx={{ height: 500, pt: 4 }}>
					<Calender value={value} setValue={setValue} />
				</Paper>
			</Grid>
			<Grid item xs={12} md={7}>
				<Paper elevation={2} sx={{ pt: 4 }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							px: 5,
						}}
					>
						<Typography
							paragraph
							sx={{ color: "#00D0F6", fontWeight: "bold" }}
						>
							Appoinments
						</Typography>
						<Typography
							variant="caption"
							sx={{ color: "text.secondary", fontWeight: "bold" }}
						>
							{value.toDateString()}
						</Typography>
					</Box>
					<AppoinmentTable data={data} />
				</Paper>
			</Grid>
		</Grid>
	);
};

export default DeshBoardHome;
