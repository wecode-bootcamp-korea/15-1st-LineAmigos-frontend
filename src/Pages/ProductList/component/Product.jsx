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

  render() {
    console.log('id', this.props.id)
    const { product_image, name } = this.props.product
    const sum =
      this.props.rate.length > 0 &&
      (
        this.props.rate.reduce((a, b) => {
          return a + b
        }) / this.props.rate.length
      ).toFixed(1)

    const deleteZero = this.props.product.price.replace('.00', '')

    return (
      <div className='productContainer'>
        {/* <Link to={`/productdetail/${this.props.id}`}> */}
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
            <div className='hoverViewBox' onClick={this.handleDetailModal}>
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
          <span className='productPrice'>{deleteZero}원</span>
          <div
            className={
              this.state.reviewRateContainer
                ? 'reviewRateContainer'
                : 'noneReviewRateContainer'
            }
          >
            <span className='reviewText'>리뷰</span>
            <span className='reviewNums'>{this.props.rate.length}</span>
            <span className='rateText'> - 평점 </span>
            <span className='rateNums'>{+sum}</span>
            <span className='rateText'> / 5</span>
          </div>
        </li>
        {/* </Link> */}
      </div>
    )
  }
}

export default withRouter(Product)
