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
    fetch('/data/productsInfos.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data.products,
        })
      }).catch(err => console.log(err))
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  render() {
    const { products } = this.state
    const { goToProductDetail } = this
    const wonPrice = (num) => `${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
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
              <li 
                key={index} 
                className="newProduct"
                onClick={goToProductDetail}>
                <img alt="Product" src={product.url} />
                <div className="productInfo">
                  <span className="saleRate">{product.saleAmount}</span>
                  <span className="salePrice">{wonPrice(product.price)}</span>
                  <span className="originalPrice">{wonPrice(product.price)}</span>
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