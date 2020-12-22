import React, { Component } from 'react';
import './ItemClickButton.scss'

class ItemClickButton extends Component {

  render() {
    const { index, handleViewProduct } = this.props
    const { product_id, product_image, name, price, sale_amount } = this.props.product
    const commasBetween = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return (
        <li 
          className="ItemClickButton">
          <img 
            alt="Product" 
            src={product_image} />
          <div className={`button button${index}`}>
            <span 
              className={`target target${product_id}`}
              id={product_id}
              onClick={handleViewProduct} />
            <div className={`price price${product_id}`}>
              <div className="name">{name}</div>
              <div className="priceInfoTag">
                <div className="salePrice">
                {commasBetween(price - (price)*(sale_amount)*0.01)}원
                </div>
                <div className="originalPrice">
                {commasBetween(price).slice(0, -3)}
                </div>
              </div>
            </div>
          </div>
        </li>
    );
  }
}

export default ItemClickButton;
