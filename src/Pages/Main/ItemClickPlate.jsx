import React, { Component } from 'react';
import ItemClickButton from './ItemClickButton/ItemClickButton'
import './ItemClickPlate.scss'

class ItemClickPlate extends Component {

  render() {
    const { productsList, handleViewClick } = this.props

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
            {productsList.length > 0 &&
              productsList.slice(26,32).map((product, index) => {
                return (
                  <ItemClickButton 
                    key={index}
                    index={index}
                    itemId={product.product_id}
                    product={product}
                    isClicked={false}
                    handleViewClick={handleViewClick}/>
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
