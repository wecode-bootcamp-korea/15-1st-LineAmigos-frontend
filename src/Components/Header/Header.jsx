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
    }
  }

  handleSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
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

  goToMainPage = () => {
    this.props.history.push("/")
  }

  goToLogInPage = () => {
    if (!this.state.isloggedIn) {
      this.props.history.push("/login")
    }
  }

  goToProductList = (id) => {
    this.props.history.push(`/productlist/${id}`)
  }

  goToSearchResult = (e) => {
    e.preventDefault()
    this.props.history.push(`/productlist/${this.state.searchValue}`)
  }

  componentDidMount = () => {
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
          searchList: data.products,
        })
        console.log(this.state.categoriesList)
      }).catch(err => console.log(err))
  }

  render() {
    const { categoriesList, searchValue, searchList, isloggedIn } = this.state
    const { handleSearchValue, handleCategoryOpen, handleCategoryClose, goToLogInPage, goToProductList, goToSearchResult, goToMainPage } = this
    const filteredList = searchList.filter((product) => {
      if (product.productName.toLowerCase().includes(searchValue.toLowerCase())) {
        return product
      }
    })
    localStorage.getItem('token') && this.setState({isloggedIn: true})

    return (
      <header className='Header'>
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
              <span className="logIn">{isloggedIn ? '로그아웃' : '로그인'}</span>
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
              <ul className={!searchValue || filteredList.length === 0 ? "searchListContainer " : "searchListContainer open"}>
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
          <ul className="topMenu">
            {categoriesList &&
              categoriesList.map((category, index) => {
                return (
                  <Category 
                    key={index}
                    id={category.id}
                    category={category.category}
                    subCategories={category.subCategories}
                    handleCategoryOpen={handleCategoryOpen}
                    handleCategoryClose={handleCategoryClose}
                    isCategoryOpen={category.isCategoryOpen}
                    goToCategoryList={goToProductList}
                    />
                )
              })
            }
          </ul>
        </div>
      </header>
    )
  }
}
export default Header