import React, {Component} from 'react';
import './App.css';
import {getTODO, getSW} from './utils';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		};
	}

	render() {
		const results = this.state.results.map(({
													userId, id, title, completed,
													name, height, mass, hair_color, skin_color
		} = {}, index) => {
			return <div key={index} className="data-item">
				{userId && <div><span>User ID:</span><span>{userId}</span></div>}
				{id && <div><span>ID:</span><span>{id}</span></div>}
				{title && <div><span>title:</span><span>{title}</span></div>}
				{completed && <div><span>completed:</span><span>{completed}</span></div>}
				{name && <div><span>Name: </span><span>{name}</span></div>}
				{height && <div><span>Height: </span><span>{height}</span></div>}
				{mass && <div><span>Mass: </span><span>{mass}</span></div>}
				{hair_color && <div><span>Hair Color: </span><span>{hair_color}</span></div>}
				{skin_color && <div><span>Skin Color: </span><span>{skin_color}</span></div>}
            </div>
		});

		const {loading} = this.state;
		const loadingClass = loading? 'loader-show' : '';

		return (
			<div className="App">
				<div className="container">
					<div id="loader-indicator" className={loadingClass} role="alert" aria-busy="true"></div>
					<div className="to-dos">
						<div className="title">TODO:</div>
						<button onClick={e => {
							this.setState({
									loading: true
								}, () => {
								getTODO().then((response = []) => {
									this.setState({
										loading: false,
										results: [...response]
									});
								}).catch(error => {
									console.error(error.message);
								})
							});
						}}>Get Data
						</button>
					</div>
					<div className="article">
						<div className="title">Star Wars:</div>
						<button onClick={e => {
							this.setState({
								loading: true
							}, () => {
								getSW().then(({results = []} = {}) => {
									this.setState({
										loading: false,
										results: [...results]
									});
								}).catch(error => {
									console.error(error.message);
								});
							});
						}}>Get Data
						</button>
					</div>
					<div className="results">
						<div className="title">Results:</div>
						<div id="results-container">{results}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
