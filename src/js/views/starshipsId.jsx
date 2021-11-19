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
										<Card.Title>{element.name}</Card.Title>
										<Card.Text>
											<ul>
												<li>
													model:
													{element.model}
												</li>
												<li>
													starship_class:
													{element.starship_class}
												</li>
												<li>
													manufacturer:
													{element.manufacturer}
												</li>
												<li>
													cost_in_credits:
													{element.cost_in_credits}
												</li>
												<li>
													lenght:
													{element.lenght}
												</li>
												<li>
													crew:
													{element.crew}
												</li>
												<li>
													passengers:
													{element.passenger}
												</li>
												<li>
													max_atmosphering_speed:
													{element.max_atmosphering_speed}
												</li>
												<li>
													hyperdrive_rating:
													{element.hyperdrive_rating}
												</li>
												<li>
													MGLT:
													{element.MGLT}
												</li>
												<li>
													cargo_capacity:
													{element.cargo_capacity}
												</li>
												<li>
													consumables:
													{element.consumables}
												</li>
												<li>
													pilots:
													{element.pilots}
												</li>
												<li>
													created:
													{element.created}
												</li>
												<li>
													edited:
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

	return <div>{starshipsDetail}</div>;
};
