import React, { Component } from "react";
import Slider from "react-slick";

export default class MainSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const images = [
      {id: 1, url:'/images/Main/main-slider-01.jpg'},
      {id: 1, url:'/images/Main/main-slider-02.jpg'},
      {id: 1, url:'/images/Main/main-slider-03.jpg'},
      {id: 1, url:'/images/Main/main-slider-04.jpg'},
      {id: 1, url:'/images/Main/main-slider-05.jpg'},
      {id: 1, url:'/images/Main/main-slider-06.jpg'},
    ]
    
    return (
      <div className="MainSlider">
        <Slider {...settings}>
          {
            images.map(image => {
              return (
                <div key={image.id}>
                  <img src={image.url} />
                </div>
              )
            })
        }
        </Slider>
      </div>
    );
  }
}