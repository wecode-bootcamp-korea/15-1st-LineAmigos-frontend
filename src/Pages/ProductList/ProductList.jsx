import React, { Component } from 'react'
import Products from './component/Products'
import './ProductList.scss'

// const customStyles = (value) => ({
//   control: (provided, state) => ({
//     ...provided,
//     backgroundColor: value ? 'gray' : 'white',
//   }),
// })

// const options = [
//   { value: '캐릭터', label: '캐릭터' },
//   { value: '캐릭터', label: '캐릭터' },
//   { value: '캐릭터', label: '캐릭터' },
// ]

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      productArr: [],
      productFilterBtn: false,
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
  }

  // handleWishBtn = () => {
  //   this.setState({
  //     wishBtn: !this.state.wishBtn,
  //   })
  // }

  handleProductFilterBtn = () => {
    this.setState({
      productFilterBtn: !this.state.productFilterBtn,
    })
  }

  render() {
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
        <div className='filterContainer'>
          <div className='productFilter'>
            <i class={this.state.productFilterBtn ? 'fas fa-check' : ''} />
            <li onClick={this.handleProductFilterBtn}>인기도순</li>
            <li>|</li>
            <i class='fas fa-check' />
            <li>낮은가격순</li>
            <li>|</li>
            <i class='fas fa-check' />
            <li>리뷰많은순</li>
            <li>|</li>
            <i class='fas fa-check' />
            <li>평점높은순</li>
          </div>
          <div className='viewFilterContainer'>
            <select className='viewDropdown'>
              <option>20개씩보기</option>
              <option value selected>
                40개씩보기
              </option>
              <option>60개씩보기</option>
              <option>80개씩보기</option>
            </select>
            <div className='viewIconContainer'>
              <div className='iconBox'>
                <i class='fas fa-list' />
              </div>
              <div className='iconBox'>
                <i class='fas fa-stop' />
              </div>
              <div className='iconBox'>
                <i class='fas ffa-th-large' />
              </div>
              <div className='iconBox'>
                <i class='fas fa-th' />
              </div>
            </div>
          </div>
        </div>
        <Products productArr={this.state.productArr} />
      </div>
    )
  }
}

export default ProductList
