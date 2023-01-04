import React from 'react';

// classes to display product section
// researched how to get images as part of class containers:
// https://stackoverflow.com/questions/71075028/how-to-display-images-using-props-in-react
export default class Product extends React.Component {
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