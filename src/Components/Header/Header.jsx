import React from 'react'
import Category from './Category'
import './Header.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      categoriesList: [],
      searchValue : '',
      searchList: [],
      isloggedIn: false,
      scrollTop: 0,
      isNavFixed: false,
      isNavShowing: false,
    }
  }

  handleCategoryOpen = (id) => {
    const openedCategoryList = this.state.categoriesList.map((category) => {
      if (category.id === id) {
        category.isCategoryOpen = true
      }
      return category
    })
    this.setState({
      categoriesList: openedCategoryList
    })
  }

  handleCategoryClose = (id) => {
    const openedCategoryList = this.state.categoriesList.map((category) => {
      if (category.id === id) {
        category.isCategoryOpen = false
      }
      return category
    })
    this.setState({
      categoriesList: openedCategoryList
    })
  }

  handleSearchValue = (e) => {this.setState({searchValue: e.target.value})}

  goToMainPage = () => {this.props.history.push("/")}
  goToLogInPage = () => {!this.state.isloggedIn 
    ? this.props.history.push("/login")
    : this.props.history.push("/")}
  goToProductList = () => {this.props.history.push(`/products`)}
  goToSearchResult = (e) => {
    e.preventDefault()
    this.props.history.push(`/products?search=${this.state.searchValue}`)
  }

  showNavBar = () => {this.setState({isNavShowing: true})}
  hideNavBar = () => {this.setState({isNavShowing: false})}
  handleScroll = (e) => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop)
    this.setState({
      scrollTop,
      isNavFixed: scrollTop > 140 ? true : false
    })
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    // fetch('http://10.168.1.149:8000/product/menu')
    fetch('/data/productsInfos.json')
      .then(response => response.json())
      .then(data => {
        const categories = data.navCategories.map((item) => {
          const category = {
            id: item.categoryId,
            category: item.categoryName,
            subCategories: item.subCategories,
            isCategoryOpen: false,
          }
          return category
        })
        this.setState({
          categoriesList: categories,
          // searchList: data.products,
        })
      }).catch(err => console.log(err))

      fetch('/data/productsInfos.json')
      // fetch('http://10.168.1.149:8000/product/products_info')
      .then(response => response.json())
      .then(data => {
        this.setState({
          searchList: data.products,
        })
      }).catch(err => console.log(err))
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { categoriesList, searchValue, searchList, isloggedIn, isNavFixed, isNavShowing } = this.state
    const { handleSearchValue, handleCategoryOpen, handleCategoryClose, goToLogInPage, goToProductList, goToSearchResult, goToMainPage, showNavBar, hideNavBar } = this
    const filteredList = searchList.filter((product) => 
      product.productName.toLowerCase().includes(searchValue.toLowerCase()) && product)
    localStorage.getItem('token') && this.setState({isloggedIn: true})
    const myPage = isloggedIn && <span className="gnbBtn myPage">마이페이지</span>
    return (
      <header 
        className={`Header ${isNavFixed && 'scrolled'} ${isNavShowing && 'show'}`}
        onMouseOver={showNavBar}
        onMouseLeave={hideNavBar} >
        <div className="innerContainer">
          <nav>
            <div className="navIconLeft">
              <img alt="Naver logo" src="/images/naver-logo.png" />
              <div>
                <img alt="Shop" src="/images/shop-bold.png" />
                <span>네이버쇼핑</span>
              </div>
            </div>
            <div 
              className="navIconRight"
              onClick={goToLogInPage}>
              {myPage}
              <span className="gnbBtn logIn">{isloggedIn ? '로그아웃' : '로그인'}</span>
              <img alt="Menu" src="/images/menu.png" />
            </div>
          </nav>
          <div className="logoAndSearch">
            <h1>
              <img 
                alt="Line Amigos Logo" 
                src="/images/line-amigos-logo-black.png"
                onClick={goToMainPage}/>
            </h1>
            <div className="searchContainer">
              <form onSubmit={goToSearchResult}>
                <input 
                  type="text" 
                  placeholder="검색어를 입력해보세요"
                  onChange={handleSearchValue} />
                <button>
                  <img alt="Search Icon" src="/images/search.png" className="searchIcon"/>
                </button>
              </form>
              <ul className={`searchListContainer ${searchValue && filteredList.length && "open"}`}>
                {filteredList &&
                  filteredList.map(item => {
                    return(
                      <li key={item.id}>
                        <img alt={item.productName} src={item.url} className="itemImg" />
                        <div>
                          <span className="productName">{item.productName}</span>
                          <span className="price">{item.price}원</span>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="topMenuAndHover">
            <ul className="topMenu">
              {categoriesList &&
                categoriesList.map((category, index) => {
                  return (
                    <Category 
                      key={index}
                      id={category.id}
                      category={category.category}
                      subCategories={category.subCategories}
                      isCategoryOpen={category.isCategoryOpen}
                      handleCategoryOpen={handleCategoryOpen}
                      handleCategoryClose={handleCategoryClose}
                      goToCategoryList={goToProductList}/>
                  )
                })
              }
            </ul>
            <div className="hoverBox"/>
          </div>
        </div>
      </header>
    )
  }
}
export default Header