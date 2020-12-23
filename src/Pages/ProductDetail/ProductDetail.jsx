import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import ImgPurchInfo from './Component/ImgPurchInfo'
import ProductDescriptions from './Component/ProductDescriptions/ProductDescriptions'
import Review from './Component/Review/Review'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './ProductDetail.scss'

class ProductDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      detailSelected: true,
      reviewSelected: false,
      qaSelected: false,
      targetReached: false,
      productData: {},
      reviewList: [],
    }
  }

  componentDidMount() {
    fetch(
      `http://10.168.1.149:8000/product/products_info${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productData: res.product_id,
        })
      })

    fetch('http://10.168.1.140:8000/review/reviews')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          reviewList: res.all_review,
        })
      })
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  scrollToTop() {
    scroll.scrollToTop()
  }

  scrollTo() {
    scroll.scrollTo('eltoscrollto', {
      duration: 100,
      delay: 0,
    })
  }

  onScroll = () => {
    let target = document.querySelector('.categoryTap')
    let posInfo = target.getBoundingClientRect().top

    posInfo - target.clientHeight < -90
      ? this.setState({ targetReached: true })
      : this.setState({ targetReached: false })
  }

  selectBox = (e) => {
    if (e.target.className === 'detailsTap') {
      this.setState({
        detailSelected: true,
        reviewSelected: false,
        qaSelected: false,
      })
      this.scrollTo('dataDes')
    }
    if (e.target.className === 'reviewTap') {
      this.scrollTo('reviewScrollTarget')
      this.setState({
        detailSelected: false,
        reviewSelected: true,
        qaSelected: false,
      })
    }
    if (e.target.className === 'qaTap') {
      this.setState({
        detailSelected: false,
        reviewSelected: false,
        qaSelected: true,
      })
    }
  }

  render() {
    console.log('파람스', this.props)
    const { targetReached, productData, reviewList } = this.state
    return (
      <>
        <Header />
        <div id='DetailPageContainer'>
          <div className='topContainer'>
            <div className='topContents'>
              <i className='fab fa-js-square' />
              <i className='fas fa-coffee' />
              <i className='far fa-bookmark' />
              <i className='fas fa-share-square' />
            </div>
            <div className='smallCategory'>
              <span>
                home - {productData.product_menu} -{' '}
                {productData.product_category}
              </span>
            </div>
          </div>
          <ImgPurchInfo
            productName={productData && productData.product_name}
            imgUrl={productData && productData.image}
            id={productData && productData.id}
            price={productData && productData.price}
            reviewArray={reviewList && reviewList.map((el) => el.review_rate)}
          />
          <div className='categoryTap' onScroll={this.onScroll}>
            <Link
              className={this.state.detailSelected ? 'clicked' : 'detailsTap'}
              to='ProductDescriptions'
              smooth={true}
              duration={500}
              onClick={this.selectBox}
              isDynamic={true}
            >
              상세정보
            </Link>
            <Link
              className={this.state.reviewSelected ? 'clicked' : 'reviewTap'}
              to='reviewEventContainer'
              smooth={true}
              duration={500}
              onClick={this.selectBox}
              isDynamic={true}
            >
              리뷰
            </Link>
            <Link
              className={this.state.qaSelected ? 'clicked' : 'qaTap'}
              to='qaAnchor'
              duration={100}
              onClick={this.selectBox}
            >
              Q&A
            </Link>
          </div>
          <ProductDescriptions detailImg={productData && productData.image} />
          <Review
            reviewList={reviewList}
            rateArray={reviewList && reviewList.map((el) => el.review_rate)}
          />
          <button className='scrollTop' onClick={this.scrollToTop}>
            <i className='fas fa-chevron-up' />
          </button>
        </div>
        <nav className={targetReached ? 'categoryNav' : '.hideNav'}>
          <div className='navProduct'>
            <div className='navProductInfo'>
              <div className='imgAndPrice'>
                <img alt='navImg' src={productData && productData.image} />
                <div className='navPriceInfo'>
                  <span className='productName'>
                    {productData.product_name}
                  </span>
                  <span className='productPrice'>
                    {Math.floor(productData.price)}원
                  </span>
                </div>
              </div>
            </div>
            <button>
              <i className='fab fa-node-js' />
              구매하기
            </button>
          </div>
          <div className='navLinks'>
            <Link
              className={this.state.detailSelected ? 'clicked' : 'detailsTap'}
              to='ProductDescriptions'
              smooth={true}
              duration={500}
              onClick={this.selectBox}
              isDynamic={true}
            >
              상세정보
            </Link>
            <Link
              className={this.state.reviewSelected ? 'clicked' : 'reviewTap'}
              to='reviewEventContainer'
              smooth={true}
              duration={500}
              onClick={this.selectBox}
              isDynamic={true}
            >
              리뷰
            </Link>
            <Link
              className={this.state.qaSelected ? 'clicked' : 'qaTap'}
              to='qaAnchor'
              duration={100}
              onClick={this.selectBox}
            >
              Q&A
            </Link>
          </div>
        </nav>
        <Footer />
      </>
    )
  }
}
export default ProductDetail
