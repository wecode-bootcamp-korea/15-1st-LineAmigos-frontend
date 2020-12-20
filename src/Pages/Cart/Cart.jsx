import React from 'react';
import { withRouter } from 'react-router-dom'
import './Cart.scss';

class Cart extends React.Component {

  constructor() {
    super()
    this.state = {
      cartItems: [],
      isAllSelected: false,
    }
  }

  //getting modified cart data from backend
  getCartData = () => {
    fetch('/data/productsInfos.json')
    // fetch('http://10.58.4.1:8000/cart', { //session example
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === "SUCCESS") {
          this.setState({
            cartItems: res.cartItems
          })
        }
      }).catch(err => console.log(err))
  }

  //click to add item amount one by one 
  addCartItem = () => {
    fetch('API', {
    // fetch('http://10.58.4.1:8000/cart', { //session example
      method: 'PATCH',
      body: JSON.strinify({
        // item_id: itemId
      })
    }).then(res => res.json())
      .then(res => res.MESSAGE === "SUCCESS" &&
        this.setState({cartItem: res.cartItems}))
      .catch(err => console.log(err))
  }

  //click to subtract item amount one by one
  subtractCartItem = () => {
    fetch('API', {
    // fetch('http://10.58.4.1:8000/cart', { //session example
      method: 'PATCH',
      body: JSON.strinify({
        // item_id: itemId
      })
    }).then(res => res.json())
      .then(res => res.MESSAGE === "SUCCESS" &&
        this.setState({cartItem: res.cartItems}))
      .catch(err => console.log(err))
  }

  //delete button click
  deleteCartItem = () => {
    fetch('API', {
    // fetch('http://10.58.4.1:8000/cart', { //session example
      method: 'DELETE',
      body: JSON.strinify({
        // item_id: itemId
      })
    }).then(res => res.json())
      .then(res => res.MESSAGE === "SUCCESS" && this.getCartItems())
      .catch(err => console.log(err))
  }

  //delete selected items => map selected items and deleteCartItem func 
  deleteSelectedCartItems = () => {
    const { cartItems } = this.state
    const selectedItems = cartItems.filter(cartItem => cartItem.isChecked)
    selectedItems.forEach(item => {
        fetch('API', {
        // fetch('http://10.58.4.1:8000/cart', { //session example
          method: 'DELETE',
          body: JSON.strinify({
            item_id: item.id
          })
        }).then(res => res.json())
          .then(res => res.MESSAGE === "SUCCESS" && this.getCartItems())
          .catch(err => console.log(err))
      }
    )
  }

  //select cart items
  handleSelectCartItem = (e) => {
    const { id } = e.target.id
    const { cartItems } = this.state 
    const newSelectedStatus = cartItems.map(cartItem => {
      if (cartItem.productId === id) {
        cartItem.isChecked = !this.state.cartItem.isChecked
      }
      return cartItem
    })
    this.setState({cartItems: newSelectedStatus})
  }

  //select all items
  handleSelectAllCartItems = () => {
    const { cartItems } = this.state
    const allSeletedStatus = cartItems.forEach(cartItem => {
      cartItem.isChecked = true
    })
    this.setState({cartItems: allSeletedStatus})
  }

  //get cart data after rendered
  componentDidMount = () => {
    //this.getCartData()
    fetch('/data/productsInfos.json')
      .then(res => res.json())
      .then(data => this.setState({cartItems: data.cartItems}))
  }

  //go to product detail page
  goProductDetailPage = (e) => {
    const { id } = e.target.id
    const { cartItems } = this.state
    const targetId = cartItems.filter(cartItem => cartItem.productId === id)
    this.props.history.push(`/product/${targetId}`)
  }

  backToShoppingPage = () => {this.props.history.goBack()}
  goToCheckOutPage = () => {this.props.history.push("/checkout")}

  render() {
    const { addItem, subtractItem, deleteItem } = this
    const { cartItems } = this.state
    const selectedItems = cartItems.filter(cartItem => cartItem.isChecked)
    const totalPrice = selectedItems.map(cartItem => cartItem.price).reduce((a, b) => a + b, 0)
    const discountPrice = selectedItems.reduce((a, item) => a + item.price*item.saleRate*0.01, 0)
    const checkOutPrice = totalPrice - discountPrice
    const unavailable = <div className="unavailable">구매불가</div>
    const NOTICE = [
      "장바구니 상품은 최대 30일간 저장됩니다.",
      "가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.",
      "오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.",
    ]

    return (
      <div className="Cart">
        <div className="cartContainer">
          <header>
            <div className="gnbContainer">
              <div className="leftIcons">
                <span>일반 장바구니</span>
                <span>장보기 전용</span>
              </div>
              <div className="rightIcons">
                <span className="currentPage">장바구니
                <img alt="next" src="/images/arrow-right-bold.png" /></span>
                <span>주문/결제
                <img alt="next" src="/images/arrow-right-bold.png" /></span>
                <span>완료</span>
              </div>
            </div>
            <div className="notice">
              {
                NOTICE.map((el, index) => {
                  return (
                    <li key={index}><i className="fas fa-circle"/>{el}</li>
                  )
                })
              }
            </div>
          </header>
          <div className="cartItemList">
            <div className="row title">
              <div className="checkbox"><input type="checkbox" /></div>
              <div className="productDetail"></div>
              <div className="options"></div>
              <div className="priceInfo"></div>
            </div>
            <ul>
              {
                cartItems.map((item, index) => {
                  return(
                    <li key={index} className="row items">
                      <div className="checkbox"><input type="checkbox" /></div>
                      <div className="productDetail">
                        <img alt={item.name} src={item.image_url} />
                        <div className="detailBox">
                          <div className="detail">라인아미고스</div>
                          <div className="productName">{item.name}</div>
                          <div className="price">{item.price}원</div>
                          <i 
                            className="fas fa-times"
                            onClick={deleteItem}></i>
                        </div>
                     
                      </div>
                      <div className="options">
                        <div className="option">사이즈: 단품</div>
                        <div className="modify">
                          <span 
                            className="plus" 
                            onClick={addItem}/> 
                          <span>{item.stock}</span> 
                          <span 
                            className="subtract" 
                            onClick={subtractItem}/>
                        </div>
                      </div>
                      <div className="priceInfo">
                        <div className="price">{!item.stock && {unavailable}}{item.price}원</div>
                        <div className="order">주문하기</div>
                      </div>
                    </li>
                  )
                })
              }
              </ul>
              <div className="row selectActions">
                <div className="checkbox"><input type="checkbox" /></div>
                <div className="buttons">
                  <div className="delete"></div>
                  <div className="addToWishList"></div>
                </div>
              </div>
            </div>
            <div className="calculation">
              <div className="summary">
                <div className="totalPrice">
                  <div className="title">총 상품금액</div>
                  <div className="total">{totalPrice}원</div>
                </div>
                <i className="fas fa-plus" />
                <div className="shippingFee">
                  <div className="title">배송비</div>
                  <div className="Fee">{checkOutPrice > 30000 ? 0 : 3000}원</div>
                </div>
                <i className="fas fa-minus" />
                <div className="discounted">
                  <div className="title">총 할인예상금액</div>
                  <div className="discountPrice">{discountPrice}원</div>
                </div>
              </div>
              <div className="checkOutPrice">
                <span>총 주문금액</span>
                <span>{checkOutPrice}원</span>
              </div>
            </div>
            <div className="buttons">
              <div className="toShop">쇼핑 계속하기</div>
              <div className="toCheckout">주문하기</div>
            </div>
          </div>
        </div>
      );
  }
}

export default withRouter(Cart);
