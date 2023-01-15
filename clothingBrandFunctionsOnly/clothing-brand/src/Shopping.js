import Product from './Product'

// function uses Product to create content for user shopping
export default function Shopping() {
    return (
      <div className="container">
        <div className="product-container-shopping top-space">
            <div className="product-container-shopping-row shopping-row-1">
                <Product img="./images/cardigan1.jpg" name="Brown classic" type="Cardigan" cost="£80"/>
                <Product img="./images/cardigan2.jpg" name="Cream modern" type="Cardigan" cost="£100"/>
                <Product img="./images/cardigan3.jpg" name="White classic" type="Cardigan" cost="£120"/>
            </div>
            <div className="product-container-shopping-row shopping-row-2">
                <Product img="./images/cardigan4.jpg" name="Cream modern" type="Pullover" cost="£90"/>
                <Product img="./images/cardigan5.jpg" name="Grey modern" type="Fleece" cost="£110"/>
                <Product img="./images/cardigan6.jpg" name="Red classic" type="Pullover" cost="£130"/>
            </div>          
        </div>
      </div>      
    );
  }