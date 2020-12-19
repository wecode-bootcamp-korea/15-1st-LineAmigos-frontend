import React from 'react';

class Cart extends React.Component {

  constructor() {
    super()
    this.state = {
      cartItem: []
    }
  }

  addItem = () => {
    // fetch('API', {
    //   method: 'PATCH',
    //   body: {
    //     item_id: itemId,
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       cartItem: data.cartItems
    //     })
    //   })
  }

  subtractItem = () => {
    // fetch('API', {
    //   method: 'PATCH',
    //   body: {
    //     item_id: itemId,
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       cartItem: data.cartItems
    //     })
    //   })
  }

  deleteItem = () => {
    // fetch('API', {
    //   method: 'DELETE',
    //   body: {
    //     item_id: itemId,
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       cartItem: data.cartItems
    //     })
    //   })
  }

  getCartItems = () => {
    // fetch('API', {
    //   headers: {
    //     Authorization: localStorage.getItem("token")
    //   }
    // })
    //   .then(response => response.json)
    //   .then(data => {
    //     this.setState({
    //       cartItem: data.cartItem
    //     })
    //   })
  }

  componentDidMount = () => {
    // fetch('/data/productsInfos.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       cartItem: data.products
    //     })
    //   })
  }

  render() {
    const { addProduct, subtractProduct } = this
    const NOTICE = [
      "장바구니 상품은 최대 30일간 저장됩니다.",
      "가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.",
      "오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.",
    ]
    const unavailable = <div className="unavailable">구매불가</div>
    // const totalPrice = 

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
                <span className="currentPage">장바구니</span>
                <img alt="next" src="/images/arrow-right-bold.png" />
                <span>주문/결제</span>
                <img alt="next" src="/images/arrow-right-bold.png" />
                <span>완료</span>
              </div>
            </div>
            <div className="notice">
              {
                NOTICE.map((el, index) => {
                  return (
                    <p key={index}>{el}</p>
                  )
                })
              }
            </div>
          </header>
          <div className="row title">
            <div className="checkbox"><input type="checkbox" /></div>
            <div className="detail"></div>
            <div className="options"></div>
            <div className="price"></div>
          </div>
          <ul>
            {
              this.state.cartItem.map((item, index) => {
                return(
                  <li key={index} className="row items">
                    <div className="checkbox"><input type="checkbox" /></div>
                    <div className="productDetail">
                      <img alt={item.name} src={item.image_url} />
                      <div className="detail">
                        <div className="store">라인아미고스</div>
                        <div className="storeCategory">스마트스토어</div>
                      </div>
                      <div className="productName">{item.name}</div>
                      <div className="price">{item.price}원</div>
                      <i class="fas fa-times"></i>
                    </div>
                    <div className="options">
                      <div className="option">사이즈: 단품</div>
                      <div className="modify">
                        <span 
                          className="plus" 
                          onClick={addProduct}/> 
                        <span>{item.quantity}</span> 
                        <span 
                          className="subtract" 
                          onClick={subtractProduct}/>
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
              <div className="checkbox"><checkbox /></div>
              <div className="buttons">
                <div className="delete"></div>
                <div className="addToWishList"></div>
              </div>
            </div>

            <div className="calculation">
              <div className="summary">
                <div className="totalPrice">
                  <div className="title">총 상품금액</div>
                  <div className="total">{}원</div>
                </div>
                <i class="fas fa-plus"></i>
                <div className="shippingFee">
                  <div className="title">배송비</div>
                  <div className="Fee">{}원</div>
                </div>
                <i class="fas fa-minus"></i>
                <div className="discounted">
                  <div className="title">총 할인예상금액</div>
                  <div className="discountPrice">{}원</div>
                </div>
              </div>
              <div className="totalAmount">
                <span>총 주문금액</span>
                <span>{}원</span>
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

export default Cart;
