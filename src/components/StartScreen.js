import {React, Component} from 'react'

import '../styles/StartScreen.css';

class StartSCreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            numberOfPairs: 1
        }
    }

    handleChange = event => {
        this.setState({
            numberOfPairs: event.target.value
        })
    }

    render() {
        return (
            <div className="StartScreen">
                <p>Selecciona el número de pares</p>
                <select onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
              </select>
              <br />
              <button onClick={() => this.props.initGame(this.state.numberOfPairs)}> Iniciar Juego!</button>
            </div>
        )
    }
}

export default StartSCreen;