import "./App.css";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Welcome name="Joe Soap" age="23"/>
      <Welcome name="John Handcock" age="33" />
      <Counter />
    </div>
  );
}

export default App;
