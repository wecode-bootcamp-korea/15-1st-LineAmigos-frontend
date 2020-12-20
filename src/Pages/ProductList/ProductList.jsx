import React, { Component } from 'react'
import Products from './component/Products'
// import Filter from './component/Filter'
import Filters from './component/Filters'
import './ProductList.scss'
import SideCategory from './component/SideCategory'

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      productArr: [],
      filterArr: [],
      categoryArr: [],
      sideCategory: false,
    }
  }

  componentDidMount = () => {
    fetch('http://10.168.1.149:8000/product/get')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productArr: response.PRODUCTS,
        })
      })
    fetch('http://localhost:3007/data/filterData.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filterArr: res.filterData,
        })
      })
    fetch('http://10.168.1.149:8000/product/get')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryArr: res.PRODUCTS,
        })
      })
  }

  hadleSideCategory = () => {
    this.setState({
      sideCategory: !this.state.sideCategory,
    })
  }

  // goToCategory = () => {
  //   this.props.history('/')
  // }

  render() {
    console.log(this.state.productArr.src)
    // console.log(this.state.filterArr)
    // console.log('카테고리', this.state.categoryArr)
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
            <SideCategory
              categoryArr={this.state.categoryArr}
              hadleSideCategory={this.hadleSideCategory}
              sideCategory={this.state.sideCategory}
              goToCategory={this.goToCategory}
            />
          </div>
        </header>
        <Filters filterArr={this.state.filterArr} />
        <Products productArr={this.state.productArr} />
      </div>
    )
  }
}

export default ProductList
