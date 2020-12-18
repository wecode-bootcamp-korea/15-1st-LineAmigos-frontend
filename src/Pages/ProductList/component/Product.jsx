import React, { Component } from 'react'
import '../component/Product.scss'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      wishBtn: false,
    }
  }
  handleWishBtn = () => {
    this.setState({
      wishBtn: !this.state.wishBtn,
    })
  }
  render() {
    const { src, name, price, review, rate } = this.props.product
    return (
      <div className='productContainer'>
        <li className='productList'>
          <img alt='product' className='productImg' src={src} />
          <div className='hoverContainer'>
            <div className='hoverWishBox'>
              <i className='far fa-heart hoverWish' />
            </div>
            <div className='hoverViewBox'>
              <span className='hoverView'>+</span>
              {/* <i className='fas fa-plus hoverView' /> */}
            </div>
          </div>
          <div className='productNameContainer'>
            <span className='productName'>{name}</span>
            <i
              className={this.state.wishBtn ? 'fas fa-heart' : 'far fa-heart'}
              onClick={this.handleWishBtn}
            />
          </div>
          <span className='productPrice'>{price}원</span>
          <div className='reviewRateContainer'>
            <span className='reviewText'>리뷰</span>
            <span className='reviewNums'>{review}</span>
            <span className='rateText'>평점</span>
            <span className='rateNums'>{rate}</span>
            <span className='rateText'>/5</span>
          </div>
        </li>
      </div>
    )
  }
}

export default Product
