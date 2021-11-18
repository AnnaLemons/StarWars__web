import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="body">
			<div id="starwars" className="animate">
				<p className="intro">A long time ago, in a galaxy far, far away...</p>
				<img src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png" className="logo" />
				<div id="reel">
					<div className="content">
						<h1>Episode IV</h1>
						<h2>A NEW HOPE</h2>
						<p>
							It is a period of coding war. Rebel 4Geeks coders, striking from a hidden terminal, have won
							their first victory against the evil JavaScript Empire.
						</p>

						<p>
							During the battle, Rebel spies managed to steal repositories from , the DEATH STAR, an
							armored space station with enough power to destroy an entire planet.
						</p>

						<p>
							Pursued by the Empire sinister agents, Princess Leia races home aboard her starship,
							custodian of the stolen plans that can save her people and restore freedom to the galaxy....
						</p>
					</div>
				</div>

				<audio
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/244725/MainTitle.ogg"
					onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)"
				/>

				<button>Restart</button>
			</div>
		</div>
	);
};
