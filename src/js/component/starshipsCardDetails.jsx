import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const StarshipsCardDetails = props => {
	return (
		<div>
			<Card className="details">
				<div>
					<Card.Img
						variant="top"
						src="https://www.denofgeek.com/wp-content/uploads/2016/01/star-destroyer_0-scaled.jpg?resize=768%2C432"
					/>
				</div>
				<div>
					<Card.Body className="cardTitleDetails">
						<Card.Title className="cardTextDetails">{props.element.name}</Card.Title>
						<Card.Text>
							<ul>
								<li>
									Model:
									{props.element.model}
								</li>
								<li>
									Starship class:
									{props.element.starship_class}
								</li>
								<li>
									Manufacturer:
									{props.element.manufacturer}
								</li>
								<li>
									Cost in credits:
									{props.element.cost_in_credits}
								</li>
								<li>
									Lenght:
									{props.element.lenght}
								</li>
								<li>
									Crew:
									{props.element.crew}
								</li>
								<li>
									Passengers:
									{props.element.passenger}
								</li>
								<li>
									Max atmosphering speed:
									{props.element.max_atmosphering_speed}
								</li>
								<li>
									Hyperdrive rating:
									{props.element.hyperdrive_rating}
								</li>
								<li>
									MGLT:
									{props.element.MGLT}
								</li>
								<li>
									Cargo capacity:
									{props.element.cargo_capacity}
								</li>
								<li>
									Consumables:
									{props.element.consumables}
								</li>
								<li>
									Pilots:
									{props.element.pilots}
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
				</div>
			</Card>
		</div>
	);
};

StarshipsCardDetails.propTypes = {
	element: PropTypes.object
};

export default StarshipsCardDetails;
