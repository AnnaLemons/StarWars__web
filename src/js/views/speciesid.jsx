import { Context } from "../store/appContext";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import SpeciesCardsDetails from "../component/speciesCardDetails.jsx";
import { element } from "prop-types";

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
							<SpeciesCardsDetails element={info} />
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
