import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

const rows = [
	{
		name: "dkjfhs",
		calories: "sdfh",
		fat: "sdfh",
		carbs: "sfh",
		protein: "sdfh",
	},
	{
		name: "dkjfhs",
		calories: "sdfh",
		fat: "sdfh",
		carbs: "sfh",
		protein: "sdfh",
	},
	{
		name: "dkjfhs",
		calories: "sdfh",
		fat: "sdfh",
		carbs: "sfh",
		protein: "sdfh",
	},
	{
		name: "dkjfhs",
		calories: "sdfh",
		fat: "sdfh",
		carbs: "sfh",
		protein: "sdfh",
	},
	{
		name: "dkjfhs",
		calories: "sdfh",
		fat: "sdfh",
		carbs: "sfh",
		protein: "sdfh",
	},
	{
		name: "dkjfhs",
		calories: "sdfh",
		fat: "sdfh",
		carbs: "sfh",
		protein: "sdfh",
	},
];

const AppoinmentTable = () => {
	return (
		<TableContainer component={Paper} sx={{ height: 425, pt: 2, px: 6 }}>
			<Table size="small" aria-label="appoinment table">
				<TableHead>
					<TableRow>
						<TableCell sx={{ border: "none", p: 1 }}>Name</TableCell>
						<TableCell sx={{ border: "none", p: 1 }}>Schedule</TableCell>
						<TableCell sx={{ border: "none" }}>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell sx={{ border: "none", p: 1 }}>
								{row.calories}
							</TableCell>
							<TableCell sx={{ border: "none", p: 1 }}>
								{row.fat}
							</TableCell>
							<TableCell sx={{ border: "none" }}>
								<Typography
									variant="caption"
									sx={{
										backgroundImage:
											"linear-gradient(to top, #00d0f6, #00dff3, #00ece2, #00f7c4, #03ff9c)",
										px: 6,

										py: 1,
										borderRadius: 1,
										color: "#fff",
									}}
								>
									{row.carbs} <i className="fas fa-caret-down"></i>
								</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AppoinmentTable;
