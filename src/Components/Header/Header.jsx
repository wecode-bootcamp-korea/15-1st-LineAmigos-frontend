import React from 'react'
import './Header.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: [],
    }
  }
  
  componentDidMount = () => {
    fetch('http://localhost:3000/data/data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.categories
        })
      }).catch(err => console.log(err))
  }

  render() {
    const {categories} = this.state
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
              <input type="text" placeholder="검색어를 입력해보세요"></input>
              <img alt="Search Icon" src="/images/search.png"/>
            </div>
          </div>
          <ul className="topMenu">
            {
              categories.map((category, index) => {
                return (
                  <li key={index}>
                    <div>{category}</div>
                    <img alt="Down arrow" src="/images/arrow-right-bold.png" />
                  </li>
                )
              })
            }
          </ul>
          <div className="navDropdown">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
export default Header