import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="btn navbar">
			<Link to="/">
				<button className="btn home ">
					<i className="fab fa-galactic-senate" />
				</button>
			</Link>
			<Link to="/species">
				<button className="btn ">Species</button>
			</Link>
			<Link to="/planets">
				<button className="btn ">Planets</button>
			</Link>
			<Link to="/starships">
				<button className="btn ">Starships</button>
			</Link>
			<Link to="/characters">
				<button className="btn">Characters</button>
			</Link>

			<div>
				<Dropdown>
					<Dropdown.Toggle className="dropdown" variant="danger" id="dropdown-basic">
						Favourites
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favourites.map((favourites, index) => (
							<Dropdown.Item key={index.toString()} href="#/action-1">
								{favourites.name}
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
