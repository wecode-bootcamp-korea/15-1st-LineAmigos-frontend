import React, { Component } from 'react'
import Products from './component/Products'
// import Filter from './component/Filter'
import Filters from './component/Filters'
import './ProductList.scss'

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      productArr: [],
      filterArr: [],
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/productListDate.json')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          productArr: result.productListData,
        })
      })
    fetch('http://localhost:3000/data/filterData.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filterArr: res.filterData,
        })
      })
  }

  // componentDidMount = () => {
  //   fetch('http://localhost:3000/data/filterData.json')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         filterArr: res.filterData,
  //       })
  //     })
  // }

  render() {
    console.log(this.state.productArr)
    console.log(this.state.filterArr)
    return (
      <div className='container'>
        <header>
          <img
            alt='banner'
            className='banner'
            src='https://shop-phinf.pstatic.net/20200820_161/1597891484319i02UX_JPEG/85945560507838108_-273425339.jpg'
          />
          <div className='headerName'>
            <span className='listName'>NEW</span>
            <div>
              <span className='home'>홈 > </span>
              <select className='listDropDown'>
                <option>캐릭터</option>
                <option value selected>
                  NEW (총 192개)
                </option>
                <option>12.17 선물의 날 </option>
                <option>WINTER SALE</option>
                <option>브롤리데이</option>
                <option>THEME</option>
                <option>BTS21 BABY</option>
                <option>선물추천</option>
                <option>SALE</option>
                <option>토이</option>
                <option>디자인문구</option>
              </select>
            </div>
          </div>
        </header>
        <Filters filterArr={this.state.filterArr} />
        <Products productArr={this.state.productArr} />
      </div>
    )
  }
}

export default ProductList
