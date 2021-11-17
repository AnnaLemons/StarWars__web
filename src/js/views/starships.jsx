import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import CardsStarships from "../component/cardsStarships.jsx";

const Starships = () => {
	const { store, actions } = useContext(Context);
	const [starshipsList, setStarshipsList] = useState([]);

	useEffect(
		() => {
			if (store.starships.length != 0) {
				setStarshipsList(
					store.starships.map((data, index) => {
						return <CardsStarships key={index.toString()} element={data} />;
					})
				);
			}
		},
		[store.starships]
	);

	return <div>{starshipsList}</div>;
};

export default Starships;
