const getState = ({ getStore, getActions, setStore }) => {
	//getStore: para leer el store (buscar)
	//setstore: para modificar/escribir el store (modificar)
	//getactions: para llamar a las acciones (buscar)
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
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
						throw new Error("primer fetch que no funciona");
					})
					.then(responseAsJSON => {
						console.log(responseAsJSON);
						setStore({ planets: [...getStore().planets, ...responseAsJSON.results] });
						// esto se está llamando todo el rato (por la recursividad, que se llama así misma)
						setStore({ urlPlanets: responseAsJSON.next });
						// if (responseAsJSON.next) {
						// 	getActions().getPlanets();
						// }
					})

					.catch(error => {
						console.log("auxilio1", error.message);
					});
			},
			getPlanetsDetails: uid => {
				fetch(getStore().urlPlanetsDetails.concat(uid))
					.then(answer => {
						if (answer.ok) {
							return answer.json();
						}
						throw new Error("FATAL ERROR");
					})
					.then(answerAsJSON => {
						setStore({ planetDetails: [answerAsJSON.result.properties] });
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
						console.log("auxilio2", error.message);
					});
			},

			//va una coma después porque es un objeto
			addFavourite: itemFavourite => {
				console.log(getStore().favourites);
				//en favoritos hacemos un spread para conseguir la info de favoritos
				setStore({ favourites: [...getStore().favourites, itemFavourite] });
			}
		}
	};
};

export default getState;
