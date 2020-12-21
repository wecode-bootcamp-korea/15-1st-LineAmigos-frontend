import React, { Component } from 'react';
import './ItemClickPlate.scss'

class ItemClickPlate extends Component {
  render() {
    const { productsList, addToCart, goToProductDetail } = this.props
    const commasBetween = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return (
      <div className="ItemClickPlate">
      <h3>#우리집 홈카페</h3>
      <div className="clickContainer">
        <div className="buttonPlate">
          <img alt="My home cafe" src="/images/Main/main-slider-03.jpg" />
        </div>
        <div className="descriptions">
          <h4>BT21 BABY 코스터</h4>
          <p>말랑말랑한 실리콘 코스터로 한 방에 귀여운 분위기 완성!</p>
          <ul className="products">
          {productsList &&
            productsList.slice(3,9).map((product) => {
              return (
                <li
                  key={product.product_id}
                  className="clickItem">
                  <img 
                    alt="Product" 
                    src={product.product_image} />
                  <div 
                    key={product.product_id} 
                    className={`button button${product.product_id}`}>
                    <span className={`target target${product.product_id}`} />
                    <div className={`price price${product.product_id}`}>
                      <div className="name">{product.name}</div>
                      <div className="priceInfoTag">
                        <div className="salePrice">{commasBetween(product.price - (product.price)*(product.sale_amount)*0.01)}원</div>
                        <div className="originalPrice">{commasBetween(product.price).slice(0, -3)}</div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default ItemClickPlate;
