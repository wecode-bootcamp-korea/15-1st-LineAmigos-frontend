import React from 'react'
import './Header.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: [],
      searchValue : '',
      searchList: [],
    }
  }
  
  handleSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  componentDidMount = () => {
    fetch('/data/productsInfos.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.navCategories,
          searchList: data.products,
        })
      }).catch(err => console.log(err))
  }

  render() {

    const {categories, searchValue, searchList} = this.state
    const filteredList = searchList.filter((product) => {
      if (product.productName.toLowerCase().includes(searchValue.toLowerCase())) {
        return product
      }
    })
    console.log(filteredList)

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
          <div className="logoHeader">
            <h1 className="logoAndSearch">
              <img alt="Line Amigos Logo" src="/images/line-amigos-logo-black.png"/>
            </h1>
            <div className="searchContainer">
              <input 
                type="text" 
                placeholder="검색어를 입력해보세요"
                onChange={this.handleSearchValue} />
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
            {categories &&
              categories.map((navCategory, index) => {
                return (
                  <li key={index}>
                    <div>{navCategory.category}</div>
                    <img alt="Down arrow" src="/images/arrow-right-bold.png" />
                  </li>
                )
              })
            }
          </ul>
          <div className="navDropdown">
            <ul>
              <li>subcategory1</li>
              <li>subcategory2</li>
              <li>subcategory3</li>
              <li>subcategory4</li>
              <li>subcategory5</li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
export default Header