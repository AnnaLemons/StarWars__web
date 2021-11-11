import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { CharactersId } from "./views/charactersId.jsx";
import { Characters } from "./views/characters.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Starships } from "./views/Starships.jsx";

import { Single } from "./views/single";
import injectContext from "./store/appContext";

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
					<Route path="/characters" element={<Characters />} />
					<Route path="/characters/:uid" element={<CharactersId />} />
						<Route>
							<h1>Not found!</h1>
						</Route>
				</Routes
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
