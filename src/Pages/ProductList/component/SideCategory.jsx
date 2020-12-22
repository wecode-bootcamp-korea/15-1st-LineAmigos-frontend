import React, { Component } from 'react'
import '../component/SideCategory.scss'

class SideCategory extends Component {
  constructor() {
    super()
    this.state = {
      cetegoryName: 'NEW',
    }
  }

  handleCategoryName = (e) => {
    this.setState({
      cetegoryName: e.target.id,
    })
    this.setState({})
  }

  render() {
    console.log(this.props.categoryArr)
    return (
      <div>
        <div className='sideCategotyContainer'>
          <span className='listName'>{this.state.cetegoryName}</span>
          <div className='sideCategory' onClick={this.props.hadleSideCategory}>
            <span className='home'>홈 > </span>
            <span className='home'>{this.state.cetegoryName}</span>
            <span className='home'>(총 {this.props.productArr.length}개)</span>
            <i className='fas fa-caret-down' />
            <div
              className={
                this.props.sideCategory
                  ? 'sideCategoryBox'
                  : 'sideCategoryBox displayNone'
              }
            >
              {this.props.categoryArr.map((category) => (
                <div className='listDropDown'>
                  <li id={category.menu} onClick={this.handleCategoryName}>
                    {category.menu}
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideCategory
