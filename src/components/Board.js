import {React, Component} from 'react';
import { nanoid } from 'nanoid';

import Card from './Card';

// import '../styles/StartScreen.css';


const shuffleArray = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const figures = shuffleArray([
  "circle",
  "square",
  "triangle",
  "pentagon",
  "hexagon",
  "bestagon!!!"
]);

class Board extends Component {

    setupCardDeck = idsArray => {
        const deck = [];
        const figuresCopy = [...figures]
        let figure = "";
    
        idsArray.forEach( id => {
          figure = figuresCopy.shift();
          deck.push({
            pairId: id.pairId,
            figure,
            cardKey: `${id.pairId}$1`
          })
          deck.push({
            pairId: id.pairId,
            figure,
            cardKey: `${id.pairId}$2`
          })
        });
        return shuffleArray(deck);
    }
    
    setupIdsArray = pairs => {
    const array = [];
    for(let i = 0; i < pairs; i++){
        array.push({
        pairId: nanoid(),
        hasBeenFound: false
        });
    }
    return array;
    }
    
    constructor(props){
        super(props);

        this.finshGame = this.finishGame.bind(this);

        const idsArray = this.setupIdsArray(props.numberOfPairs);

        this.state = {
            cardDeckLimit : props.numberOfPairs * 2,
            cardDeck : this.setupCardDeck(idsArray),
            idsArray,
            discoveredPairs : 0,
            card1 : "",
            card2 : ""
        }   
    }

    finishGame(){
        this.props.finishGame();
    }
    
    clickHandlder = cardKey => {
        if (!this.state.card1){
            this.setState({card1: cardKey})
        }
        else if(!this.state.card2){
            const equalCards = this.state.card1.split("$")[0] === cardKey.split("$")[0];
            const newIdsArray = [...this.state.idsArray];
            let newDiscoveredPairs = this.state.discoveredPairs;

            if(equalCards){
                const pairId = cardKey.split("$")[0];
                for(let i = 0; i < newIdsArray.length; i++){
                    if(newIdsArray[i].pairId === pairId) {
                    newIdsArray[i].hasBeenFound = true;
                    break;
                    }
                }
                newDiscoveredPairs += 1;
            }

            if(newDiscoveredPairs < this.state.cardDeckLimit/2){
                this.setState({
                    card1: "",
                    card2: "",
                    idsArray: newIdsArray,
                    discoveredPairs: newDiscoveredPairs
                })
            }
            else {
                this.finishGame();
            }
        }
    }
    
    voidClick = () => {}
    
    isClickable = cardKey => {
    const cardPairId = cardKey.split("$")[0];
    const pairIdFound = this.state.idsArray.find(id => id.pairId === cardPairId);
    return !pairIdFound.hasBeenFound && cardKey !== this.state.card1 ;
    }

    render() {
        return (
            <div className="Board">
            {this.state.cardDeck.map(card =>{
              const cardClickable = this.isClickable(card.cardKey)
    
              return (<Card 
                        key={card.cardKey}
                        cardKey={card.cardKey}
                        click={cardClickable ? this.clickHandlder : this.voidClick} 
                        figure={cardClickable ? card.figure : "FOUND!"} 
                      />)})
            } 
          </div>
        );
    }
}

export default Board;