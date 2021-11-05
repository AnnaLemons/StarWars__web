const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			species: []
		},
		actions: {
			getSpecies: () => {
				fetch(getStore().baseUrl.concat("species"))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("FAIL DOWNLOADING SPECIES");
					})
					.then(responseAsJson => {
						setStore({ species: responseAsJson.results });
					})
					.catch(error => {
						console.log(console.error());
					});
			}
		}
	};
};

export default getState;
