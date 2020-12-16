import React, { Component } from "react";
import Slider from "react-slick";
import './CatetoriesSlider.scss';

class CategoriesSlider extends Component {
  constructor() {
    super()
    this.state = {
      categories: [],
    }
  }

  componentDidMount = () => {
    fetch('/data/productInfos.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.categories,
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { categories } = this.state
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      draggable: true,
    };

    return (
      <div className="CategoriesSlider">
      <h3>카테고리 바로가기</h3>
        <Slider {...settings}>
        {categories &&
          categories.map((category, index) => {
            return(
              <li key={index} className="category">
                  <img alt="Category" src={category.imageUrl} />
                  <span className="productInfo">{category.category}
                  <i class="fas fa-chevron-right" />
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