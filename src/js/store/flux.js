const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",

			speciesURL: "https://www.swapi.tech/api/species/",
			speciesURLDetails: "https://www.swapi.tech/api/species/",
			species: [],
			speciesDetails: [],
			urlCharacters: "https://www.swapi.tech/api/people/",
			urlCharactersDetail: "https://www.swapi.tech/api/people/",
			characters: [],
			charactersDetails: [],
			favourites: []
		},

		actions: {
			getSpecies: () => {
				fetch(getStore().speciesURL)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(responseAsJson => {
						setStore({ species: [...getStore().species, ...responseAsJson.results] });
						setStore({ speciesURL: responseAsJson.next });
						if (responseAsJson.next) {
							getActions().getSpecies();
						}
						throw new Error("FAIL DOWNLOADING SPECIES");
					})
					.catch(error => {
						console.log(error.message);
					});
			},

			getSpeciesDetails: id => {
				fetch(getStore().speciesURLDetails.concat(id))
					.then(answer => {
						if (answer.ok) {
							return answer.json();
						}
						throw new Error("FAIL DOWNLOADING SPECIESID");
					})
					.then(answerAsJson => {
						setStore({ speciesDetails: [answerAsJson.result.properties] });
					})
					.catch(error => {
						console.log(error.message);
					});
			},

			getCharacters: () => {
				fetch(getStore().urlCharacters)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						localStorage.setItem("characters", JSON.stringify(getStore().characters));
						localStorage.setItem("characters_info", JSON.stringify(getStore().charactersDetails));

						throw new Error("ERROR DOWNLOADING");
					})
					.then(responseAsJSON => {
						setStore({ characters: [...getStore().characters, ...responseAsJSON.results] });
						setStore({ urlCharacters: responseAsJSON.next });
					})
					.catch(error => {
						console.log(error.message);
					});
			},

			getCharactersDetails: id => {
				fetch(getStore().urlCharactersDetail.concat(id))
					.then(answer => {
						if (answer.ok) {
							return answer.json();
						}
						throw new Error("FATAL ERROR");
					})
					.then(answerAsJSON => {
						setStore({ charactersDetails: [answerAsJSON.result.properties] });
					})
					.catch(error => {
						console.log(error.message);
					});
			},

			addFavourite: name => {
				setStore({ favourites: [...getStore().favourites, name] });
			}
		}
	};
};

export default getState;
