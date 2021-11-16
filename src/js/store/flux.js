const getState = ({ getStore, getActions, setStore }) => {
	//getStore: para leer el store
	//setstore: para modificar/escribir el store
	//getactions: para llamar a las acciones
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			urlPlanets: "https://www.swapi.tech/api/planets/",
			urlPlanetsDetails: "https://www.swapi.tech/api/planets/",
			planets: [],
			planetDetails: [],
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
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("segundo fetch que no funciona?");
					})
					.then(responseAsJSON => {
						setStore({ planetDetails: [responseAsJSON.result.properties] });
						console.log("INFO DETALLE PLANETAS EN FLUX", responseAsJSON.result);
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
