import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CardsPlanets from "../component/cardsPlanets.jsx";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [planetList, setPlanetList] = useState([]);

	useEffect(
		() => {
			if (store.planets.length != 0) {
				setPlanetList(
					store.planets.map(planet => {
						return <CardsPlanets key={planet.uid} name={planet.name} url={planet.url} element={planet} />;
					})
				);
				console.log("variable PlanetList", planetList);
			}
		},
		[store.planets]
	);

	return <ul>{planetList}</ul>;
};
