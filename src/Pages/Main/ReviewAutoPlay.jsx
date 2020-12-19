import React, { Component } from "react";
import Slider from "react-slick";
import './ReviewAutoPlay.scss'

class ReviewAutoPlay extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      isWishlisted: false,
      isInCart: false,
    }
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  componentDidMount = () => {
    fetch('/data/productsInfos.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.reviews,
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { reviews, isWishlisted, isInCart } = this.state
    const { goToProductDetail } = this
    const createdAtString = (createdAt) => {
      const splittedDate =  createdAt.split(' ')[0].split('-')
      return `${splittedDate[0]}년 ${splittedDate[1]}월 ${splittedDate[2]}일`
    }
    const hiddenId = (userId) => `${userId.slice(0, 4)}***`
    const rateStar = <i className="fas fa-star" />
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      speed: 4000,
      autoplaySpeed: 2000,
      draggable: true,
      cssEase: "linear"
    };

    return (
      <div className="ReviewAutoPlay">
        <h3>생생한 리뷰</h3>
        <Slider {...settings}>
        {reviews &&
          reviews.map((review, index) => {
            return(
              <li key={index}>
                <div className="productVisual">
                  <img 
                    alt="product" 
                    src={review.imgUrl} 
                    className="productImage"
                    onClick={goToProductDetail} />
                    <div className="action">
                      <div className={`icon ${isWishlisted && 'clicked'}`}>
                        <img alt="Add to wishlist" src='/images/add-to-wishlist.png' />
                      </div>
                      <div className={`icon ${isInCart && 'clicked'}`}>
                        <img alt="Add to cart" src='/images/cart-icon.png' />
                      </div>
                    </div>
                  </div>

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
                  <img alt="Review photo" src="/images/Main/main-slider-04.jpg"/>
                </div>
                <div className="idAndCreatedAt">
                  <span>{hiddenId(review.userId)}</span>
                  <span>{createdAtString(review.createdAt)}</span>
                </div>
              </li>
            )
          })
        }
        </Slider>
      </div>
    );
  }
}

export default ReviewAutoPlay