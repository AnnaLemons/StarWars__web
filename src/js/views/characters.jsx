import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	console.log(store.characters);
	return (
		<div>
			<Card />
		</div>
	);
};
