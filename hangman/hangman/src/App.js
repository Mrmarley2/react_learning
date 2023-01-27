import './App.css';
import Key from './components/Keys'

function App() {
  return (
    <div className="app-container">
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
      </div>
    </div>
  );
}

export default App;
