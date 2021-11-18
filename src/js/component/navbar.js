import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log("favorito", store.favourites);

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
			<div className="ml-auto">
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link>
			</div>
			<div className="charactersLink">
				<Link to="/characters">
					<button className="btn btn-primary">Characters</button>
				</Link>
				<div>
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Corazoncito
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{store.favourites.map((favorites, index) => (
								<Dropdown.Item key={index.toString()} href="#/action-1">
									{favorites.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
