import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainSlider from './MainSlider'
import NewProductsSlider from './NewProductsSlider'
import BannerSlider from './BannerSlider'
import ReviewSection from './ReviewSection'
import ItemClickPlate from './ItemClickPlate'
import './Main.scss'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      productsList: [],
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

  handleViewClick = (id) => {
    const { productsList } = this.state
    const filteredList = productsList.map(product => {
      if (product.product_id === id) {
        product.isClicked = true
      } else {
        product.isClicked = false
      }
      return product
    })   
    this.setState({
      productsList: filteredList
    })
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    // fetch('http://172.30.1.30:8000/product/products_info')
    fetch('/data/products_list.json')
      .then(response => response.json())
      .then(data => {
        const newProductsList = data.PRODUCTS.map(product => {
          return {...product, isClicked: false}
       })
       this.setState({productsList: newProductsList})
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

export default withRouter(Main)
