const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			urlStarships: "https://www.swapi.tech/api/starships",
			urlStarshipsDetails: "https://www.swapi.tech/api/starships",
			starships: [],
			starshipsDetails: [],
			favourites: []
		},
		actions: {
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
						console.log("AUXILIO", error.message);
					});
			},

			getStarshipsDetails: id => {
				fetch(getStore().urlStarshipsDetails.concat("/", id))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("FAIL DOWNLOADING STARSHIPS");
					})
					.then(responseAsJSON => {
						setStore({
							starshipsDetails: [responseAsJSON.result.properties]
						});
						console.log("QUE MIERDAS HAY AQUI", getStore().starshipsDetails);
					})
					.catch(error => {
						console.log("AUXILIO", error.message);
					});
			},

			addFavourite: name => {
				//en favoritos hacemos un spread para conseguir la info
				setStore({ favourites: [...getStore().favourites, name] });
			}
		}
	};
};

export default getState;
