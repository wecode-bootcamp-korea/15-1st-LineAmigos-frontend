import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from './SliderCard/SliderCard'
import './CatetoriesSlider.scss';

class CategoriesSlider extends Component {

  gotoProductList = () => {
    this.props.history.push("/productList")
  }

  render() {
    const { gotoProductList } = this
    const { categoriesList } = this.props
    const settings = {
      infinite: true,
      autoplay: false,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      draggable: true,
    };

    return (
      <div className="CategoriesSlider">
      <h3>카테고리 바로가기</h3>
        <Slider {...settings}>
        {categoriesList &&
          categoriesList.map((category, index) => {
            return(
              <SliderCard 
                key={index}
                type={'category'}
                category={category}
                gotoProductList={gotoProductList}/>
            )
          })
        }
        </Slider>
      </div>
    );
  }
}

export default CategoriesSlider