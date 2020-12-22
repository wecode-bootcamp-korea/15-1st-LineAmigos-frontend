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

  addToCart = () => {
    alert('장바구니에 추가되었습니다.')
  }

  commasBetween = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  render() {
    const { isInCart } = this.state
    const { goToProductDetail, addToCart, commasBetween } = this
    const { type, product, category, gotoProductList } = this.props

    // if ({type} === 'newProduct') {
      return (
        <li 
          className="SliderCard"
          onClick={goToProductDetail}>
          <div className="productVisual">
            <img alt="Product" src={product.product_image} className="productImage" />
            <div className="action">
              <div className="icon">
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
    // } else if ({type} === 'category') {
    //   return (
    //     <li 
    //       key={category.id} 
    //       className="category"
    //       onClick={gotoProductList}>
    //         <img alt="Category" src={category.img} />
    //         <span className="productInfo">
    //           {category.menu}
    //           <i className="fas fa-chevron-right" />
    //         </span>
    //     </li>
    //   );
    // }
  }
}

export default SliderCard;
