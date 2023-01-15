import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product'

// component landing page for explaining the company and ethos
// researched bootstrap to find appropriate method:
// https://react-bootstrap.github.io/components/carousel/
// https://react-bootstrap.github.io/getting-started/introduction/
export default function LandingPage() {
    return (
      <div className="container">
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
        <div className="product-container top-space">
          <Product img="./images/cardigan1.jpg" name="Brown classic" type="Cardigan" cost="£80"/>
          <Product img="./images/cardigan2.jpg" name="Cream modern" type="Cardigan" cost="£100"/>
          <Product img="./images/cardigan3.jpg" name="White classic" type="Pullover" cost="£120"/>
        </div>
      </div>      
    );
  }