import React, { Component } from 'react';
import './SliderCard.scss'

class SliderCard extends Component {
  
  constructor() {
    super()
    this.state = {
      isInCart: false,
    }
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  render() {
    const { isInCart } = this.state
    const { goToProductDetail } = this
    const { type, product } = this.props
    const price = +(product.price).slice(0,-3)
    const discount = +product.discount
    const discountedPrice = +(price*(100-discount)*0.01)

    return (
      <li 
        className="SliderCard"
        onClick={goToProductDetail}>
        <div className="productVisual">
          <img alt="Product" src={product.product_image} className="productImage" />
          <div className="action">
            <div className="icon">
              <img 
                alt="Add to wishlist" 
                src='/images/add-to-wishlist.png'
                onClick={()=> alert('찜한 상품에 추가되었습니다.')} />
            </div>
            <div a
              className={`icon ${isInCart && 'clicked'}`}
              onClick={()=> alert('장바구니에 추가되었습니다.')} >
              <img alt="Add to cart" src='/images/cart-icon.png' />
            </div>
          </div>
        </div>
        <div className={`productInfo ${type}`}>
          <span className="saleRate">{discount}%</span>
          <span className="salePrice">{discountedPrice.toLocaleString()}원</span>
          <span className="originalPrice">{price.toLocaleString()}원</span>
        </div>
        <span className={`productInfo ${type}`}>
        {product.name}
        </span>
      </li>
    );
  }
}

export default SliderCard;
