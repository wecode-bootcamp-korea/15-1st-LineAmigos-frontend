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
        category.isCategoryOpen = !category.isCategoryOpen
      }
      return category
    })
    this.setState({
      categoriesList: openedCategoryList
    })
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
    const { categoriesList, searchValue, searchList } = this.state
    const { handleSearchValue, handleCategoryOpen } = this
    const filteredList = searchList.filter((product) => {
      if (product.productName.toLowerCase().includes(searchValue.toLowerCase())) {
        return product
      }
    })

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
            <div className="navIconRight">
              <span>로그인</span>
              <img alt="Menu" src="/images/menu.png" />
            </div>
          </nav>
          <div className="logoAndSearch">
            <h1>
              <img alt="Line Amigos Logo" src="/images/line-amigos-logo-black.png"/>
            </h1>
            <div className="searchContainer">
              <input 
                type="text" 
                placeholder="검색어를 입력해보세요"
                onChange={handleSearchValue} />
              <img alt="Search Icon" src="/images/search.png" className="searchIcon"/>
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
                    isCategoryOpen={category.isCategoryOpen}
                    />
                  // <li key={index}>
                  //   <div>{navCategory.category}</div>
                  //   <img alt="Down arrow" src="/images/arrow-right-bold.png" />
                  //   <div className="navDropdown">
                  //     <ul className="subCategories">
                  //       {navCategory.subCategories &&
                  //         navCategory.subCategories.map((subCategory, index) => {
                  //           return (
                  //             // console.log(subCategory)
                  //             <li key={index}>{subCategory}</li>
                  //           )
                  //         })
                  //       }
                  //       테스트
                  //     </ul>
                  //   </div>
                  // </li>
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