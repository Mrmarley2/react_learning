import logo from './logo.svg';

// variable to potentially change signed in status
let status = false;

// component for sign in message
function SignIn() {
  return(
      <h3 className="sign-in-welcome">Sign in</h3>
  );  
}

// component for welcome message
function Welcome() {
  return(
      <h3 className="sign-in-welcome">Welcome</h3>
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
      <h2 className="brand-name">Larmeni</h2>
      <Greeting isLoggedIn={status} />       
    </header>  
  );       
}