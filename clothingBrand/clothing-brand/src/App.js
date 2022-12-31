import logo from './logo.svg';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//researched conditional rendering:
// https://reactjs.org/docs/conditional-rendering.html

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
function TopHeader() {
  return(
    <header className="header-bar">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="brand-name">Larmeni</h2>
      <Greeting isLoggedIn={status} />       
    </header>  
  );       
}

// component landing page for explaining the company and ethos
// researched bootstrap to find appropriate method:
// https://react-bootstrap.github.io/components/carousel/
// https://react-bootstrap.github.io/getting-started/introduction/
function LandingPage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/caro1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Classic clothes with a modern twist</h3>
          <p>So you'll feel the best you can be, every day, everywhere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/caro2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Responsible clothing</h3>
          <p>Everything we do is carbon-neutral, so what you buy does makes a difference</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/caro3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Available everywhere</h3>
          <p>Wherever you shop you'll find us</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// classes to display product section
// researched how to get images as part of class containers:
// https://stackoverflow.com/questions/71075028/how-to-display-images-using-props-in-react
class Product extends React.Component {
  render () {
    return(
      <div className='product'>
        <div className="image-container">
          <img className='product-image' src={this.props.img} />
        </div>
        <p className='prod-name'>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{this.props.cost}</p>
      </div>
    )
  }
}

// App to display outputs 
function App() {

  return (
    <div className="container">
      <TopHeader />
      <LandingPage />
      <div className="product-container">
        <Product img="./images/cardigan1.jpg" name="Brown classic" type="Cardigan" cost="£80"/>
        <Product img="./images/cardigan2.jpg" name="Cream modern" type="Cardigan" cost="£100"/>
        <Product img="./images/cardigan3.jpg" name="White classic" type="Pullover" cost="£120"/>
      </div>
    </div>
  );
}

export default App;
