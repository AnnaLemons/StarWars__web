import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard.jsx";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [characterList, setCharacterList] = useState([]);

	useEffect(
		() => {
			if (store.characters.length != 0) {
				setCharacterList(
					store.characters.map((character, index) => {
						return <CharacterCard key={index.toString()} uid={character.uid} element={character} />;
					})
				);
			}
		},
		[store.characters]
	);

	return <div className="characterCards">{characterList}</div>;
};
