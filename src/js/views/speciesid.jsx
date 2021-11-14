import { Context } from "../store/appContext";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";

const SpeciesId = () => {
	const { store, actions } = useContext(Context);
	const [detailElements, setDetailElement] = useState([]);

	let params = useParams();

	useEffect(() => {
		actions.getSpeciesDetails(params.uid);
	}, []);

	useEffect(
		() => {
			setDetailElement(
				store.speciesDetails.map((info, index) => {
					console.log(info);
					return (
						<div key={index.toString()}>
							{info.name}
							<Card className="details">
								<div>
									<Card.Img
										variant="top"
										src="https://elcomercio.pe/resizer/EjmehelmOk1BxT7upG_dfdw78eA=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg"
									/>
								</div>
								<div>
									<Card.Body>
										<Card.Title>{info.name}</Card.Title>
										<Card.Text>
											<ul>
												<li>average_height: {info.average_height}</li>
												<li>average_lifespan: {info.average_lifespan}</li>
												<li>classification: {info.classification}</li>
												<li>designation: {info.designation}</li>
												<li>Eye Color: {info.eye_color}</li>
												<li>hair_colors: {info.hair_colors}</li>
												<li>Gender: {info.hair_color}</li>
												<li>language: {info.language}</li>
												<li>Edited: {info.edited}</li>
												<li>skin_colors: {info.skin_colors}</li>
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
		[store.speciesDetails]
	);

	return <div>{detailElements}</div>;
};

export default SpeciesId;
