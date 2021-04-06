// Hour count: 2

import {React, Component} from 'react'

import StartScreen from './components/StartScreen'
import FinishScreen from "./components/FinishScreen";
import Board from "./components/Board";

import './App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			gameState: "init",
			numberOfPairs: 0
		}
	}

	initGame = numberOfPairs => {
		this.setState({
			gameState : "playing",
			numberOfPairs,
		})
	}

	finishGame = () => {
		this.setState({
			gameState : "finished",
		})
	}

	playAgain = () => {
		this.setState({
			gameState: "playing"
		});
	}

	resetGame = () => {
		this.setState({
			gameState: "init"
		});
	}

	render() {
		let currentScreen = null;
		switch (this.state.gameState){
			case "init":
				currentScreen = <StartScreen initGame={this.initGame} />
				break;
			case "playing":
				currentScreen = <Board numberOfPairs={this.state.numberOfPairs} finishGame={this.finishGame} />
				break;
			case "finished":
				currentScreen = <FinishScreen playAgain={this.playAgain} resetGame={this.resetGame}/>
				break;
			default:
				currentScreen = null;
				break;
				
		}
		return (
			<div className="App">
				{ currentScreen }
			</div>
		);
	}
}

export default App;
