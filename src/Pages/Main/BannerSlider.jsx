import React, { Component } from "react";
import Slider from "react-slick";
import './BannerSlider.scss'

class BannerSlider extends Component {
  render() {
    const SETTING = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
    }

    const mainSliderImages = [
      "/images/banner-01.jpg",
      "/images/banner-02.jpg",
      "/images/banner-03.jpg",
    ]
    
    return (
    <div className="BannerSlider">
        <Slider {...SETTING}>
          {
            mainSliderImages.map((image, index) => {
              return (
                <div key={index}>
                  <img src={image} />
                  <div className="getCoupon">쿠폰받기</div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}

export default BannerSlider