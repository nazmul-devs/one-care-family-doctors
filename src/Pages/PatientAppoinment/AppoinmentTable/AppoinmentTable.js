import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
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
		<TableContainer component={Paper} sx={{ height: 425, pt: 2 }}>
			<Table size="small" aria-label="appoinment table">
				<TableHead>
					<TableRow>
						<TableCell align="right" sx={{ border: "none", p: 1 }}>
							Name
						</TableCell>
						<TableCell align="right" sx={{ border: "none", p: 1 }}>
							Schedule
						</TableCell>
						<TableCell align="right" sx={{ border: "none", pr: 4 }}>
							Action
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell align="right" sx={{ border: "none", p: 1 }}>
								{row.calories}
							</TableCell>
							<TableCell align="right" sx={{ border: "none", p: 1 }}>
								{row.fat}
							</TableCell>
							<TableCell align="right" sx={{ border: "none", pr: 4 }}>
								{row.carbs}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AppoinmentTable;
