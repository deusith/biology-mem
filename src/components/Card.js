import {React} from 'react'

import '../styles/Card.css';

function Card (props) {
    return (
        <div className="Card" onClick={() => props.click(props.cardKey)}>
            {props.figure}
        </div>
    )
}

export default Card;