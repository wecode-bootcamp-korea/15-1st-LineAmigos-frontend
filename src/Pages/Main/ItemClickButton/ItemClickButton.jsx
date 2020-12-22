import React, { Component } from 'react';
import './ItemClickButton.scss'

class ItemClickButton extends Component {

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  commasBetween = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  render() {
    const { index, product, handleViewProduct } = this.props
    const { goToProductDetail, commasBetween } = this
    
    return (
        <li 
          className="ItemClickButton">
          <img 
            alt="Product" 
            src={product.product_image}
            onClick={goToProductDetail} />
          <div className={`button button${product.index}`}>
            <span 
              className={`target target${product.product_id}`}
              id={product.product_id}
              onClick={handleViewProduct} />
            <div className={`price price${product.product_id}`}>
              <div className="name">{product.name}</div>
              <div className="priceInfoTag">
                <div className="salePrice">
                {commasBetween(product.price - (product.price)*(product.sale_amount)*0.01)}원
                </div>
                <div className="originalPrice">
                {commasBetween(product.price).slice(0, -3)}
                </div>
              </div>
            </div>
          </div>
        </li>
    );
  }
}

export default ItemClickButton;
