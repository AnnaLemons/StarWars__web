import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import SCards from "../component/sCards.jsx";

export const Species = () => {
	const { store, actions } = useContext(Context);
	const [species, setSpecies] = useState([]);

	useEffect(
		() => {
			if (store.species.length != 0) {
				setSpecies(
					store.species.map(specie => {
						return (
							<li key={specie.uid}>
								<SCards element={specie} name={specie.name} url={specie.url} />
							</li>
						);
					})
				);
			}
		},
		[store.species]
	);

	return <ul>{species}</ul>;
};
