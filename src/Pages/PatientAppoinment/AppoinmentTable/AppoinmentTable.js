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

const AppoinmentTable = ({ data }) => {
	return (
		<TableContainer component={Paper} sx={{ height: 425, pt: 2, px: 6 }}>
			<Table size="small" aria-label="appoinment table">
				<TableHead>
					<TableRow>
						<TableCell align="center" sx={{ border: "none", p: 1 }}>
							Name
						</TableCell>
						<TableCell align="center" sx={{ border: "none", p: 1 }}>
							Schedule
						</TableCell>
						<TableCell align="center" sx={{ border: "none" }}>
							Action
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row._id}>
							<TableCell align="center" sx={{ border: "none", p: 1 }}>
								{row.name}
							</TableCell>
							<TableCell align="center" sx={{ border: "none", p: 1 }}>
								{row.email}
							</TableCell>
							<TableCell align="center" sx={{ border: "none" }}>
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
									{row.date} <i className="fas fa-caret-down"></i>
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
