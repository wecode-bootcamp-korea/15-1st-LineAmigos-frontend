import React from 'react'
import MainSlider from './MainSlider'
import NewProductsSlider from './NewProductsSlider'
import CategoriesSlider from './CategoriesSlider'
import BannerSlider from './BannerSlider'
import ReviewAutoPlay from './ReviewAutoPlay'
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

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    // fetch('http://10.168.1.149:8000/product/get')
    fetch('/data/productsInfos.json')
     .then(response => response.json())
     .then(data => {
       this.setState({
         productsList: data.PRODUCTS,
         categoriesList: data.main,
         reviewsList: [],
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
    const { productsList, categoriesList } = this.state
    const { addToCart } = this
    
    return (
      <div className="Main">
        <section className="visualContainer">
          <MainSlider />
        </section>
        <section className="newProductsSection">
          <ul className="newProducts">
            <NewProductsSlider
              productsList={productsList}
              addToCart={addToCart}/>
          </ul>
        </section>
        <section className="clickToSee">
          <h3>#우리집 홈카페</h3>
          <div className="clickContainer">
            <div className="buttonPlate">
              <img alt="My home cafe" src="/images/Main/main-slider-03.jpg" />
              <ul className="buttons">
                {productsList &&
                  productsList.map((product, index) => {
                    return (
                      <li key={index} className={`button button${product.product_id}`}>
                        <span className={`target target${product.product_id}`} />
                        <div className={`price price${product.product_id}`}>{product.price}</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="descriptions">
              <h4>BT21 BABY 코스터</h4>
              <p>말랑말랑한 실리콘 코스터로 한 방에 귀여운 분위기 완성!</p>
              <div className="products">
                <img alt="Product" src="/images/Main/main-slider-06.jpg" />
                <img alt="Product" src="/images/Main/main-slider-06.jpg" />
                <img alt="Product" src="/images/Main/main-slider-06.jpg" />
                <img alt="Product" src="/images/Main/main-slider-06.jpg" />
                <img alt="Product" src="/images/Main/main-slider-06.jpg" />
                <img alt="Product" src="/images/Main/main-slider-06.jpg" />
              </div>
            </div>
          </div>
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
            addToCart={addToCart}/>
        </section>
      </div>
    )
  }
}

export default Main