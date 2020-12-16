import React, { Component } from "react";
import Slider from "react-slick";

class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
    };

    const products = [
      {id: 1, url:'/images/Main/main-slider-05.jpg'},
      {id: 2, url:'/images/Main/main-slider-02.jpg'},
      {id: 3, url:'/images/Main/main-slider-03.jpg'},
      {id: 4, url:'/images/Main/main-slider-04.jpg'},
      {id: 5, url:'/images/Main/main-slider-01.jpg'},
      {id: 6, url:'/images/Main/main-slider-06.jpg'}
    ]

    return (
      <ul className="ProductSlider">
        <Slider {...settings}>
          {
            products.map(product => {
              return (
                <li key={product.id}>
                  <img alt="Product" src="/images/product.jpg" />
                  <div className="productInfo">
                    <span className="saleRate">40%</span>
                    <span className="price">63,900원</span>
                  </div>
                  <span className="productInfo">(12/14일 출시) 라인프렌즈 브롤스타즈 시로의 베스트셀러 에디션
                  </span>
                </li>
              )
            })
        }
        </Slider>
      </ul>
    );
  }
}

export default ProductSlider