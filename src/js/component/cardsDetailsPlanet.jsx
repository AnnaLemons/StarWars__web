import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const cardDetailsPlanet = props => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src="https://i.pinimg.com/originals/73/2b/df/732bdf9f1c83d007ce8ccc7d732eee1e.jpg"
			/>
			<Card.Body>
				<Card.Title className="cardTitleDetails">Planet {props.element.name}</Card.Title>
				<Card.Text className="cardTextDetails">
					<ul>
						<li>Diameter: {props.element.diameter}</li>
						<li>Rotation period: {props.element.rotation_period}</li>
						<li>Orbital period: {props.element.orbital_period}</li>
						<li>Gravity: {props.element.gravity}</li>
						<li>
							Population:
							{props.element.population}
						</li>
						<li>
							Climate:
							{props.element.climate}
						</li>
						<li>
							Terrain:
							{props.element.terrain}
						</li>
						<li>
							Surface water:
							{props.element.surface_water}
						</li>
						<li>
							Created:
							{props.element.created}
						</li>
						<li>
							Edited:
							{props.element.edited}
						</li>
					</ul>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

cardDetailsPlanet.propTypes = {
	element: PropTypes.object
};

export default cardDetailsPlanet;
