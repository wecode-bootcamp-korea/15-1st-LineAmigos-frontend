import React, { Component } from 'react'
import Products from './component/Products'
// import Filter from './component/Filter'
import Filters from './component/Filters'
import './ProductList.scss'
import SideCategory from './component/SideCategory'
// import Pagination from './component/Pagination'

const LIMIT = 5

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
    }
  }

  componentDidMount = () => {
    // const nextOffset = LIMIT + nextOffset
    // fetch(
    //   `http://localhost:3005/data/productListDate.json/productlist?limit=${LIMIT}&offset=${nextOffset}`
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState({
    //       productArr: response.productListData,
    //     })
    //   })

    fetch('http://localhost:3000/data/productListDate.json')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productArr: response.productListData,
        })
      })
    // fetch('http://10.168.1.149:8000/product/products_info')
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState({
    //       productArr: response.PRODUCTS,
    //     })
    //   })
    fetch('http://localhost:3000/data/filterData.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filterArr: res.filterData,
        })
      })

    fetch('http://localhost:3000/data/categories.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryArr: res.categories,
        })
      })
    // fetch('http://10.168.1.149:8000/product/products_info')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       categoryArr: res.PRODUCTS,
    //     })
    //   })
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
  render() {
    console.log(this.state.filterArr.id)
    return (
      <div className='ProductList'>
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
          <Products
            productArr={this.state.productArr}
            onModal={this.handleDetailModal}
          />
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
      </div>
    )
  }
}

export default ProductList
