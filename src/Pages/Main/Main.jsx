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

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    fetch('http://10.168.1.149:8000/product/products_info')
    // fetch('/data/productsInfos.json')
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
       console.log(data.review)
     }).catch(err => console.log(err))
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { productsList, categoriesList, reviewsList } = this.state
    return (
      <div className="Main">
        <MainSlider />
        <Header />
        <NewProductsSlider
          productsList={productsList}/>
        <ItemClickPlate 
          productsList={productsList}/>
        <BannerSlider />
        <CategoriesSlider
          categoriesList={categoriesList}
          productsList={productsList} />
        <ReviewSection
          reviewsList={reviewsList}/>
        <Footer />
      </div>
    )
  }
}

export default Main
