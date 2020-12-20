import React, { Component } from 'react'
import Filter from '../component/Filter'
import '../component/Filters.scss'

class Filters extends Component {
  constructor() {
    super()
    this.state = {
      viewDropdown: false,
    }
  }
  handleViewDropDown = () => {
    this.setState({
      viewDropdown: !this.state.viewDropdown,
    })
  }
  render() {
    return (
      <div className='filtersContainer'>
        <ul>
          {this.props.filterArr.map((filter) => (
            <Filter filter={filter} filters={this.props.filterArr} />
          ))}
        </ul>
        <div className='viewFilterContainer'>
          <div className='viewDropdownBox'></div>
          <div className='viewName' onClick={this.handleViewDropDown}>
            <span> 40개씩보기</span>
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
            >
              <li>20개씩 보기</li>
              <li>40개씩 보기</li>
              <li>60개씩 보기</li>
              <li>80개씩 보기</li>
            </div>
          </div>
          {/* <div className='viewDropdown'>
            <option>20개씩보기</option>
            <option value selected>
              40개씩보기
            </option>
            <option>60개씩보기</option>
            <option>80개씩보기</option>
          </div> */}
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
