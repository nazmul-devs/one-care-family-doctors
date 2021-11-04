import React from "react";
import AppoinmentHeader from "../AppoinmentHeader/AppoinmentHeader";
import AppoinmentModal from "../AppoinmnetModal/AppoinmentModal";
import AvailableAppoinment from "../AvailableAppoinment/AvailableAppoinment";

const Appoinment = () => {
	const [value, setValue] = React.useState(new Date());
	const handleOpen = () => setOpen(true);
	const [open, setOpen] = React.useState(false);

	const handleClose = () => setOpen(false);
	return (
		<div>
			<AppoinmentHeader value={value} setValue={setValue} />
			<AvailableAppoinment value={value} handleOpen={handleOpen} />
			<AppoinmentModal
				handleOpen={handleOpen}
				open={open}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default Appoinment;
