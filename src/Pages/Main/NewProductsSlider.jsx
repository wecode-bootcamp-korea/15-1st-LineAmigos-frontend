import React, { Component } from "react";
import Slider from "react-slick";
import './NewProductsSlider.scss';

class NewProductsSlider extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }

  componentDidMount = () => {
    fetch('/data/productInfos.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data.products,
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { products } = this.state
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

export default NewProductsSlider