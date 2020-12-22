import React, { Component } from "react";
import Slider from "react-slick";
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
          categoriesList.map((category) => {
            return(
              <li 
                key={category.id} 
                className="category"
                onClick={() => gotoProductList()}>
                  <img alt="Category" src={category.product_image} />
                  <span className="productInfo">{category.menu}
                  <i className="fas fa-chevron-right" />
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

export default CategoriesSlider