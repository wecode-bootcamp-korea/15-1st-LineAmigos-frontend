import React, { Component } from 'react';
import './CartItem.scss'

class CartItem extends Component {

  render() {
    const {id, name, price, saleRate, url, amount, isChecked, isInStock, addCartItem, subtractCartItem, deleteCartItem, selectOneCartItemHandler, goProductDetailPage, goToCheckOutPage
    } = this.props
    const unavailable = <div className="unavailable">구매불가</div>

    return (
      <ul className="CartItem">
        <li key={id} className="row items">
          <div 
            className={`checkbox ${isChecked && 'checked'}`}
            onClick={selectOneCartItemHandler}>
            <i className="fas fa-check"/></div>
          <div className="productDetail items">
            <img 
              alt={name} 
              src={url} 
              onClick={goProductDetailPage} />
            <div className="detailBox">
              <div className="detail">라인아미고스</div>
              <div 
                className="productName"
                onClick={goProductDetailPage}>{name}</div>
              <div className="price">{price}원</div>
              <div className="delete"
                onClick={deleteCartItem}></div>
            </div>
          </div>
          <div className="options items">
            <div className={`option ${!isInStock && 'soldOut'}`}>{!isInStock && unavailable}사이즈 : 단품</div>
            <div className="modify">
              <span 
                className={`plus ${!isInStock && 'soldOut'}`} 
                onClick={addCartItem}></span>
              <span className={`amount ${!isInStock && 'soldOut'}`}>{amount}</span> 
              <span 
                className={`subtract ${!isInStock && 'soldOut'}`}
                onClick={subtractCartItem}></span>
            </div>
          </div>
          
          <div className="priceInfo">
            <div className={`price ${!isInStock && 'soldOut'}`}>
            {!isInStock ? '품절' : `${price}원`}
            </div>
            <div 
              className={`order ${!isInStock && 'soldOut'}`}
              onClick={goToCheckOutPage} >주문하기</div>
          </div>
        </li>
      </ul>
    );
  }
}

export default CartItem;
