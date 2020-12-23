import React, { Component } from 'react'
import Products from './component/Products'
import Filters from './component/Filters'
import SideCategory from './component/SideCategory'
import Footer from '../../Components/Footer/Footer'
import './ProductList.scss'

const LIMIT = 20

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      productArr: [],
      filterArr: [],
      categoryArr: [],
      reviewArr: [],
      sideCategory: false,
      detailModal: false,
      wishBtn: false,
      rowPrice: '',
      pageNum: false,
      currentIdx: '',
    }
  }

  //config파일에 API주소 변수로 담아두었지만, 아래 코드는 작업을 위해 남겨놓았습니다. 머지 후 삭제하겠습니다!
  componentDidMount = () => {
    fetch(`http://10.168.1.149:8000/product/products_info?limit=${LIMIT}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productArr: response.PRODUCTS,
        })
      })

    fetch('http://10.168.1.140:8000/review/reviews')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          reviewArr: response.review,
        })
      })

    fetch('http://10.168.1.149:8000/product/menu')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryArr: res.main,
        })
      })

    fetch('/data/filterData.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filterArr: res.filterData,
        })
      })
  }

  //페이지네이션
  fetchProduct = (e) => {
    const offset = e?.target.dataset.idx
    fetch(
      `http://10.168.1.149:8000/product/products_info?limit=20&offset=${
        offset * LIMIT
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productArr: response.PRODUCTS,
        })
      })
  }

  //보기필터
  fetchViewFilter = (e) => {
    const offset = e.target.dataset.idx
    if (offset === '0') {
      fetch(
        `http://10.168.1.149:8000/product/products_info?limit=20&offset=${
          offset * 20
        }`
      )
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }
    if (offset === '1') {
      fetch('http://10.168.1.149:8000/product/products_info?limit=40&offset=0')
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }
    if (offset === '2') {
      fetch('http://10.168.1.149:8000/product/products_info?limit=60&offset=0')
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }
  }

  handleSorting = (e) => {
    // fetch('http://10.168.1.149:8000/product/products_info')
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState({
    //       productArr: response.PRODUCTS,
    //     })
    //   })

    if (+e.target.id === 1) {
      fetch('http://10.168.1.149:8000/product/products_info?sort=price')
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }

    let updatededFilterArr = [...this.state.filterArr]
    updatededFilterArr = updatededFilterArr.map((item) => {
      if (+e.target.id === item.id) {
        item.selected = !item.selected
        return item
      } else {
        item.selected = false
        return item
      }
    })
    this.setState({
      filterArr: updatededFilterArr,
    })
  }

  hadleSideCategory = () => {
    this.setState({
      sideCategory: !this.state.sideCategory,
    })
  }

  handleDetailModal = () => {
    this.setState({
      detailModal: !this.state.detailModal,
    })
  }

  handleWishBtn = () => {
    this.setState({
      wishBtn: !this.state.wishBtn,
    })
  }

  // HandleFilterMenu = (e) => {
  //   fetch('http://10.168.1.149:8000/product/products_info?sort=price')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         filterArr: res.filterData,
  //       })
  //     })

  //   const { productArr } = this.state
  //   const sortByTotalSales = productArr.filter((item) => item.salse_amount > 5)
  //   const sortByLowerPrices = productArr.sort((a, b) => a.price - b.price)
  //   const sortByUpToDate = productArr.filter(
  //     (item) => item.updated_at > '2020-12-01'
  //   )
  //   const sortByReview = productArr.filter((item) => item.review > 5)
  //   const sortByRate = productArr.filter((item) => item.rate > 4)

  //   if (e === '인기도순') {
  //     this.setState({
  //       productArr: sortByTotalSales,
  //     })
  //   } else if (e === '낮은가격순') {
  //     this.setState({
  //       productArr: sortByLowerPrices,
  //     })
  //   } else if (e === '최신등록순') {
  //     this.setState({
  //       productArr: sortByUpToDate,
  //     })
  //   } else if (e === '평점높은순') {
  //     this.setState({
  //       productArr: sortByRate,
  //     })
  //   } else if (e === '리뷰많은순') {
  //     this.setState({
  //       productArr: sortByReview,
  //     })
  //   }
  // }

  handlePageNum = (e) => {
    if (this.state.currentIdx === e.target.dataset.idx)
      this.setState({
        pageNum: !this.state.pageNum,
      })
  }

  render() {
    console.log(this.state.reviewArr)
    console.log(this.state.productArr)

    return (
      <div className='ProductList'>
        <div className='container'>
          <header>
            <img
              alt='banner'
              className='banner'
              src='/images/productList_banner4.jpg'
            />
            <SideCategory
              categoryArr={this.state.categoryArr}
              hadleSideCategory={this.hadleSideCategory}
              sideCategory={this.state.sideCategory}
              goToCategory={this.goToCategory}
              productArr={this.state.productArr}
            />
          </header>
          <Filters
            filterArr={this.state.filterArr}
            onFilterMenu={this.handleFilterMenu}
            fetchViewFilter={this.fetchViewFilter}
            handleSorting={this.handleSorting}
          />

          <Products
            productArr={this.state.productArr}
            reviewArr={this.state.reviewArr}
            onModal={this.handleDetailModal}
            onPageNum={this.handlePageNum}
            fetchProduct={this.fetchProduct}
            currentIdx={this.state.currentIdx}
          />
        </div>
        <div className={this.state.detailModal ? 'modal' : 'modal hidden'}>
          <div className='layout' onClick={this.handleDetailModal}></div>
          <div className='popup'>
            <div className='modalHeader'>
              <span>간략보기</span>
              <button className='closeBtn' onClick={this.handleDetailModal}>
                X
              </button>
            </div>
            <div className='testBox'></div>
            <div className='bottomBtn'>
              <button className='detailBtn' onClick={this.goToDetail}>
                상품 상세보기
              </button>
              <button className='wishBtn' onClick={this.handleWishBtn}>
                <i
                  className={
                    this.state.wishBtn ? 'fas fa-heart' : 'far fa-heart'
                  }
                />
                찜
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ProductList
