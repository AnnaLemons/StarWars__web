import { Context } from "../store/appContext";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import SpeciesCardsDetails from "../component/speciesCardDetails.jsx";

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

	return (
		<div>
			{detailElements}
			<audio src="https://www.bensound.com/bensound-music/bensound-littleplanet.mp3" autoPlay />
		</div>
	);
};

export default SpeciesId;
