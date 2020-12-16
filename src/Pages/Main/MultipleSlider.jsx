import React, { Component } from "react";
import Slider from "react-slick";
import './MultipleSlider.scss'

class MultipleSlider extends Component {

  constructor() {
    super() 
    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    fetch('/data/productInfos.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.products[0])
        this.setState({
            products: data.products,
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { products } = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    return (
      <div className="MultipleSlider">
        <Slider {...settings}>
        {products &&
          products.map((product, index) => {
            return(
              <li key={index} className="newProduct">
                <img alt="Product" src={product.url} />
                <div className="productInfo">
                  <span className="saleRate">{product.saleAmount}</span>
                  <span className="price">{product.price}원</span>
                </div>
                <span className="productInfo">{product.productName}
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

export default MultipleSlider