import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from './SliderCard/SliderCard'
import './NewProductsSlider.scss';

class NewProductsSlider extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
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
          productsList.map((product, index) => {
            return(
              <SliderCard
                type={'newProduct'}
                key={index}
                product={product}
                goToProductDetail={goToProductDetail}
                isWishlisted={isWishlisted}
                isInCart={isInCart}
                addToWishList={addToWishList}
                addToCart={addToCart}
                commasBetween={commasBetween}/>
            )
          })
        }
        </Slider>
      </div>
    );
  }
}

export default NewProductsSlider