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
    fetch('http://10.168.1.149:8000/product/get')
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.PRODUCTS,
        })
      }).catch(err => console.log(err))
  }

  gotoProductList = () => {
    this.props.history.push("/productList")
  }

  render() {
    const { categories } = this.state
    const { gotoProductList } = this
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
        {categories &&
          categories.map((category) => {
            return(
              <li 
                key={category.product_category} 
                className="category"
                onClick={() => gotoProductList()}>
                  <img alt="Category" src={category.product_image} />
                  <span className="productInfo">{category.product_menu}
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