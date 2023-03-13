import React, { useState, useEffect } from "react";
// ^ import useEffect to handle event listeners ^
import "./App.css";
// import components
import Figure from "./components/Figure";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";

// create array of words
const words = [
  "abandon",
  "abdomen",
  "afraid",
  "application",
  "bear",
  "bread",
  "binary",
  "before",
  "cars",
  "cartoon",
  "coding",
  "charm",
  "developer",
  "distain",
  "darkness",
  "software",
  "engineer",
  "website",
  "keyboard",
  "mouse",
  "computer",
  "monitor",
  "laptop",
];
// select a word at random from the array by assigning index point as random number
// i.e. if we choose to select words[0], 'abandon' would be chosen
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // create a playable variable and set to true using useState
  const [playable, setPlayable] = useState(true);
  // create empty arrays for wrong letters and right letters with useState
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);;

  useEffect(() => {
    // create a functiuon that handles keydown events
    const handleKeydown = (event) => {
      // set key & key code to event
      const { key, keyCode } = event;
      // check if keycode is within range of letter keys on keyboard (65-90)
      if (playable && keyCode >= 65 && keyCode <= 90) {
        // set letter to keyboard key
        const letter = key.toLowerCase();

        // check if randomly selected word contains the letter that has been pressed
        if (selectedWord.includes(letter)) {
          // check if the correctLetters array doesn't include the chosen letter
          if (!correctLetters.includes(letter)) {
            // push the letter to the correct letters array using useState method (setCorrectLetters)
            setCorrectLetters((currentletters) => [...currentletters, letter]);
          } 
        } else {
          // check if the incorrectLetters array doesn't include the chosen letter
          if (!incorrectLetters.includes(letter)) {
            // push the letter to the correct letters array using useState method (setCorrectLetters)
            setIncorrectLetters((wrongLetters) => [...wrongLetters, letter]);
          } 
        }
      }
    };

    // add an event lsitener for keydown, passing handleKeydown as the callback function
    window.addEventListener("keydown", handleKeydown);

    // return a function that ensures only one event listener is running
    return () => window.removeEventListener("keydown", handleKeydown);
    // set dependecies to make sure function only renders when dependencies are updated
  }, [correctLetters, incorrectLetters, playable]);

  // create a funcion that starts the game again
  function playAgain() {
    setPlayable(true);

    // reset correct letters and incorrect letters to empt arrays
    setCorrectLetters([]);
    setIncorrectLetters([]);

    const random = Math.floor(Math.random() * words.length)
    // select a new random word by passing random as the index point of words
    selectedWord = words[random];
  }

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure incorrectLetters={incorrectLetters} />
        <WrongLetters incorrectLetters={incorrectLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} incorrectLetters={incorrectLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
    </div>
  );
}

export default App;
