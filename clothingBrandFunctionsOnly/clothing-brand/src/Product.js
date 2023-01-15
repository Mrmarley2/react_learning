import React from 'react';

// now changed to function instead of class
// takes props passed in LandingPage and Shopping
export default function Product(props) {
    return(
      <div className='product'>
        <div className="image-container">
          <img className='product-image' src={props.img} />
        </div>
        <p className='prod-name'>{props.name}</p>
        <p>{props.type}</p>
        <p>{props.cost}</p>
      </div>
    )
}