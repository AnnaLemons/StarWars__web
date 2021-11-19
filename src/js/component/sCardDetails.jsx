import React from "react";
import PropTypes from "prop-types";

const SCardDetails = props => {
	return <p>{props.name}</p>;
};

SCardDetails.propTypes = {
	name: PropTypes.string
};

export default SCardDetails;
