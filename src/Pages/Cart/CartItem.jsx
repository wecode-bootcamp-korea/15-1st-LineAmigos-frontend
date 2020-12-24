import React, { Component } from 'react';
import './CartItem.scss'

class CartItem extends Component {

  render() {
    const { id, name, price, saleRate, url, amount, isChecked, isInStock, addItem, subtractItem, deleteItem, selectItemHandler, goProductDetailPage, goToCheckOutPage } = this.props
    const discountedPrice = price*(100-saleRate)*0.01
    const originalPriceEl = <div className='original'>{price.toLocaleString()}</div>
    const unavailable = <div className="unavailable">구매불가</div>
    const ifSoldOutAddThisClass = !isInStock && 'soldOut'

    return (
      <ul className="CartItem">
        <li key={id} className="row items">
          <div 
            className={`checkbox ${isChecked && 'checked'} ${ifSoldOutAddThisClass}`}
            onClick={() => isInStock ? selectItemHandler(id) : undefined}
            >
            <i className="fas fa-check"/></div>
          <div className="productDetail items">
            <img 
              alt={name}
              src={url}
              onClick={() => goProductDetailPage(id)} />
            <div className="detailBox">
              <div className="detail">라인아미고스<img alt="N pay" src="/images/nPayBtn.png" className="nPayBtn" /></div>
              <div 
                className="productName"
                onClick={goProductDetailPage}>{name}</div>
              <div className="price">
                <div className="discounted">{discountedPrice.toLocaleString()}원</div>
                {saleRate !== 0 && originalPriceEl}
              </div>
              <div className="delete"
                onClick={() => deleteItem(id)}></div>
            </div>
          </div>
          <div className="options items">
            <div className={`option ${ifSoldOutAddThisClass}`}>{!isInStock && unavailable}사이즈 : 단품</div>
            <div className="modify">
              <span 
                id={id}
                className={`plus ${ifSoldOutAddThisClass}`} 
                onClick={() => isInStock ? addItem(id) : undefined}></span>
              <span className={`amount ${!isInStock && 'soldOut'}`}>{amount}</span> 
              <span 
                className={`subtract ${ifSoldOutAddThisClass}`}
                onClick={() => isInStock ? subtractItem(id) : undefined}></span>
            </div>
          </div>
          
          <div className="priceInfo">
            <div className={`price ${ifSoldOutAddThisClass}`}>
            {!isInStock ? '품절' : `${(amount*discountedPrice).toLocaleString()}원`}
            </div>
            <div 
              className={`order ${ifSoldOutAddThisClass}`}
              onClick={isInStock ? goToCheckOutPage : undefined} >주문하기</div>
          </div>
        </li>
      </ul>
    );
  }
}

export default CartItem;
