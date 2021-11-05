const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/"
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseUrl.concat("people"))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("AUXILIO");
					})
					.then(responseAsJSON => {
						console.log(responseAsJSON);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
