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
    fetch('http://10.168.1.149:8000/product/get')
     .then(response => response.json())
     .then(data => {
       this.setState({
         productsList: data.products,
         categoriesList: data.categoriesList,
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

  addToWishList = () => {
    console.log('Item added')
    alert('위시리스트에 추가되었습니다.')
    // fetch('wishlistAPI', {
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
    const { productList } = this.state
    const { addToWishList, addToCart } = this
    
    return (
      <div className="Main">
        <section className="visualContainer">
          <MainSlider />
        </section>
        <section className="newProductsSection">
          <ul className="newProducts">
            <NewProductsSlider
              addToCart={addToCart}
              addToWishList={addToWishList} />
          </ul>
        </section>
        <section className="clickToSee">
          <h3>#우리집 홈카페</h3>
          <div className="clickContainer">
            <div className="buttonPlate">
              <img alt="My home cafe" src="/images/Main/main-slider-03.jpg" />
              <ul className="buttons">
                {productList &&
                  productList.map((product, index) => {
                    return (
                      <li key={index} className={`button button${product.id}`}>
                        <span className={`target target${product.id}`} />
                        <div className={`price price${product.id}`}>{product.price}</div>
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
          <CategoriesSlider />
        </section>
        <section className="reviewContainer">
          <ReviewAutoPlay
            addToCart={addToCart}
            addToWishList={addToWishList} />
        </section>
      </div>
    )
  }
}

export default Main