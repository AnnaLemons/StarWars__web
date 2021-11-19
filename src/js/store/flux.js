const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			urlStarships: "https://www.swapi.tech/api/starships",
			urlStarshipsDetails: "https://www.swapi.tech/api/starships",
			starships: [],
			starshipsDetails: [],
			urlPlanets: "https://www.swapi.tech/api/planets/",
			urlPlanetsDetails: "https://www.swapi.tech/api/planets/",
			planets: [],
			planetDetails: [],

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
			getPlanets: () => {
				fetch(getStore().urlPlanets)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("FAIL DOWNLOADING PLANETS");
					})
					.then(responseAsJSON => {
						setStore({ planets: [...getStore().planets, ...responseAsJSON.results] });
						setStore({ urlPlanets: responseAsJSON.next });
						if (responseAsJSON.next) {
							getActions().getPlanets();
						}
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			// ##ZZZZZZZZZZZZZZZZZNMMnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
			getPlanetsDetails: uid => {
				fetch(getStore().urlPlanetsDetails.concat(uid))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("FAIL DOWNLOADING PLANETS DETAILS");
					})
					.then(responseAsJSON => {
						setStore({ planetDetails: [responseAsJSON.result.properties] });
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			// ##ZZZZZZZZZZZZZZZZZNMMnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
			getStarships: () => {
				fetch(getStore().urlStarships)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("FAIL DOWNLOADING STARSHIPS");
					})
					.then(responseAsJSON => {
						setStore({ starships: [...getStore().starships, ...responseAsJSON.results] });
						setStore({ urlStarships: responseAsJSON.next });
						if (responseAsJSON.next) {
							getActions().getStarships();
						}
					})
					.catch(error => {
						console.log(error.message);
					});
			},

			getStarshipsDetails: id => {
				fetch(getStore().urlStarshipsDetails.concat("/", id))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("FAIL DOWNLOADING STARSHIPS DETAILS");
					})
					.then(responseAsJSON => {
						setStore({
							starshipsDetails: [responseAsJSON.result.properties]
						});
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

						throw new Error("FAIL DOWNLOADING CHARACTERS");
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
						throw new Error("FAIL DOWNLOADING CHARACTERS DETAILS");
					})
					.then(answerAsJSON => {
						setStore({ charactersDetails: [answerAsJSON.result.properties] });
					})
					.catch(error => {
						console.log(error.message);
					});
			},

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
						throw new Error("FAIL DOWNLOADING SPECIES DETAILS");
					})
					.then(answerAsJson => {
						setStore({ speciesDetails: [answerAsJson.result.properties] });
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
