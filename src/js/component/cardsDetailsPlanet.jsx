import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const cardDetailsPlanet = props => {
	return (
		<Card>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>PLANETA {props.element.name}</Card.Title>
				<Card.Text>
					<ul>
						<li>diameter: {props.element.diameter}</li>
						<li>rotation_period: {props.element.rotation_period}</li>
						<li>orbital_period: {props.element.orbital_period}</li>
						<li>gravity: {props.element.gravity}</li>
						<li>
							population:
							{props.element.population}
						</li>
						<li>
							climate:
							{props.element.climate}
						</li>
						<li>
							terrain:
							{props.element.terrain}
						</li>
						<li>
							surface_water:
							{props.element.surface_water}
						</li>
						<li>
							created:
							{props.element.created}
						</li>
						<li>
							edited:
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
