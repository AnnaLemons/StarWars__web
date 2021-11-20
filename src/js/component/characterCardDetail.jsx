import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const CharacterCardDetail = props => {
	return (
		<div>
			<Card className="details">
				<div>
					<Card.Img
						variant="top"
						src="https://elcomercio.pe/resizer/EjmehelmOk1BxT7upG_dfdw78eA=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg"
					/>
				</div>
				<div>
					<Card.Body>
						<Card.Title className="cardTitleDetails">{props.element.name}</Card.Title>
						<Card.Text className="cardTextDetails">
							<ul>
								<li>Height: {props.element.height}</li>
								<li>Mass: {props.element.mass}</li>
								<li>Hair Color: {props.element.hair_color}</li>
								<li>Skin Color: {props.element.skin_color}</li>
								<li>Eye Color: {props.element.eye_color}</li>
								<li>Birth Year: {props.element.birth_year}</li>
								<li>Gender: {props.element.gender}</li>
								<li>Created: {props.element.created}</li>
								<li>Edited: {props.element.edited}</li>
								<li>Homeworld: {props.element.homeworld}</li>
							</ul>
						</Card.Text>
					</Card.Body>
				</div>
			</Card>
		</div>
	);
};

CharacterCardDetail.propTypes = {
	element: PropTypes.object
};

export default CharacterCardDetail;
