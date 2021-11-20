import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import CharacterCardDetail from "../component/characterCardDetail.jsx";

export const CharactersId = () => {
	const { store, actions } = useContext(Context);
	const [detailElements, setDetailElements] = useState([]);

	let params = useParams();
	// const URL = store.urlCharacters;

	useEffect(() => {
		actions.getCharactersDetails(params.uid);
	}, []);

	useEffect(
		() => {
			setDetailElements(
				store.charactersDetails.map((info, index) => {
					return (
						<CharacterCardDetail
							key={index.toString()}
							name={info.name}
							height={info.height}
							mass={info.mass}
							hair={info.hair_color}
							skin={info.skin_color}
							eyes={info.eye_color}
							birthyear={info.birth_year}
							gender={info.gender}
							created={info.created}
							edited={info.edited}
							homeworld={info.homeworld}
							element={info}
						/>
					);
				})
			);
		},
		[store.charactersDetails]
	);

	return (
		<div>
			{detailElements}
			<audio src="https://www.bensound.com/bensound-music/bensound-deepblue.mp3" autoPlay />
		</div>
	);
};
