import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./views/home";

import Starships from "./views/starships.jsx";
import { StarshipsId } from "./views/starshipsId.jsx";

import { Planets } from "./views/planets.jsx";
import { PlanetsId } from "./views/PlanetsId.jsx";

import { Characters } from "./views/characters.jsx";
import { CharactersId } from "./views/charactersId.jsx";

import { Species } from "./views/species.jsx";
import SpeciesId from "./views/speciesid.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/starships" element={<Starships />} />
					<Route path="/starships/:uid" element={<StarshipsId />} />
					<Route path="/planets" element={<Planets />} />
					<Route path="/planets/:uid" element={<PlanetsId />} />
					<Route path="/species" element={<Species />} />
					<Route path="/speciesid/:uid" element={<SpeciesId />} />
					<Route path="/characters" element={<Characters />} />
					<Route path="/characters/:uid" element={<CharactersId />} />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
