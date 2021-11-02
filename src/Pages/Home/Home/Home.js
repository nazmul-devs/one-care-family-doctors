import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Banner from "../Banner/Banner";
import bg from "../../../images/bg.png";

const BannerBg = {
	background: `url(${bg}) center`,
	backgrounSize: "cover",
	height: "85vh",
};
const Home = () => {
	return (
		<Box style={BannerBg}>
			<Banner />
		</Box>
	);
};

export default Home;
