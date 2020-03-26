export function getTODO() {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
};

export function getSW() {
	return fetch('https://swapi.co/api/people/')
		.then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
};
