import React, { Component } from 'react'
import Filter from '../component/Filter'
import '../component/Filters.scss'

class Filters extends Component {
  constructor() {
    super()
    this.state = {
      viewDropdown: false,
      viewName: '20개씩보기',
    }
  }
  handleViewDropDown = () => {
    this.setState({
      viewDropdown: !this.state.viewDropdown,
    })
  }

  handleViewNameChange = (e) => {
    this.setState({
      viewName: e.target.id,
    })
  }
  render() {
    console.log('프롭스', this.props.filterArr)
    return (
      <div className='filtersContainer'>
        <ul>
          {this.props.filterArr.map((filter) => (
            <Filter
              filter={filter}
              // test={this.props.test}
              // price={this.props.filter}
              onLowPrice={this.props.onLowPrice}
            />
          ))}
        </ul>
        <div className='viewFilterContainer'>
          <div className='viewDropdownBox'></div>
          <div className='viewName' onClick={this.handleViewDropDown}>
            <span>{this.state.viewName}</span>
            <i
              className={
                this.state.viewDropdown
                  ? 'fas fa-caret-up'
                  : 'fas fa-caret-down'
              }
            />
            <div
              className={
                this.state.viewDropdown ? 'viewDropdown' : ' viewDropdown none'
              }
              onClick={this.handleViewNameChange}
            >
              <li id={'20개씩 보기'}>20개씩 보기</li>
              <li id={'40개씩 보기'}>40개씩 보기</li>
              <li id={'60개씩 보기'}>60개씩 보기</li>
              <li id={'80개씩 보기'}>80개씩 보기</li>
            </div>
          </div>
          <div className='viewIconContainer'>
            <div className='iconBox'>
              <i class='fas fa-list' />
            </div>
            <div className='iconBox'>
              <i class='fas fa-stop' />
            </div>
            <div className='iconBox'>
              <i class='fas fa-th-large' />
            </div>
            <div className='iconBox'>
              <i class='fas fa-th' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Filters
