import React from "react";
import PropTypes from "prop-types";

const SpeciesDetails = props => {
	console.log("pepito");
	return (
		<div>
			<div>
				<ul>
					<li>average_height: {props.element.average_height}</li>
					<li>average_lifespan: {props.element.average_lifespan}</li>
					<li>classification: {props.element.classification}</li>
					<li>designation: {props.element.designation}</li>
					<li>Eye Color: {props.element.eye_color}</li>
					<li>hair_colors: {props.element.hair_colors}</li>
					<li>Gender: {props.element.hair_color}</li>
					<li>language: {props.element.language}</li>
					<li>Edited: {props.element.edited}</li>
					<li>skin_colors: {props.element.skin_colors}</li>
				</ul>
			</div>
		</div>
	);
};

SpeciesDetails.propTypes = {
	element: PropTypes.object
};

export default SpeciesDetails;
