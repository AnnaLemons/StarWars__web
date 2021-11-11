const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			urlCharacters: "https://www.swapi.tech/api/people/",
			urlCharactersDetail: "https://www.swapi.tech/api/people/",
			characters: [],
			charactersDetails: [],
			favourites: []
		},
		actions: {
			getStarships: () => {
				fetch(getStore().baseUrl.concat("starships"))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
            throw new Error("FAIL DOWNLOADING STARSHIPS");
					})
					.then(responseAsJSON => {
						console.log("JSON", responseAsJSON);
						//setStore({ startships: responseAsJson });
					})
					.catch(error => {
						console.log("AUXILIO", error);
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
						// if (responseAsJSON.next) {
						// 	getActions().getCharacters();
						// }
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
