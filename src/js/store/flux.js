const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			speciesURL: "https://www.swapi.tech/api/species/",
			speciesURLDetails: "https://www.swapi.tech/api/species/",
			species: [],
			speciesDetails: [],
			favourites: []
		},
		actions: {
			getSpecies: () => {
				fetch(getStore().speciesURL)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("FAIL DOWNLOADING SPECIES");
					})
					.then(responseAsJson => {
						setStore({ species: [...getStore().species, ...responseAsJson.results] });
						setStore({ speciesURL: responseAsJson.next });
						if (responseAsJson.next) {
							getActions().getSpecies();
						}
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

			addFavourite: name => {
				getStore({ favourites: [...getStore().favourites.name] });
			}
		}
	};
};

export default getState;
