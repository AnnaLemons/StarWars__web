const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/"
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
			}
		}
	};
};

export default getState;
