import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import LandingPage from './LandingPage'
import TopHeader from './TopHeader'

//researched conditional rendering:
// https://reactjs.org/docs/conditional-rendering.html

// all imported components are in seperate files

// App to display outputs 
function App() {

  return (
    <div className="container">
      <TopHeader />
      <LandingPage />
    </div>
  );
}

export default App;
