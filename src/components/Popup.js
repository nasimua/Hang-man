import React, {useEffect} from "react";
import { checkWin } from "../helpers/helpers";

// create a function component that will diplay a message when the game ends
function Popup({correctLetters, incorrectLetters, selectedWord, setPlayable, playAgain}) {

    let finalMessage = ''
    let revealWord = ''
    let playable = true

    if (checkWin(correctLetters, incorrectLetters, selectedWord) === 'win') {
        finalMessage = 'Congratulations! You Won!';
        playable = false
    } 
    else if (checkWin(correctLetters, incorrectLetters, selectedWord) === 'lose') {
        finalMessage = 'Hah! Loser!'
        revealWord = 'The word was ' + selectedWord;
        playable = false;
    }

    useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2 className="final-message">{finalMessage}</h2>
        <h3 className="reveal-word">{revealWord}</h3>
        <button className="play-again" onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
