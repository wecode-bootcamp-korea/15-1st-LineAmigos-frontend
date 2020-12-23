import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
  }

  goToDetail = () => {
    this.props.history.push(`/product/${this.props.id}`)
  }

  handleDetailModal = () => {
    this.props.onModal(this.props.modal)
  }

  numbersWithComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  render() {
    const { product_image, name } = this.props.product
    const fixedRate =
      this.props.product.rate_average.rate__avg !== null &&
      this.props.product.rate_average.rate__avg.toFixed(1)
    const deleteZero = this.props.product.price.replace('.00', '')

    return (
      <div className='productContainer'>
        <li className='productList'>
          <img
            alt='product'
            className='productImg'
            src={product_image}
            onClick={this.goToDetail}
          />
          <div className='hoverContainer'>
            <div
              className={
                this.state.wishBtn ? 'treuHoverWishBox' : 'falseHoverWishBox'
              }
              onClick={this.handleWishBtn}
            >
              <i
                className={
                  this.state.wishBtn
                    ? 'far fa-heart tureHoverWish'
                    : 'far fa-heart falseHoverWish'
                }
              />
            </div>
            <div
              className='hoverViewBox'
              id=''
              onClick={this.handleDetailModal}
            >
              <span className='hoverView'>+</span>
            </div>
          </div>
          <div className='productNameContainer'>
            <span className='productName'>{name}</span>
            <i
              className={this.state.wishBtn ? 'fas fa-heart' : 'far fa-heart'}
              onClick={this.handleWishBtn}
            />
          </div>
          <span className='productPrice'>
            {this.numbersWithComma(deleteZero)}원
          </span>
          <div
            className={
              this.state.reviewRateContainer
                ? 'reviewRateContainer'
                : 'noneReviewRateContainer'
            }
          >
            <span className='reviewText'>리뷰</span>
            <span className='reviewNums'>
              {this.props.product.content_amount.contents__count}
            </span>
            <span className='rateText'> - 평점 </span>
            <span className='rateNums'>{fixedRate}</span>
            <span className='rateText'> / 5</span>
          </div>
        </li>
      </div>
    )
  }
}

export default withRouter(Product)
