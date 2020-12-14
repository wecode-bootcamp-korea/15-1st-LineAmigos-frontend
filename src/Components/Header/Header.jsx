import React from 'react'
// import { withRouter } from 'react-router-dom';
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
        // console.log(data.categories)
      }).catch(err => console.log(err))
  }

  render() {
    const {categories} = this.state
    return (
      <div className='Header'>
        <header>
          <nav>
            <div className="navIconLeft"></div>
            <div className="navIconRight"></div>
          </nav>
          <div className="logoHeader">
            <h1 className="logoAndSearch">
              <img alt="Line Amigos Logo" src="/images/line-amigos-logo.png"/>
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
                    <img alt="Down arrow" src="/images/arrow-right.png" />
                  </li>
                )
              })
            }
          </ul>
          <div className="visualContainer">
            <div className="visualImages">
              <img alt="Slider image" className="sliderImage"/>
              <img alt="Slider image" className="sliderImage"/>
              <img alt="Slider image" className="sliderImage"/>
            </div>
            <div className="visualText">
              <img alt="Slider text" className="sliderText"/>
              <img alt="Slider text" className="sliderText"/>
              <img alt="Slider text" className="sliderText"/>
            </div>
            <div className="arrowContainer">
              <img alt="arrow" />
            </div>
          </div>
        </header>
      </div>
    )
  }
}
export default Header