import { Routes, Route, Link } from "react-router-dom";
import './App.css';

// App.js
function Landing() {
    return (
      <div>
        <main>
          <h2>Welcome to the homepage!</h2>
        </main>
        <nav>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    );
  }

function ShoppingCart() {
    return (
      <div>
        <main>
          <h2>Shopping Cart</h2>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    );
  }
function Header() {
  return (
      <h1>
        <u>This is the Header</u>
      </h1>
    );
  }  

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
