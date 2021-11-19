import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="cardList">
			<Card style={{ width: "18rem" }}>
				<Card.Title className="cardTitle">{props.element.name}</Card.Title>
				<Card.Body>
					<Card.Img
						variant="top"
						src="https://elcomercio.pe/resizer/EjmehelmOk1BxT7upG_dfdw78eA=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg"
					/>
					<div className="cardBottom">
						<Link to={`/characters/${props.element.uid}`}>
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

CharacterCard.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	element: PropTypes.string
};

export default CharacterCard;
