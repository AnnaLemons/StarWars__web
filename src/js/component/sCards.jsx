import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const SCards = props => {
	const { store, actions } = useContext(Context);
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
								actions.addFavourite(props);
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
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	element: PropTypes.string
};

export default SCards;
