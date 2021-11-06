import { Box } from "@mui/system";
import React from "react";
import Banner from "../Banner/Banner";
import bg from "../../../images/bg.png";
import Services from "../Services/Services";
import ExceptionalDental from "../ExceptionalDental/ExceptionalDental";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Testemonial from "../Testemonial/Testemonial";
import Blog from "../Blog/Blog";
import Doctors from "../Doctors/Doctors";
import Contact from "../Contact/Contact";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const BannerBg = {
	background: `url(${bg}) center`,
	backgrounSize: "cover",
};
const Home = () => {
	return (
		<>
			<Header />
			<Box style={BannerBg}>
				<Banner />
			</Box>
			<Services />
			<ExceptionalDental />
			<AppointmentBanner />
			<Testemonial />
			<Blog />
			<Doctors />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
