import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainSlider from './MainSlider'
import NewProductsSlider from './NewProductsSlider'
// import CategoriesSlider from './CategoriesSlider'
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

  handleViewClick = (e) => {
    const id = e.target.id
    const { productsList } = this.state
    // const changedState = productsList.filter
    console.log(id)
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    fetch('http://10.168.1.149:8000/product/products_info')
    // fetch('/data/products.json')
     .then(response => response.json())
     .then(data => {
       this.setState({
         productsList: data.PRODUCTS
       })
     }).catch(err => console.log(err))

    fetch('/data/reviews.json')
     .then(response => response.json())
     .then(data => {
       this.setState({
         reviewsList: data.reviews,
       })
     }).catch(err => console.log(err))
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { productsList, reviewsList } = this.state
    const { handleViewClick } = this
    console.log(productsList[10])
    return (
      <div className="Main">
        <MainSlider />
        <Header />
        <NewProductsSlider
          productsList={productsList}/>
        <ItemClickPlate 
          productsList={productsList}
          handleViewClick={handleViewClick}/>
        <BannerSlider />
        <ReviewSection
          reviewsList={reviewsList}/>
        <Footer />
      </div>
    )
  }
}

export default Main
