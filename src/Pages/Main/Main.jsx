import React from 'react'
import MainSlider from './MainSlider'
import NewProductsSlider from './NewProductsSlider'
import CategoriesSlider from './CategoriesSlider'
import BannerSlider from './BannerSlider'
import ReviewAutoPlay from './ReviewAutoPlay'
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
  }

  handleScroll = (e) => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop)
    this.setState({
      scrollTop,
      isNavFixed: scrollTop > 160 ? true : false
    })
  }

  // selectIndex = (totalIndex, selectingNumber) => {
  //   let randomIndexArray = []
  //   for (let i = 0; i < selectingNumber; i++) {
  //     let randomNum = Math.floor(Math.random() * totalIndex)
  //     if (randomIndexArray.indexOf(randomNum) === -1) {
  //       randomIndexArray.push(randomNum)
  //     } else {
  //       i--
  //     }
  //   }
  //   return randomIndexArray
  // }

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
    const { productsList, reviewsList } = this.state
    const { addToCart, goToProductDetail, selectIndex } = this
    
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
            productsList={productsList} />
        </section>
        <section className="reviewContainer">
          <ReviewAutoPlay
            goToProductDetail={goToProductDetail}
            reviewsList={reviewsList}
            addToCart={addToCart}/>
        </section>
      </div>
    )
  }
}

export default Main