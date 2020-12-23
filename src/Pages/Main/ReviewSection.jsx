import React, { Component } from 'react';
import ReviewCard from './MainReviews/ReviewCard.js'
import'./ReviewSection.scss'

class ReviewSection extends Component {
  
  render() {
    const { reviewsList, goToProductDetail, handleViewClick } = this.props
    return (
      <div className="ReviewSection">
        <h3>생생한 리뷰</h3>
        <ul>
          {reviewsList.length > 0 &&
            reviewsList.slice(0,6).map((review, index) => {
              return (
                <ReviewCard
                  key={index}
                  review={review}
                  goToProductDetail={goToProductDetail}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ReviewSection;
