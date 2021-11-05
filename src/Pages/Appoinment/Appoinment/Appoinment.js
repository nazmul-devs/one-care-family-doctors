import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import AppoinmentHeader from "../AppoinmentHeader/AppoinmentHeader";
import AvailableAppoinment from "../AvailableAppoinment/AvailableAppoinment";

const Appoinment = () => {
	const [value, setValue] = React.useState(new Date());

	return (
		<div>
			<Header />
			<AppoinmentHeader value={value} setValue={setValue} />
			<AvailableAppoinment value={value} />
			<Footer />
		</div>
	);
};

export default Appoinment;
