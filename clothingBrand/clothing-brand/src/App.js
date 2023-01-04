import './App.css';
import Product from './Product'
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
      <div className="product-container">
        <Product img="./images/cardigan1.jpg" name="Brown classic" type="Cardigan" cost="£80"/>
        <Product img="./images/cardigan2.jpg" name="Cream modern" type="Cardigan" cost="£100"/>
        <Product img="./images/cardigan3.jpg" name="White classic" type="Pullover" cost="£120"/>
      </div>
    </div>
  );
}

export default App;
