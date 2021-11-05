import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card">
			<div className="card-header">PERSONAJE 1{/* props.name */}</div>
			<div className="card-body">FOTO 1</div>
			<div className="card-description">LA PUTA MADRE DE LA CARD EN PATINETE</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string
};

export default Card;
