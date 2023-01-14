import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './LandingPage'
import Shopping from './Shopping'
import Profile from './Profile'
import Legal from './Legal'
import TopHeader from './TopHeader'
import Calculator from './Calculator'

//researched conditional rendering:
// https://reactjs.org/docs/conditional-rendering.html

// all imported components are in seperate files

// App to display outputs 
function App() {

  return (
    <div className="container">
      <TopHeader />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
