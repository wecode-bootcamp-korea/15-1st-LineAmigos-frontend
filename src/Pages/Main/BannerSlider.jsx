import React, { Component } from "react";
import Slider from "react-slick";
import './BannerSlider.scss'

const mainSliderImages = [
  "/images/banner-img-01.jpg",
  "/images/banner-img-02.jpg",
  "/images/banner-img-03.jpg",
]

const BANNERCOLOR = [
  '#f5b326', 
  '#d15574', 
  '#4277b4'
]

class BannerSlider extends Component {
  render() {
    const SETTING = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
    }
    
    return (
    <div className="BannerSlider">
        <Slider {...SETTING}>
          {
            mainSliderImages.map((image, index) => {
              return (
                <div className="banner" key={index} style={`background-color: ${BANNERCOLOR[index]};`}>
                  <img alt="Ads" src={image} className="image" />
                  <div className="titles">
                    <div className="text">
                      <p>라인 아미고스 고객님을 위한 혜택</p>
                      <p>현금처럼 쓰는 적립금이 최대 5%, 멤버십 혜택!</p>
                    </div>
                    <div className="getCoupon">쿠폰받기</div>
                  </div>
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