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
					<Card.Body>
						<Card.Title>{props.element.name}</Card.Title>
						<Card.Text>
							<ul>
								<li>
									model:
									{props.element.model}
								</li>
								<li>
									starship_class:
									{props.element.starship_class}
								</li>
								<li>
									manufacturer:
									{props.element.manufacturer}
								</li>
								<li>
									cost_in_credits:
									{props.element.cost_in_credits}
								</li>
								<li>
									lenght:
									{props.element.lenght}
								</li>
								<li>
									crew:
									{props.element.crew}
								</li>
								<li>
									passengers:
									{props.element.passenger}
								</li>
								<li>
									max_atmosphering_speed:
									{props.element.max_atmosphering_speed}
								</li>
								<li>
									hyperdrive_rating:
									{props.element.hyperdrive_rating}
								</li>
								<li>
									MGLT:
									{props.element.MGLT}
								</li>
								<li>
									cargo_capacity:
									{props.element.cargo_capacity}
								</li>
								<li>
									consumables:
									{props.element.consumables}
								</li>
								<li>
									pilots:
									{props.element.pilots}
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
				</div>
			</Card>
		</div>
	);
};

StarshipsCardDetails.propTypes = {
	element: PropTypes.object
};

export default StarshipsCardDetails;
