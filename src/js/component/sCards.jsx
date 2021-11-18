import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SCards = props => {
	return (
		<div className="sbody">
			<Card style={{ width: "18rem" }}>
				<Card.Title>{props.element.name}</Card.Title>
				<Card.Body>
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIdouXeNKF3kNU4Vx12Kda18pAbW0-YahnA&usqp=CAU"
					/>
					<Link to={`/speciesid/${props.element.uid}`}>
						<Button variant="primary">Details</Button>
					</Link>
					<Button
						onClick={() => {
							console.log("He clickado", props.name);
							actions.addFavourite(props);
						}}>
						<i className="fab fa-jedi-order" />
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

SCards.propTypes = {
	element: PropTypes.object
};

export default SCards;
