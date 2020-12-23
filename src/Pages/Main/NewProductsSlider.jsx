import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from './SliderCard/SliderCard'
import './NewProductsSlider.scss';

class NewProductsSlider extends Component {
  render() {
    const { productsList } = this.props
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
        {productsList.length > 0 &&
          productsList.map((product, index) => {
            return(
              <SliderCard
                type={'newProduct'}
                key={index}
                product={product}/>
            )
          })
        }
        </Slider>
      </div>
    );
  }
}

export default NewProductsSlider