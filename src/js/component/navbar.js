import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navigation navbar navbar-default navbar-fixed-top">
			<Link to="/">
				<span className="navbar-brand btn">
					<i className="fab fa-galactic-senate" />
				</span>
			</Link>

			<div className="ml-auto">
				<Link to="/species">
					<button className="btn">Especies</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/characters">
					<button className="btn">Characters</button>
				</Link>
			</div>
		</nav>
	);
};
