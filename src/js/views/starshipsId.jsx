import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";

export const StarshipsId = () => {
	const { store, actions } = useContext(Context);
	const [starshipsDetail, setStarshipsDetail] = useState([]);

	let params = useParams();

	useEffect(() => {
		actions.getStarshipsDetails(params.uid);
	}, []);

	useEffect(
		() => {
			setStarshipsDetail(
				store.starshipsDetails.map((element, index) => {
					return (
						<div key={index.toString()}>
							<Card>
								<div>
									<Card.Img
										variant="top"
										src="https://www.denofgeek.com/wp-content/uploads/2016/01/star-destroyer_0-scaled.jpg?resize=768%2C432"
									/>
								</div>
								<div>
									<Card.Body>
										<Card.Title className="cardTitleDetails">{element.name}</Card.Title>
										<Card.Text className="cardTextDetails">
											<ul>
												<li>
													Model:
													{element.model}
												</li>
												<li>
													Starship class:
													{element.starship_class}
												</li>
												<li>
													Manufacturer:
													{element.manufacturer}
												</li>
												<li>
													Cost in credits:
													{element.cost_in_credits}
												</li>
												<li>
													Lenght:
													{element.lenght}
												</li>
												<li>
													Crew:
													{element.crew}
												</li>
												<li>
													Passengers:
													{element.passenger}
												</li>
												<li>
													Max atmosphering speed:
													{element.max_atmosphering_speed}
												</li>
												<li>
													Hyperdrive rating:
													{element.hyperdrive_rating}
												</li>
												<li>
													MGLT:
													{element.MGLT}
												</li>
												<li>
													Cargo capacity:
													{element.cargo_capacity}
												</li>
												<li>
													Consumables:
													{element.consumables}
												</li>
												<li>
													Pilots:
													{element.pilots}
												</li>
												<li>
													Created:
													{element.created}
												</li>
												<li>
													Edited:
													{element.edited}
												</li>
											</ul>
										</Card.Text>
									</Card.Body>
								</div>
							</Card>
						</div>
					);
				})
			);
		},
		[store.starshipsDetails]
	);

	return (
		<div>
			{starshipsDetail}
			<audio src="https://www.bensound.com/bensound-music/bensound-enigmatic.mp3" autoPlay />
		</div>
	);
};
