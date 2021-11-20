import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const SpeciesCardsDetails = props => {
	console.log("pepito");
	return (
		<div>
			<Card className="details">
				<Card.Img
					variant="top"
					src="https://www.pandaancha.mx/plds/articulos/bdd755d1ed729c01a5bb0bbb195eb0c9614987625.jpg"
				/>
				<Card.Body>
					<Card.Title className="cardTitleDetails">{props.element.name}</Card.Title>
					<Card.Text className="cardTextDetails">
						<ul>
							<li>Average height: {props.element.average_height}</li>
							<li>Average lifespan: {props.element.average_lifespan}</li>
							<li>Classification: {props.element.classification}</li>
							<li>Designation: {props.element.designation}</li>
							<li>Eye Color: {props.element.eye_color}</li>
							<li>Hair colors: {props.element.hair_colors}</li>
							<li>Gender: {props.element.hair_color}</li>
							<li>Language: {props.element.language}</li>
							<li>Edited: {props.element.edited}</li>
							<li>Skin colors: {props.element.skin_colors}</li>
						</ul>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

SpeciesCardsDetails.propTypes = {
	element: PropTypes.object
};

export default SpeciesCardsDetails;
