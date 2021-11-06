import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SCards = props => {
	return (
		<div className="sbody">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIdouXeNKF3kNU4Vx12Kda18pAbW0-YahnA&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>{props.element.name}</Card.Title>
					<Card.Text>
						{" "}
						{console.log(props.element)}
						Info: -Classification: {props.element.classification}
						-Heigth: {props.element.average_height}
						-Lifespan: {props.element.average_lifespan}
					</Card.Text>
					<Link to="/speciesid">
						<Button variant="primary">Go somewhere</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

SCards.propTypes = {
	element: PropTypes.object
};

export default SCards;
