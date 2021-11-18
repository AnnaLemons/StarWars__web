import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SCards = props => {
	return (
		<div className="cardList">
			<Card style={{ width: "18rem" }}>
				<Card.Title className="cardTitle">{props.element.name}</Card.Title>
				<Card.Body>
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIdouXeNKF3kNU4Vx12Kda18pAbW0-YahnA&usqp=CAU"
					/>
					<div className="cardBotton">
						<Link to={`/speciesid/${props.element.uid}`}>
							<Button className="btn" variant="danger">
								Details
							</Button>
						</Link>
						<Button
							className="btn"
							variant="danger"
							onClick={() => {
								actions.addFavourite(props.element.name);
							}}>
							<i className="fab fa-jedi-order" />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

SCards.propTypes = {
	element: PropTypes.object
};

export default SCards;
