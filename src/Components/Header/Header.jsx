import React from 'react'
import { withRouter } from 'react-router-dom';
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
        console.log(data)
      })
  }

  render() {
    return (
      <div className='Header'>
        <header>
          <nav>
            <div className="navIconRight"></div>
            <div className="navIconLeft"></div>
          </nav>
          <div className="logoAndSearch">
            <img alt="Line Amigos Logo" src="/public/images/line-amigos-logo.png"/>
            <div className="searchContainer">
              <input type="text" placeholder="검색어를 입력해보세요"></input>
              <img alt="Search Icon" src="/public/images/search.png"/>
            </div>
          </div>
          <div className="topMenu">
            {
              this.state.categories.map((category, index) => {
                return (
                  <div key={index}>{category}</div>
                )
              })
            }
            <div>더보기<img alt="more" src="/public/images/next.png"/></div>
          </div>
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

export default withRouter(Header)
