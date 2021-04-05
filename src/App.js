// Hour count: 2

import {React, Component} from 'react'

import StartScreen from './components/StartScreen'
import Board from "./components/Board";

import './App.css';

class App extends Component {

	constructor(props){
		super(props);
	}

	dumpState = () => console.log(this.state)


	render() {
		return (
			<div className="App">
				<StartScreen />
				<Board />				
			</div>
		);
	}
}

export default App;
