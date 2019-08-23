export function getTODO() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => {
			return response.json();
		});
};

export function getArticle() {
	return fetch('http://mtrest.advance.net/mtrest/articles/?blog_id=3674&limit=10&offset=0')
		.then(response => {
			return response.json();
		});
};
