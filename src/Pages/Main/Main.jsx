import React from 'react'
import Footer from '../../Components/Footer/Footer'
import MainSlider from './MainSlider'
import NewProductsSlider from './NewProductsSlider'
import CategoriesSlider from './CategoriesSlider'
import BannerSlider from './BannerSlider'
// import ReviewAutoPlay from './ReviewAutoPlay'
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
         reviewsList: data.reviews,
       })
     })
  }

  addToCart = () => {
    console.log('Item added')
    alert('장바구니에 추가되었습니다.')
    // fetch('cartAPI', {
    //   method: 'POST'
    // })
    //   .then(response => response.json())
    //   .then(data => {

    //   })
    // this.props.history.push('/cart')
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { productsList, categoriesList, reviewsList } = this.state
    const { addToCart, goToProductDetail } = this
    return (
      <div className="Main">
        <section className="visualContainer">
          <MainSlider />
        </section>
        <section className="newProductsSection">
          <ul className="newProducts">
            <NewProductsSlider
              productsList={productsList}
              goToProductDetail={goToProductDetail}
              addToCart={addToCart}/>
          </ul>
        </section>
        <section className="clickToSee">
          <ItemClickPlate 
            productsList={productsList}
            goToProductDetail={goToProductDetail}
            addToCart={addToCart}/>
        </section>
        <section className="bannerContainer">
          <BannerSlider />
        </section>
        <section className="categoriesShortcut">
          <CategoriesSlider
            categoriesList={categoriesList}
            productsList={productsList} />
        </section>
        <section className="reviewContainer">
          {/*<ReviewAutoPlay
            goToProductDetail={goToProductDetail}
            reviewsList={reviewsList}
          addToCart={addToCart}/>*/}
          <ReviewSection
            
            goToProductDetail={goToProductDetail}
            reviewsList={reviewsList}
            addToCart={addToCart}/>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Main