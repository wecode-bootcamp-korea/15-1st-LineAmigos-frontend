import React, { Component } from 'react'
import Products from './component/Products'
import Filters from './component/Filters'
import SideCategory from './component/SideCategory'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ImgPurchInfo from '../ProductDetail/Component/ImgPurchInfo'
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
      pageArr: [],
      sideCategory: false,
      wishBtn: false,
      rowPrice: '',
      pageNum: false,
      currentIdx: '',
      pageArr: [],
      modalSize: 'modalSize',
      detailModal: false,
      clickedId: 0,
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
          pageArr: res.pageData,
        })
      })
  }

  //페이지네이션
  fetchProduct = (e) => {
    const offset = e?.target.dataset.idx

    let updatedPageArr = [...this.state.pageArr]
    updatedPageArr = updatedPageArr.map((item) => {
      console.log('셀렉어레이', updatedPageArr)
      console.log('셀렉아이디', item.id)
      if (+offset === item.id) {
        item.selected = !item.selected
        return item
      } else {
        item.selected = false
        return item
      }
    })
    this.setState({
      pageArr: updatedPageArr,
    })

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

  //정렬필터
  handleSorting = (e) => {
    if (+e.target.id === 0) {
      fetch('http://10.168.1.149:8000/product/products_info?sort=like')
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }
    if (+e.target.id === 1) {
      fetch('http://10.168.1.149:8000/product/products_info?sort=price')
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }
    if (+e.target.id === 2) {
      fetch('http://10.168.1.149:8000/product/products_info?ordering=-id')
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }
    if (+e.target.id === 3) {
      fetch('http://10.168.1.149:8000/product/products_info?sort=review')
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            productArr: response.PRODUCTS,
          })
        })
    }
    if (+e.target.id === 4) {
      fetch('http://10.168.1.149:8000/product/products_info?sort=avg')
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

  handleClickedProductId = (clickedId) => {
    console.log('현재 선택된 프로덕트 id: ', clickedId)
    this.setState({
      clickedId,
    })
  }

  handleDetailModal = (e) => {
    this.setState({
      detailModal: !this.state.detailModal,
    })
  }

  handleWishBtn = () => {
    this.setState({
      wishBtn: !this.state.wishBtn,
    })
  }

  render() {
    const rate = [5, 5, 5]

    return (
      <div className='ProductList'>
        <div className='container'>
          <Header />
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
            pageArr={this.state.pageArr}
            handleClickedProductId={this.handleClickedProductId}
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
            {this.state.productArr.map((el) => {
              if (el.product_id === this.state.clickedId) {
                return (
                  <ImgPurchInfo
                    id={el.product_id}
                    productName={el.name}
                    imgUrl={el.product_image}
                    price={el.price}
                    reviewArray={rate}
                    newClassName={this.state.modalSize}
                  />
                )
              } else {
                return null
              }
              //호버인덱스 클릭아이디 === el.product_id &&
              //모달창이 떴을 때 클래스네임적용 해서 원하는 사이즈 적용
              //클래스네임을 퍼치인포 프롭스로 넘기기
            })}

            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductList
