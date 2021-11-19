import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Context } from "../store/appContext";

const CardsStarships = props => {
	const { store, actions } = useContext(Context);
	console.log("card ", props.element);
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Title>{props.element.name}</Card.Title>
				<Card.Body>
					<Card.Img
						variant="top"
						src="https://www.denofgeek.com/wp-content/uploads/2016/01/star-destroyer_0-scaled.jpg?resize=768%2C432"
					/>
					<div>
						<Link to={`/Starships/${props.element.uid}`}>
							<Button variant="primary">Details</Button>
						</Link>
						<Button
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

CardsStarships.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	element: PropTypes.string
};
export default CardsStarships;
