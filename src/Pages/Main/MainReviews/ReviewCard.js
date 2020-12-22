import React, { Component } from 'react';
import './ReviewCard.scss'

class ReviewCard extends Component {

  constructor () {
    super()
    this.state = {
      spans: 0
    }
    this.divElement = React.createRef()
  }

  componentDidMount = () => {
    this.divElement.current.addEventListener('load', this.setSpans)
    console.log(this.divElement.current.clientHeight)
  }

  setSpans = () => {
    const height = this.divElement.current.clientHeight;
    const spansRows = Math.Floor(height / 10)
    this.setState({ 
      spans: spansRows 
    });
  }

  render() {

    const { spans } = this.state
    const { review, isInCart, addToCart, goToProductDetail, createdAtString, hiddenId, rateStar } = this.props

    return (
      <li 
        className="ReviewCard"
        ref={this.divElement}
        style={{gridRowEnd: `span ${spans}`}}>
        <div className="productVisual">
          <img 
            alt="product" 
            src={review.imgUrl} 
            className="productImage"
            onClick={goToProductDetail} />
            <div className="action">
              <div className="icon">
                <img alt="Add to wishlist" src='/images/add-to-wishlist.png' />
              </div>
              <div 
                className={`icon ${isInCart && 'clicked'}`}
                onClick={addToCart} >
                <img alt="Add to cart" src='/images/cart-icon.png' />
              </div>
            </div>
          </div>

          <div className="productInfos" >
            <div className="productName">{review.productName}</div>
            <div className="reviewRate">
              {rateStar}
              {rateStar}
              {rateStar}
              {rateStar}
              {rateStar}
              <span>{review.rate}</span>
            </div>
            <div className="reviewContents">
              <p>{review.text}</p>
              <img alt="Reviews" src="/images/Main/main-slider-04.jpg"/>
            </div>
            <div className="idAndCreatedAt">
              <span>{hiddenId(review.userId)}</span>
              <span>{createdAtString(review.createdAt)}</span>
            </div>
          </div>
        
      </li>
    );
  }
}

export default ReviewCard;
