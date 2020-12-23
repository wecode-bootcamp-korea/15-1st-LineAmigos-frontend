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
      viewName: e.target.className,
    })
  }
  render() {
    return (
      <div className='filtersContainer'>
        <ul>
          {this.props.filterArr.map((filter) => (
            <Filter
              filter={filter}
              onFilterMenu={this.props.onFilterMenu}
              handleSorting={this.props.handleSorting}
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
              <li
                className={'20개씩 보기'}
                onClick={this.props.fetchViewFilter}
                data-idx='0'
              >
                20개씩 보기
              </li>
              <li
                className={'40개씩 보기'}
                onClick={this.props.fetchViewFilter}
                data-idx='1'
              >
                40개씩 보기
              </li>
              <li
                className={'60개씩 보기'}
                onClick={this.props.fetchViewFilter}
                data-idx='2'
              >
                60개씩 보기
              </li>
            </div>
          </div>
          <div className='viewIconContainer'>
            <div className='iconBox'>
              <i className='fas fa-list' />
            </div>
            <div className='iconBox'>
              <i className='fas fa-stop' />
            </div>
            <div className='iconBox'>
              <i className='fas fa-th-large' />
            </div>
            <div className='iconBox'>
              <i className='fas fa-th' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Filters
