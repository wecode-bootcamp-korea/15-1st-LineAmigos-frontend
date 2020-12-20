import React, { Component } from 'react'
import '../component/SideCategory.scss'

class SideCategory extends Component {
  render() {
    console.log(this.props.sideCategory)
    // console.log('넘어온 데이터', this.props.categoryArr[0].name)
    return (
      <div>
        <div
          className='sideCategotyContainer'
          onClick={this.props.hadleSideCategory}
        >
          <span className='home'>홈 > </span>
          <span className='home'>캐릭터</span>
          <span className='home'>(총 196개)</span>
          <i className='fas fa-caret-down' />
        </div>
        <div
          className={
            this.props.sideCategory
              ? 'sideCategoryBox'
              : 'sideCategoryBox displayNone'
          }
        >
          {this.props.categoryArr.map((category) => (
            <div className='listDropDown'>
              <li>{category.product_category}</li>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SideCategory
