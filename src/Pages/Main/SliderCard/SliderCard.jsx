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

  // commasBetween = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  render() {
    const { isInCart } = this.state
    const { goToProductDetail, addToCart } = this
    const { type, product, category, gotoProductList } = this.props
    const commasBetween = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const price = +(product.price).slice(0,-3)
    const discount = +product.discount
    const discountedPrice = +(price*(100-discount)*0.01)
    console.log(discount)
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
          <div className={`productInfo ${type}`}>
            <span className="saleRate">{discount}%</span>
            <span className="salePrice">{discountedPrice.toLocaleString()}원</span>
            <span className="originalPrice">{price.toLocaleString()}원</span>
          </div>
          <span className={`productInfo ${type}`}>
          {/*{`type === 'newProduct' ? ${product.name} : ${category.menu}`} */}
          {product.name}
          </span>
        </li>
      );
    //   return (
    //     <li 
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
