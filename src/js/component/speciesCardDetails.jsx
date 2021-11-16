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
					src="https://elcomercio.pe/resizer/EjmehelmOk1BxT7upG_dfdw78eA=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg"
				/>
				<Card.Body>
					<Card.Title>{props.element.name}</Card.Title>
					<Card.Text>
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
