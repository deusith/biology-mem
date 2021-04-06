import {React, Component} from 'react';

class FinishScreen extends Component{
    render(){
        return (
            <div className="FinishScreen">
                <p>this is the end</p>
                <button onClick={() => this.props.playAgain()}>Play Again?</button>
                <button onClick={() => this.props.resetGame()}>Reset Game?</button>
            </div>
        );
    }
}

export default FinishScreen;