import React,{ useState } from "react";
import logo from './images/hangman_logo.svg'
import reset from './images/reset.svg'
import WinMessage from './components/WinMessage'
import LoseMessage from './components/LoseMessage'
import Hanged from './components/HangedMan'
import Logo from './components/Logo'
import Reset from './components/Reset'
import Rules from './components/Rules'
import './App.css';


function App() {

  // adding hooks for user interaction
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState(0);

  // calculation to show correct hangman stage later on
  // prevents the hanged stages going pass 11
  function hangedStage(badGuesses) {
    if(incorrect < 10){
      return badGuesses+1
    } else { 
      return 11 
    } 
  } 

  // sets the word to use for hangman and puts it in upper case
  const word = "overengineering".toUpperCase();

  // function to refresh the page (aka start/restart hangman)
  function refresh() {
    window.location.reload(true);
    // stores the random word in state
    //dispatch(usedWord(word));
  }

  // array of the alphabet to iterate through
  const alphabet = ["A", "B", "C", "D", "E", "F", "G",
                    "H", "I", "J", "K", "L", "M", "N", 
                    "O", "P", "Q", "R", "S", "T", "U", 
                    "V", "W", "X", "Y", "Z"];

  // turns the word into an array of characters
  // replaces unguessed letters with underscore
  // guessed letters are shown instead
  let wordChars = word.split('').map(letter => 
    correct.includes(letter) ? letter : "_").join(" ");

  return (
    <div className="app-container">
      <div className="top-row">
        <Logo source={logo} />
        <p className="replaced-word">{wordChars}</p>
        <button type="" className="reset-button button" onClick={refresh}>
          <Reset source={reset} alt="reset"/>
          <p>click here to restart</p>
        </button>
        <Rules></Rules>        
      </div>
      <div className="bottom-row">
        {/* brings through the correct hangman stage based on the number of incorrect guesses */}
        <div className="hanged-box">
          <Hanged image={"./images/state"+ hangedStage(incorrect) +".gif"}></Hanged>
          {/* if the user has no missing letters left and less than 10 incorrect guesses, they win */}
          {!wordChars.includes("_") && incorrect < 10 && <WinMessage></WinMessage>}
          {/* if the user makes 10 incorrect guesses, they lose */}
          {incorrect >= 10 && <LoseMessage></LoseMessage>}
        </div>
        <div className="keys-container ">
          {alphabet
              .map((alphabet, index) => 
              <button className="letter-button button"
                      key={index}
                      onClick={() => {
                  if (word.includes(alphabet)) {
                      setCorrect([...correct, alphabet]);
                  } else {
                    setIncorrect(incorrect + 1);
                  }
          }}>{alphabet}</button>)}
        </div>       
      </div>   
    </div>
  );
}

export default App;
