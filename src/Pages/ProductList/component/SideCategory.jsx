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
    const {
      hadleSideCategory,
      productArr,
      sideCategory,
      categoryArr,
    } = this.props
    const { cetegoryName } = this.state

    return (
      <div>
        <div className='sideCategotyContainer'>
          <span className='listName'>{cetegoryName}</span>
          <div className='sideCategory' onClick={hadleSideCategory}>
            <span className='home'>홈 > </span>
            <span className='home'>{cetegoryName}</span>
            <span className='home'>(총 {productArr.length}개)</span>
            <i className='fas fa-caret-down' />
            <div
              className={
                sideCategory ? 'sideCategoryBox' : 'sideCategoryBox displayNone'
              }
            >
              {categoryArr.map((category) => (
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
