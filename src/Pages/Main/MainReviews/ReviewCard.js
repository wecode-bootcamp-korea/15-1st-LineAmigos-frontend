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
  }

  setSpans = () => {
    const height = this.divElement.current.clientHeight;
    const spansRows = Math.Floor(height / 10)
    this.setState({ 
      spans: spansRows 
    });
  }

  createdAtString = (createdAt) => {
    const splittedDate =  createdAt.split('T')[0].split('-')
    return `${splittedDate[0]}년 ${splittedDate[1]}월 ${splittedDate[2]}일`
  }

  render() {
    const { spans } = this.state
    const { review, goToProductDetail } = this.props
    const { createdAtString } = this
    const hiddenId = (userId) => `${userId.slice(0, 4)}***`
    const rateStar = <i className="fas fa-star" />

    return (
      <li 
        className="ReviewCard"
        ref={this.divElement}
        style={{gridRowEnd: `span ${spans}`}}>
        <div className="productVisual">
          <img 
            alt="product" 
            src={review.reviewed_image} 
            className="productImage"
            onClick={goToProductDetail} />
        </div>
        <div className="productInfos" >
          <div className="productName">{review.product_name}</div>
          <div className="reviewRate">
            {rateStar}
            {rateStar}
            {rateStar}
            {rateStar}
            {rateStar}
            <span>{review.rate}</span>
          </div>
          <div className="reviewContents">
            <p>{review.reviewed_body}</p>
            <img alt="Reviews" src={review.reviewed_image} />
          </div>
          <div className="idAndCreatedAt">
            <span>{hiddenId(review.user)}</span>
            <span>{createdAtString(review.created_time)}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default ReviewCard;
