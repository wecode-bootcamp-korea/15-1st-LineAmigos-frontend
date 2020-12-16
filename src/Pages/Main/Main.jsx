import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainSlider from './MainSlider'
import MultipleSlider from './MultipleSlider'
import './Main.scss'



class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      productInfos: {
        products: [],
        categories: [],
        reviews: [],
      }
    }
  }

  componentDidMount = () => {
    fetch('/data/productInfos.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data.products)
        this.setState({
          productInfos: {
            products: data.products,
            categories: data.categories,
            reviews: data.reviews,
          }
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { products, categories, reviews } = this.state.productInfos
    
    return (
      <div className="Main">
        <section className="visualContainer">
          <MainSlider />
        </section>
        <Header />
        <section className="newProductsSection">
          <h3>새로 나왔어요</h3>
          <ul className="newProducts">
            <MultipleSlider />
            {/*{
              products.map((product, index) => {
                return(
                  <li key={index} className="newProduct">
                    <img alt="Product" src={product.url} />
                    <div className="productInfo">
                      <span className="saleRate">{product.saleAmount}</span>
                      <span className="price">{product.price}원</span>
                    </div>
                    <span className="productInfo">{product.productName}
                    </span>
                  </li>
                )
              })
            }*/}
          </ul>
        </section>

        <section className="clickToSee">
          <h3>#우리집 홈카페</h3>
          <div className="clickContainer">
            <div className="buttonPlate">
              <img alt="My home cafe" src="/images/Main/main-slider-03.jpg" />
              <div className="button01">
                <span className="target01"></span>
                <div className="price01"></div>
              </div>
              <div className="button02">
                <span className="target02"></span>
                <div className="price02"></div>
              </div>
              <div className="button03">
                <span className="target03"></span>
                <div className="price03"></div>
              </div>
              <div className="button04">
                <span className="target04"></span>
                <div className="price04"></div>
              </div>
              <div className="button05">
                <span className="target05"></span>
                <div className="price05"></div>
              </div>
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
          <MainSlider />
        </section>

        <div className="categoriesShortcut">
          <h3>카테고리 바로가기</h3>
          <ul className="categories">
            {
              categories.map((category, index) => {
                return(
                  <li key={index} className="category">
                      <img alt="Category" src={category.imageUrl} />
                      <span className="productInfo">{category.category}
                      <i class="fas fa-chevron-right" />
                      </span>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <section className="reviewContainer">
          <h3>생생한 리뷰</h3>
          <ul className="reviews">
            {
              reviews.map((review, index) => {
                return(
                  <li key={index}>
                    <img alt="product image" src={review.imgUrl} />
                    <span className="productName">{review.productName}</span>
                    <div className="reviewRate">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span>{review.rate}</span>
                    </div>
                    <div className="reviewContents">
                      <p>{review.text}</p>
                      <img alt="Review photo" src="/images/Main/main-slider-04.jpg"/>
                    </div>
                    <div className="idAndCreatedAt">
                      <span>{review.userId}</span>
                      <span>{review.createdAt}</span>
                    </div>
                  </li>
                )
              })
            }

          </ul>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Main