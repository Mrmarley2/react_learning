import { Link } from "react-router-dom";
import logo from './logo.svg';

// variable to potentially change signed in status
let status = false;

// component for sign in message
function SignIn() {
  return(
      <h5 className="sign-in-welcome">Sign in</h5>
  );  
}

// component for welcome message
function Welcome() {
  return(
      <h5 className="sign-in-welcome">Welcome</h5>
  );  
}

// component for welcome message
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <Welcome />;
  }
    return <SignIn />;
}

// component to show the header section
export default function TopHeader() {
  return(
    <header className="header-bar">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <h2 className="brand-name">Larmeni</h2> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/profile">User Profile</Link>
        <Link to="/legal">Legal</Link>
        <Link to="/calculator">Calculator</Link>
        <Greeting isLoggedIn={status} />  
      </nav>
           
    </header>  
  );       
}