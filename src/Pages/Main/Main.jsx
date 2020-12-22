import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainSlider from './MainSlider'
import NewProductsSlider from './NewProductsSlider'
import CategoriesSlider from './CategoriesSlider'
import BannerSlider from './BannerSlider'
import ReviewSection from './ReviewSection'
import ItemClickPlate from './ItemClickPlate'
import './Main.scss'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      productsList: [],
      categoriesList: [],
      reviewsList: [],
      scrollTop: 0,
      isNavFixed: false,
    }
    this.myRef = React.createRef()
  }

  handleScroll = (e) => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop)
    this.setState({
      scrollTop,
      isNavFixed: scrollTop > 160 ? true : false
    })
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    // fetch('http://10.168.1.149:8000/product/get')
    fetch('/data/productsInfos.json')
     .then(response => response.json())
     .then(data => {
       this.setState({
         productsList: data.PRODUCTS,
         categoriesList: data.main,
        //  reviewsList: data.reviews,
       })
     }).catch(err => console.log(err))

    fetch('http://10.168.1.140:8000/review/reviews')
     .then(response => response.json())
     .then(data => {
       this.setState({
         reviewsList: data.review,
       })
     }).catch(err => console.log(err))
  }

  addToCart = () => {alert('장바구니에 추가되었습니다.')}
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { productsList, categoriesList, reviewsList } = this.state
    const { addToCart, goToProductDetail } = this
    return (
      <div className="Main">
        <MainSlider />
        <Header />
        <NewProductsSlider
          productsList={productsList}
          goToProductDetail={goToProductDetail}
          addToCart={addToCart}/>
        <ItemClickPlate 
          productsList={productsList}
          goToProductDetail={goToProductDetail}/>
        <BannerSlider />
        <CategoriesSlider
          categoriesList={categoriesList}
          productsList={productsList} />
        <ReviewSection
          goToProductDetail={goToProductDetail}
          reviewsList={reviewsList}
          addToCart={addToCart}/>
        <Footer />
      </div>
    )
  }
}

export default Main
