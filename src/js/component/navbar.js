import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<span className="navbar-brand">Home</span>
			</Link>

			<div className="ml-auto">
				<Link to="/species">
					<button className="btn btn-primary">Especies</button>
				</Link>
			</div>
			<div className="charactersLink">
				<Link to="/characters">
					<button className="btn btn-primary">Characters</button>
				</Link>
			</div>
		</nav>
	);
};
