import React from 'react'
import MainSlider from './MainSlider'
import NewProductsSlider from './NewProductsSlider'
import CategoriesSlider from './CategoriesSlider'
import ReviewAutoPlay from './ReviewAutoPlay'
import './Main.scss'

class Main extends React.Component {
  render() {    
    return (
      <div className="Main">
        <section className="visualContainer">
          <MainSlider />
        </section>
        <section className="newProductsSection">
          <ul className="newProducts">
            <NewProductsSlider />
          </ul>
        </section>
        <section className="clickToSee">
          <h3>#우리집 홈카페</h3>
          <div className="clickContainer">
            <div className="buttonPlate">
              <img alt="My home cafe" src="/images/Main/main-slider-03.jpg" />
              <ul className="buttons">
                <li className="button01">
                  <span className="target01"></span>
                  <div className="price01"></div>
                </li>
                <li className="button02">
                  <span className="target02"></span>
                  <div className="price02"></div>
                </li>
                <li className="button03">
                  <span className="target03"></span>
                  <div className="price03"></div>
                </li>
                <li className="button04">
                  <span className="target04"></span>
                  <div className="price04"></div>
                </li>
                <li className="button05">
                  <span className="target05"></span>
                  <div className="price05"></div>
                </li>
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
          <MainSlider />
        </section>
        <section className="categoriesShortcut">
          <CategoriesSlider />
        </section>
        <section className="reviewContainer">
          <ReviewAutoPlay />
        </section>
      </div>
    )
  }
}

export default Main