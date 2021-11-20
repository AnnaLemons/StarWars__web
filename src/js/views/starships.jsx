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
						return (
							<CardsStarships
								key={index.toString()}
								uid={data.uid}
								name={data.name}
								url={data.url}
								element={data}
							/>
						);
					})
				);
			}
		},
		[store.starships]
	);

	return (
		<div className="starshipsDetails">
			{starshipsList}
			<audio src="https://www.bensound.com/bensound-music/bensound-enigmatic.mp3" autoPlay />
		</div>
	);
};

export default Starships;
