import React, { Component } from 'react';
import ItemClickButton from './ItemClickButton/ItemClickButton'
import './ItemClickPlate.scss'

class ItemClickPlate extends Component {

  // handleViewProduct = (e) => {
  //   // console.log(e.target.id)
  //   if () {

  //   }
  // }

  render() {
    const { productsList, goToProductDetail } = this.props
    const { handleViewProduct } = this

    return (
      <div className="ItemClickPlate">
        <h3>#우리집 홈카페</h3>
        <div className="clickContainer">
          <div className="buttonPlate">
            <img alt="My home cafe" src="/images/click-template.webp" />
          </div>
          <div className="descriptions">
            <h4>BT21 BABY 코스터</h4>
            <p>말랑말랑 귀여운 아이템으로 한 방에 귀여운 방 분위기 완성!</p>
            <ul className="products">
            {productsList &&
              productsList.slice(3,9).map((product, index) => {
                return (
                  <ItemClickButton 
                    key={index}
                    index={index}
                    product={product}
                    isClicked={false}
                    handleViewProduct={handleViewProduct}
                    goToProductDetail={goToProductDetail}/>
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
