import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log("favorito", store.favourites);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/planets">
					<button className="btn btn-primary">Check the Context in action</button>
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
