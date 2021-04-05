import {React} from 'react'

import '../styles/StartScreen.css';

function StartSCreen () {
    return (
        <div className="StartScreen">
            <select>
                <option value="" disabled selected>Selecciona el número de pares</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
          </select>
          <br />
          <button> Iniciar Juego!</button>
        </div>
    )
}

export default StartSCreen;