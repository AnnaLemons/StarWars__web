import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Planets } from "./views/planets.jsx";
import { PlanetsId } from "./views/PlanetsId.jsx";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/planets" element={<Planets />} />
					<Route path="/planets/:uid" element={<PlanetsId />} />
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
