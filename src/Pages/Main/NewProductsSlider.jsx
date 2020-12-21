import React, { Component } from "react";
import Slider from "react-slick";
import './NewProductsSlider.scss';

class NewProductsSlider extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  render() {
    const { isWishlisted, isInCart } = this.state
    const { goToProductDetail } = this
    const { productsList, addToCart, addToWishList } = this.props
    const commasBetween = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      draggable: true,
    };

    return (
      <div className="NewProductsSlider">
        <h3>새로 나왔어요</h3>
        <Slider {...settings}>
        {productsList &&
          productsList.map((product) => {
            return(
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
                  <span className="salePrice">{commasBetween(product.price - (product.price)*(product.sale_amount)*0.01)}원</span>
                  <span className="originalPrice">{commasBetween(product.price).slice(0, -3)}원</span>
                </div>
                <span className="productInfo">{product.name}
                </span>
              </li>
            )
          })
        }
        </Slider>
      </div>
    );
  }
}

export default NewProductsSlider