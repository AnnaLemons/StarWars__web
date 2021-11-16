import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CardDetailsPlanet from "../component/cardsDetailsPlanet.jsx";
import { Context } from "../store/appContext";

export const PlanetsId = () => {
	const { store, actions } = useContext(Context); //para llamar al flux del fetch
	const [detailPlanetList, setDetailPlanetList] = useState([]);
	let params = useParams(); //detecta los parámetros que tiene el diccionario

	useEffect(() => {
		actions.getPlanetsDetails(params.uid);
		console.log("PARAMS", params.uid);
	}, []);

	useEffect(
		() => {
			setDetailPlanetList(
				store.planetDetails.map((info, index) => {
					return (
						<CardDetailsPlanet
							key={index.toString()}
							element={info}
							diameter={info.diameter}
							rotation_period={info.rotation_period}
							orbital_period={info.orbital_period}
							gravity={info.gravity}
							population={info.population}
							climate={info.climate}
							terrain={info.terrain}
							surface_water={info.surface_water}
							created={info.created}
							edited={info.edited}
							name={info.name}
						/>
					);
				})
			);
		},
		[store.planetDetails]
	);
	console.log("estas haciendo el mapeo?", detailPlanetList);

	return <p>{detailPlanetList}</p>;
};
