import React, { Component } from "react";
import Slider from "react-slick";
import './NewProductsSlider.scss';

class NewProductsSlider extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        // {
        //   "created_time": "2020-12-18T10:55:49.158",
        //   "name": "귀여운 분홍토끼가 좋아하는 사탕",
        //   "price": "9000.00",
        //   "product_category": "브라운프렌즈",
        //   "product_id": 1,
        //   "product_image": " https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        //   "product_menu": "캐릭터",
        //   "sale_amount": 10
        // }
      ],
    }
  }

  componentDidMount = () => {
    fetch('http://10.168.1.149:8000/product/get')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data.PRODUCTS,
        })
      }).catch(err => console.log(err))
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  render() {
    const { products, isWishlisted, isInCart } = this.state
    const { goToProductDetail } = this
    const { addToCart, addToWishList } = this.props
    const commasBetween = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    // const salePrice = (price, sale_amount) => (price * sale_amount * 0.99).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(0, -3)
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
        {products &&
          products.map((product) => {
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