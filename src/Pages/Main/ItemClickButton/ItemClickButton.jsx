import React, { Component } from 'react';
import './ItemClickButton.scss'

class ItemClickButton extends Component {

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  render() {
    const { index, product, handleViewClick, itemId } = this.props
    const { goToProductDetail } = this
    const priceWithComma = (+product.price).toLocaleString()

    return (
        <li 
          className="ItemClickButton">
          <img 
            alt="Product" 
            src={product.product_image}
            // onClick={goToProductDetail}
            onClick={() => handleViewClick(product.product_id)}
            className={product.isClicked?'click':''} />
          <div className={`button button${index}`}>
            <span 
              className={`target target${product.product_id}`}
              id={product.product_id}
              onClick={() => handleViewClick(product.product_id)} />
            <div className={`price price${product.product_id}`}>
              <div className="name">{product.name}</div>
              <div className="priceInfoTag">
                <div className="salePrice">
                {(+product.price - (+product.price)*(+product.discount)*0.01).toLocaleString()}원
                </div>
                <div className="originalPrice">
                {priceWithComma}
                </div>
              </div>
            </div>
          </div>
        </li>
    );
  }
}

export default ItemClickButton;
