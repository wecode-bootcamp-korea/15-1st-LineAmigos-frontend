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

  componentDidMount = () => {
    !(
      this.props.product.rate_average.rate__avg !== null &&
      this.props.product.rate_average.rate__avg.toFixed(1)
    ) &&
      this.setState({
        reviewRateContainer: false,
      })
  }

  handleWishBtn = () => {
    this.setState({
      wishBtn: !this.state.wishBtn,
    })
  }

  goToDetail = () => {
    this.props.history.push(`/productdetail/${this.props.id}`)
  }

  handleDetailModal = (e) => {
    this.props.onModal() // 모달 켜는 거
    this.props.handleClickedProductId(this.props.id)
  }

  numbersWithComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  render() {
    console.log('프롭스 아읻', this.props.id.filter)
    const { product_image, name } = this.props.product
    const fixedRate =
      this.props.product.rate_average.rate__avg !== null &&
      this.props.product.rate_average.rate__avg.toFixed(1)
    const deleteZero = this.props.product.price.replace('.00', '')
    const review = this.props.product.content_amount.contents__count

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
              id={this.props.id}
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
            <span className='reviewNums'>{review}</span>
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
