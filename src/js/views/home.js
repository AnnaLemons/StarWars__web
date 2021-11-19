import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="body">
			<audio src="https://www.bensound.com/bensound-music/bensound-newdawn.mp3" autoPlay />
			<div id="starwars" className="animate">
				<p className="intro">A long time ago, in a galaxy far, far away...</p>
				<img src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png" className="logo" />
				<div id="reel">
					<div className="content">
						<h1>Full Time VI</h1>
						<h2>A NEW HOPE</h2>
						<p>
							It is a period of coding war. Rebel 4Geeks coders, striking from a hidden terminal, have won
							their first victory against the evil JavaScript Empire.
						</p>

						<p>
							During the battle, Rebel spies managed to steal repositories from , the GITHUB, an armored
							their proyects with enough power to destroy an entire console error station.
						</p>

						<p>
							Pursued by the Python sinister language, Princess Jimena races home aboard her starship,
							custodian of the corrected codes that can save her students and restore freedom to the
							galaxy....
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
