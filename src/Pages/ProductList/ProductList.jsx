import React, { Component } from 'react'
import './ProductList.scss'

class ProductList extends Component {
  render() {
    return (
      <div className='container'>
        <header>
          <img
            alt='banner'
            className='banner'
            src='https://shop-phinf.pstatic.net/20200820_161/1597891484319i02UX_JPEG/85945560507838108_-273425339.jpg'
          />
          <span>NEW</span>
          <span>홈 - NEW(총192개)</span>
        </header>
        <div className='filterContainer'>
          <span>인기도순</span>
          <span>낮은가격순</span>
          <span>최신등록순</span>
          <span>리뷰많은순</span>
          <span>평점높은순</span>
          <span>40개씩보기</span>
          <span>보기필터아이콘자리</span>
        </div>
        <div className='productListContainer'>
          <div className='productList'>
            <img
              alt='product'
              className='product'
              src='https://shop-phinf.pstatic.net/20201211_187/1607676544582vyQbn_JPEG/18453428_54643025.jpg?type=f232_232'
            />
            <div className='productNameContainer'>
              <span className='productName'>라인프렌즈 귀염둥이 분홍 토끼</span>
              <i className='far fa-heart'></i>
            </div>
            <span className='productPrice'>55,000원</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductList
