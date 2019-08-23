import React, {Component} from 'react';
import './App.css';
import {getTODO, getArticle} from './utils';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todoResults: [],
			articleResults: []
		}
	}

	render() {
		const todoItems = this.state.todoResults.map((item, index) => {
			return <div key={`todo_${index}`} className="data-item">
              <div>User ID:{item.userId}</div>
              <div>ID:{item.userId}</div>
              <div>title:{item.title}</div>
              <div>completed:{item.completed}</div>
            </div>
		});
		const articleItems = this.state.articleResults.map((item, index) => {
			return <div key={`article_${index}`} className="data-item">
              <div>Author: {item.author.display_name}</div>
              <div>User Name: {item.author.username}</div>
              <div>Short Title: {item.short_title}</div>
              <div>Slug: {item.slug}</div>
              <div>Summary: {item.summary}</div>
            </div>
		});

		return (
			<div className="App">
				<div className="container">
					<div className="to-dos">
						<div className="title">TODO:</div>
						<button onClick={e => {
							getTODO().then(response => {
								this.setState({
									todoResults: [response]
								});
							}).catch(error => {
								console.error(error.message);
							});
						}}>Get Data
						</button>
					</div>
					<div className="article">
						<div className="title">Article:</div>
						<button onClick={e => {
							getArticle().then(response => {
								this.setState({
									articleResults: [response.result[0]]
								});
							}).catch(error => {
								console.error(error.message);
							});
						}}>Get Data
						</button>
					</div>
					<div className="results">
						<div className="title">Results:</div>
						<div>
							<div className="col">
                              <div>TODO</div>
								{todoItems}
							</div>
							<div className="col">
                              <div>Article</div>
								{articleItems}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
