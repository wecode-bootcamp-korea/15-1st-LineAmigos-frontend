import React, { Component } from 'react'
import '../component/Product.scss'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      wishBtn: false,
      reviewRateContainer: true,
      price: '',
    }
  }

  handleWishBtn = () => {
    this.setState({
      wishBtn: !this.state.wishBtn,
    })
    this.setState({})
  }

  componentDidMount = () => {
    const priceComma = this.props.product.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    if (this.props.product.review === 0) {
      this.setState({
        reviewRateContainer: false,
      })
    }
    if (this.props.product.price !== null) {
      this.setState({
        price: priceComma,
      })
    }
  }

  render() {
    const { src, name, review, rate } = this.props.product
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
          <span className='productPrice'>{this.state.price}원</span>
          <div
            className={
              this.state.reviewRateContainer
                ? 'reviewRateContainer'
                : 'noneReviewRateContainer'
            }
          >
            <span className='reviewText'>리뷰</span>
            <span className='reviewNums'>{review}</span>
            <span className='rateText'> - 평점 </span>
            <span className='rateNums'>{rate}</span>
            <span className='rateText'> / 5</span>
          </div>
        </li>
      </div>
    )
  }
}

export default Product
