import React, { Component } from 'react';
import './SliderCard.scss'

class SliderCard extends Component {
  render() {
    return (
      <li 
        key={product.product_id} 
        className="newProduct"
        onClick={goToProductDetail}>
        <div className="productVisual">
          <img alt="Product" src={product.product_image} className="productImage" />
          <div className="action">
            <div 
              className={`icon ${isWishlisted && 'clicked'}`}
              onClick={addToWishList} >
              <img alt="Add to wishlist" src='/images/add-to-wishlist.png' />
            </div>
            <div 
              className={`icon ${isInCart && 'clicked'}`}
              onClick={addToCart} >
              <img alt="Add to cart" src='/images/cart-icon.png' />
            </div>
          </div>
        </div>
        <div className="productInfo">
          <span className="saleRate">{product.sale_amount}%</span>
          <span className="salePrice">{(product.price - (product.price)*(product.sale_amount)*0.01).toLocaleString()}원</span>
          <span className="originalPrice">{commasBetween(product.price).slice(0, -3)}원</span>
        </div>
        <span className="productInfo">{product.name}
        </span>
      </li>
    );
  }
}

export default SliderCard;
