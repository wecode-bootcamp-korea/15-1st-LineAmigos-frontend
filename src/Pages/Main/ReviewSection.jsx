import React, { Component } from 'react';
import ReviewCard from './MainReviews/ReviewCard.js'
import'./ReviewSection.scss'

class ReviewSection extends Component {
  constructor() {
    super()
    this.state = {
      // reviews: [],
      isWishlisted: false,
      isInCart: false,
    }
    this.myRef = React.createRef()
  }

  render() {
    const { isWishlisted, isInCart } = this.state
    const { addToCart, reviewsList, goToProductDetail } = this.props
    const createdAtString = (createdAt) => {
      const splittedDate =  createdAt.split(' ')[0].split('-')
      return `${splittedDate[0]}년 ${splittedDate[1]}월 ${splittedDate[2]}일`
    }
    const hiddenId = (userId) => `${userId.slice(0, 4)}***`
    const rateStar = <i className="fas fa-star" />

    return (
      <div className="ReviewSection">
        <h3>생생한 리뷰</h3>
          <ul>
            {
              reviewsList.map((review, index) => {
                return (
                  <ReviewCard
                    // ref={this.myRef}
                    key={index}
                    reviewsList={reviewsList}
                    review={review}
                    addToCart={addToCart}
                    isWishlisted={isWishlisted}
                    isInCart={isInCart}
                    goToProductDetail={goToProductDetail}
                    createdAtString={createdAtString}
                    hiddenId={hiddenId}
                    rateStar={rateStar}/>
                )
              })
            }
          </ul>
         
      </div>
    )
  }
}

export default ReviewSection;
