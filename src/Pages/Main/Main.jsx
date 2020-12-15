import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainSlider from './MainSlider'
import './Main.scss'


class Main extends React.Component {

  render() {
    return (
      <div className="Main">
        <div className="visualContainer">
          <MainSlider />
        </div>
        <Header />
        <div className="newProducts">
          <h3>새로 나왔어요</h3>
          <div className="newProductContainer">
            <img alt="Product" src="/images/product.jpg" />
            <div className="productInfo">
              <span className="saleRate">40%</span>
              <span className="price">63,900원</span>
            </div>
            <span className="productInfo">`(12/14일 출시)라인프렌즈 브롤스타즈 시로의 베스트셀러 에디션`
            </span>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Main