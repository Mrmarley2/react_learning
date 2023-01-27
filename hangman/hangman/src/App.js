import { useSelector, useDispatch } from "react-redux";
import React,{ useState } from "react";
import { } from "./state/hangman"
import Replaced from "./components/Replaced"
import logo from './hangman_logo.svg'
import reset from './reset.svg'
import './App.css';
import Key from './components/Keys'
import Hanged from './components/HangedMan'

function App() {
  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  // useSelector to find the required slices of state
  // only requires the data portion 
  const hangmanData = useSelector((state) => state.hangman);

  // function to refresh the page (aka restart hangman)
  const refresh = () => window.location.reload(true);

  // adding hooks for user interaction
  // const [word, setWord] = useState("");

  // sets the random word to use for hangman
  let randWord = hangmanData.words[Math.floor(Math.random() * hangmanData.words.length)];

  // turns the word into an array of characters
  let wordChars = randWord.split("");

  // creates an array of keys to iterate in return()
  let keyChars = [];  
  for (const key of wordChars.keys()) {
    keyChars.push(key);
  };
    
  return (
    <div className="app-container">      
      <div className="top-row">
        <img src={logo} className="hanged-logo" alt="logo" />
        <ul className="replaced-word">
          {keyChars.map((i) =>{
            return(
              <Replaced
              key = {i}>              
              </Replaced>
            )
          })}
        </ul>
        <button type="" className="reset-button">
          <img src={reset} alt="reset" onClick={refresh}/>
          <p>click here to restart</p>
        </button>        
      </div>
      <div className="bottom-row">
        <Hanged image="./images/state11.gif"></Hanged>
        <div className="keys-container">
          <div className="keys-column keys-first-column">
            <Key letter="A"></Key>
            <Key letter="G"></Key>
            <Key letter="L"></Key>
            <Key letter="Q"></Key>
            <Key letter="V"></Key>
          </div>
          <div className="keys-column keys-second-column">
            <Key letter="B"></Key>
            <Key letter="H"></Key>
            <Key letter="M"></Key>
            <Key letter="R"></Key>
            <Key letter="W"></Key>
          </div>
          <div className="keys-column keys-third-column">
            <Key letter="C"></Key>
            <Key letter="I"></Key>
            <Key letter="N"></Key>
            <Key letter="S"></Key>
            <Key letter="X"></Key>          
          </div>
          <div className="keys-column keys-fourth-column">
            <Key letter="D"></Key>
            <Key letter="J"></Key>
            <Key letter="O"></Key>
            <Key letter="T"></Key>
            <Key letter="Y"></Key>       
          </div>
          <div className="keys-column keys-fifth-column">
            <Key letter="E"></Key>
            <Key letter="K"></Key> 
            <Key letter="P"></Key>
            <Key letter="U"></Key>  
            <Key letter="Z"></Key>
          </div>
          <div className="keys-column keys-fifth-column">
            <Key letter="F"></Key>
          </div>
        </div>        
      </div>    
    </div>
  );
}

export default App;
