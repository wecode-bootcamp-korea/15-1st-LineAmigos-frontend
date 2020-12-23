import React from 'react';
import { withRouter } from 'react-router-dom'
import header from '../../Components/Header/Header'
import CartItem from './CartItem'
import './Cart.scss';

const NOTICE = [
  "장바구니 상품은 최대 30일간 저장됩니다.",
  "가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.",
  "오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.",
]

class Cart extends React.Component {

  constructor() {
    super()
    this.state = {
      cartItems: [],
      isSelectAllChecked: false
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
      body: JSON.stringify({
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
      body: JSON.stringify({
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
      body: JSON.stringify({
        // item_id: itemId
      })
    }).then(res => res.json())
      .then(res => res.MESSAGE === "SUCCESS" && 
        this.setState({cartItem: res.cartItems}))
      .catch(err => console.log(err))
  }

  //개별 삭제버튼
  deleteItem = (id) => {
    const { cartItems } = this.state
    const deletedState = cartItems.filter(item => item.productId !== id)
    this.setState({
      cartItems: deletedState
    })
  }

  //선택삭제 버튼
  deleteSelectedItems = () => {
    const { cartItems } = this.state
    const deletingItems = cartItems.filter(item => !item.isChecked)
    this.setState({
      cartItems: deletingItems
    })
  }

  //delete selected items => map selected items and deleteCartItem func 
  deleteSelectedCartItems = () => {
    const { cartItems } = this.state
    const selectedItems = cartItems.filter(cartItem => cartItem.isChecked)
    selectedItems.forEach(item => {
        fetch('API', {
        // fetch('http://10.58.4.1:8000/cart', { //session example
          method: 'DELETE',
          body: JSON.stringify({
            item_id: item.id
          })
        }).then(res => res.json())
          .then(res => res.MESSAGE === "SUCCESS" && this.getCartData())
          .catch(err => console.log(err))
      }
    )
  }

  //select cart items
  selectOneCartItemHandler = (e) => {
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

  //토글하기
  selectItemHandler = (id) => {
    const { cartItems } = this.state
    const selectedState = cartItems.map(item => {
      if (item.productId === id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
    this.setState({
      cartItems: selectedState
    })
  }

  //select or unselect all items
  selectAllCartItemsHandler = () => {
    const { cartItems, isSelectAllChecked } = this.state
    const selectStateBox = cartItems.map(item => {
      if (isSelectAllChecked) {
        item.isChecked = false
      } else {
        item.isChecked = true
      }
      return item
    })
    
    this.setState({
      cartItems: selectStateBox,
      isSelectAllChecked: !isSelectAllChecked,
    })
  }

  //get cart data after rendered
  componentDidMount = () => {
    //this.getCartData()
    fetch('/data/productsInfos.json')
      .then(res => res.json())
      .then(data => {
        const itemsWithState = data.cartItems.map((item) => {
          return {...item, isChecked: false}
        })
        this.setState({
          cartItems: itemsWithState
        })
      })
  }

  //go to product detail page
  goProductDetailPage = (e) => {
    const { id } = e.target.id
    const { cartItems } = this.state
    const targetId = cartItems.filter(cartItem => cartItem.productId === id)
    this.props.history.push(`/product/${targetId}`)
  }

  goToCheckOutPage = () => {
    const { cartItems } = this.state
    if (cartItems.filter(item => item.isChecked && !item.isInStock).length > 0) {
      alert('현재 구매가 불가능한 상품이 있습니다. 해당 상품을 삭제하신 후 주문을 진행해 주십시오.')
    } else if (cartItems.filter(item => item.isChecked).length < 1) {
      alert('주문하실 상품을 선택해주세요.')
    } else {
      alert('결제페이지로 이동합니다.')
      fetch('API', {
        method: 'POST',
        body: {
          // id: id
        }
      }).then(res => res.json())
        .then(res => res.MESSAGE === 'SUCCESS' &&
          this.props.history.push("/checkout"))
    }
  }

  goToSingleCheckOutPage = (e) => {
    const { id } = e.target.id
    const { cartItems } = this.state
    const targetItem = cartItems.filter(cartItem => cartItem.productId === id)
    if (!targetItem.isChecked) {
      alert('')
    } else {
      fetch('API', {
        method: 'POST',
        body: {
          // id: targetItem.id
        }
      }).then(res => res.json())
        .then(res => res.MESSAGE === 'SUCCESS' &&
          this.props.history.push("/checkout"))
    }
  }

  backToMainPage = () => {this.props.history.push("/checkout")}
  backToShoppingPage = () => {this.props.history.goBack()}
  // goToWishListPage = () => {this.props.history.push("/wishlist")}

  render() {
    const { addCartItem, subtractCartItem, deleteCartItem, deleteItem, selectOneCartItemHandler, selectAllCartItemsHandler, goProductDetailPage, goToCheckOutPage, soldOutAlert, notSelectedAlert, selectItemHandler, deleteSelectedItems } = this
    const { cartItems } = this.state
    const selectedItems = cartItems.filter(cartItem => cartItem.isChecked)
    const totalPrice = selectedItems.filter(item => item.isInStock).map(cartItem => cartItem.price).reduce((a, b) => a + b, 0)
    const discountPrice = selectedItems.filter(item => item.isInStock).reduce((a, item) => a + item.price*item.saleRate*0.01, 0)
    const checkOutPrice = totalPrice - discountPrice
    const shippingFee = 3000

    return (
      <div className="Cart">
        <div className="cartContainer">
          <header>
            <div className="gnbContainer">
              <div className="leftIcons">
                <span>장바구니</span>
                <span>찜한 상품</span>
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
              <div 
                className={`checkbox ${this.state.isSelectAllChecked && 'checked'}`}
                onClick={selectAllCartItemsHandler}><i className="fas fa-check"/></div>
              <div className="productDetail title">상품정보</div>
              <div className="options title">옵션</div>
              <div className="priceInfo title">상품금액</div>
            </div>
            <ul>
              {
              cartItems.map((item, index) => {
                return(
                  <CartItem 
                    key={index}
                    id={item.productId}
                    name={item.name}
                    price={item.price}
                    saleRate={item.saleRate}
                    url={item.image_url}
                    amount={item.amount}
                    isChecked={item.isChecked}
                    isInStock={item.isInStock}
                    addCartItem={addCartItem} 
                    subtractCartItem={subtractCartItem} 
                    deleteCartItem={deleteCartItem} 
                    deleteItem={deleteItem}
                    selectOneCartItemHandler={selectOneCartItemHandler}
                    selectItemHandler={selectItemHandler} 
                    goProductDetailPage={goProductDetailPage} 
                    goToCheckOutPage={goToCheckOutPage}
                    />
                )
              })
            }
            </ul>
            <div className="row selectActions">
              <div className={`checkbox ${this.state.isSelectAllChecked && 'checked'}`}><i className="fas fa-check"/></div>
              <div className="buttons">
                <div 
                  className="delete"
                  onClick={deleteSelectedItems}>선택상품 삭제</div>
                <div className="addToWishList">선택상품 찜</div>
              </div>
            </div>
          </div>

          <div className="calculation">
            <div className="summary">
              <div className="totalPrice">
                <div className="title">총 상품 금액</div>
                <div className="total">{totalPrice.toLocaleString()}원</div>
              </div>
              <i className="fas fa-plus" />
              <div className="shippingFee">
                <div className="title">배송비</div>
                <div className="Fee">{(checkOutPrice > 30000 ? 0 : 3000).toLocaleString()}원</div>
              </div>
              <i className="fas fa-minus" />
              <div className="discounted">
                <div className="title">총 할인 예상 금액</div>
                <div className="discountPrice">{discountPrice.toLocaleString()}원</div>
              </div>
            </div>
            <div className="checkOutPrice">
              <span className="word">총 주문금액</span>
              <span className="price">{(selectedItems.length === 0 || checkOutPrice > 27000 ? checkOutPrice.toLocaleString() : checkOutPrice + 3000).toLocaleString()}</span>
              <span className="word">원</span>
            </div>
          </div>
          <div className="buttons">
            <div className="toShop">쇼핑 계속하기</div>
            <div 
              className="toCheckout"
              onClick={goToCheckOutPage}>주문하기</div>
          </div>
        </div>
      </div>
      );
  }
}

export default withRouter(Cart);
