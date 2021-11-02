import { Box } from "@mui/system";
import React from "react";
import Banner from "../Banner/Banner";
import bg from "../../../images/bg.png";
import Services from "../Services/Services";

const BannerBg = {
	background: `url(${bg}) center`,
	backgrounSize: "cover",
	height: "85vh",
};
const Home = () => {
	return (
		<>
			<Box style={BannerBg}>
				<Banner />
			</Box>
			<Services />
		</>
	);
};

export default Home;
