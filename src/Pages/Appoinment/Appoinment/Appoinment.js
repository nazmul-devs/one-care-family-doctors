import React from "react";
import AppoinmentHeader from "../AppoinmentHeader/AppoinmentHeader";
import AvailableAppoinment from "../AvailableAppoinment/AvailableAppoinment";

const Appoinment = () => {
	const [value, setValue] = React.useState(new Date());

	return (
		<div>
			<AppoinmentHeader value={value} setValue={setValue} />
			<AvailableAppoinment value={value} />
		</div>
	);
};

export default Appoinment;
