import React, { Component } from 'react'
import Products from './component/Products'
import Filters from './component/Filters'
import SideCategory from './component/SideCategory'
import Footer from '../../Components/Footer/Footer'
import './ProductList.scss'

// import Pagination from './component/Pagination'
class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      productArr: [],
      filterArr: [],
      categoryArr: [],
      sideCategory: false,
      detailModal: false,
      wishBtn: false,
      rowPrice: '',
      pageNum: '',
      currentIdx: '',
    }
  }

  componentDidMount = () => {
    //limit은 백엔드와 약속된 키값!
    fetch('http://10.168.1.149:8000/product/products_info')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productArr: response.PRODUCTS,
        })
      })

    // fetch(`http://10.168.1.149:8000/product/products_info?limit=${LIMIT}`)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState({
    //       productArr: response.PRODUCTS,
    //     })
    //     console.log('어레이', this.state.productArr)
    //   })
  }

  fetchProduct = (e) => {
    const LIMIT = 20
    const offset = e?.target.dataset.idx
    // console.log('뭐냐', e.target.dataset.idx)

    fetch(
      'http://10.168.1.149:8000/product/products_info?limit=12&offset=0'
      // `http://10.168.1.149:8000/product/products_info?limit=20&offset=${
      //   offset * LIMIT
      // }`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productArr: response.PRODUCTS,
        })
      })
    // fetch(
    //   `http://10.168.1.149:8000/product/products_info?offset=${
    //     offset * LIMIT
    //   }&limit=${LIMIT}`
    // )
    // .then((response) => response.json())
    // .then((response) => {
    //   this.setState({
    //     productArr: response.PRODUCTS,
    //   })
    // })

    // fetch('http://10.168.1.149:8000/product/menu')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       categoryArr: res.main,
    //     })
    //   })
  }

  handleFilterMenu = (e) => {
    // console.log('아이디', e.target.id)
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

  // goToCategory = () => {
  //   this.props.history('/')
  // }

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

  goToDetail = () => {
    this.props.history.push('/productdetail/') // 경오님이랑 연결 후 동적라우팅 사용
  }

  HandleLowPrice = (e) => {
    fetch('http://10.168.1.149:8000/product/products_info?sort=price')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filterArr: res.filterData,
        })
      })

    // console.log('e는 무엇인가', e)
    // const sortByTotalSales = this.state.productArr.filter(
    //   (item) => item.salse_amount > 5
    // )
    // const sortByLowerPrices = this.state.productArr.sort(
    //   (a, b) => a.price - b.price
    // )
    // const sortByUpToDate = this.state.productArr.filter(
    //   (item) => item.updated_at > '2020-12-01'
    // )
    // const sortByReview = this.state.productArr.filter((item) => item.review > 5)
    // const sortByRate = this.state.productArr.filter((item) => item.rate > 4)

    // if (e === '인기도순') {
    //   this.setState({
    //     productArr: sortByTotalSales,
    //   })
    // } else if (e === '낮은가격순') {
    //   this.setState({
    //     productArr: sortByLowerPrices,
    //   })
    // } else if (e === '최신등록순') {
    //   this.setState({
    //     productArr: sortByUpToDate,
    //   })
    // } else if (e === '평점높은순') {
    //   this.setState({
    //     productArr: sortByRate,
    //   })
    // } else if (e === '리뷰많은순') {
    //   this.setState({
    //     productArr: sortByReview,
    //   })
    // }
  }

  handlePageNum = () => {
    this.setState({
      pageNum: !this.state.pageNum,
    })
  }

  render() {
    console.log('어레이', this.state.productArr)
    return (
      <div className='ProductList'>
        <div className='container'>
          <header>
            <img
              alt='banner'
              className='banner'
              src='https://shop-phinf.pstatic.net/20200820_161/1597891484319i02UX_JPEG/85945560507838108_-273425339.jpg'
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
            onLowPrice={this.HandleLowPrice}
          />

          <Products
            productArr={this.state.productArr}
            // productArr={this.HandleLowPrice}
            onModal={this.handleDetailModal}
            onPageNum={this.handlePageNum}
            // pageNum={this.state.pageNum}
            fetchProduct={this.fetchProduct}
            currentIdx={this.state.currentIdx}

            // price={this.HandleLowPrice}
          />

          {/* {this.state.productArr && obj[this.state.rowPrice]} */}
        </div>
        <div className={this.state.detailModal ? 'modal' : 'modal hidden'}>
          <div className='layout' onClick={this.handleDetailModal}></div>
          <div className='popup'>
            <div className='modalHeader'>
              <span>간략보기</span>
              <button
                clclassNameass='closeBtn'
                onClick={this.handleDetailModal}
              >
                X
              </button>
            </div>
            <div className='testBox'> 경오님 컴포넌트</div>
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
