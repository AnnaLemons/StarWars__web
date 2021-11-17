import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardsPlanets = props => {
	const { store, actions } = useContext(Context);
	return (
		<li>
			<Card style={{ width: "18rem" }}>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>hola que tal</Card.Text>
				<Card.Body>
					<Card.Img variant="top" src="https://www.nosolobits.com/imagenes/guia/tatooine_891005164.jpg" />
					<Link to={"/planets/".concat(props.element.uid)}>
						<Button variant="primary">Details</Button>
					</Link>
					<i className="fab fa-jedi-order" />

					<Button
						onClick={() => {
							console.log("He clickado", props.name);
							actions.addFavourite(props);
						}}>
						AÑADIR A FAVORITOS
					</Button>
				</Card.Body>
			</Card>
		</li>
	);
};

CardsPlanets.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	element: PropTypes.string
};

export default CardsPlanets;
