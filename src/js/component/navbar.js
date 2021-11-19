import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log("favorito", store.favourites);

	return (
		<nav className="navigation navbar navbar-default navbar-fixed-top">
			<Link to="/">
				<span className="navbar-brand btn">
					<i className="fab fa-galactic-senate" />
				</span>
			</Link>

			<div className="ml-auto">
				<Link to="/starships">
					<button className="btn btn-primary">Starships</button>
				</Link>
				<Link to="/species">
					<button className="btn btn-primary">Species</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link>
        <Link to="/characters">
					<button className="btn">Characters</button>
				</Link>
			</div>
			<div className="ml-auto">
				<div>
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Favourites
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
