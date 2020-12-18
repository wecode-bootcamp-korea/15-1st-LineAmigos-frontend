import React, { Component } from 'react'
import Filter from '../component/Filter'
import '../component/Filters.scss'

class Filters extends Component {
  render() {
    return (
      <div className='filtersContainer'>
        <ul>
          {this.props.filterArr.map((filter) => (
            <Filter filter={filter} filters={this.props.filterArr} />
          ))}
        </ul>
        <div className='viewFilterContainer'>
          <select className='viewDropdown'>
            <option>20개씩보기</option>
            <option value selected>
              40개씩보기
            </option>
            <option>60개씩보기</option>
            <option>80개씩보기</option>
          </select>
          <div className='viewIconContainer'>
            <div className='iconBox'>
              <i class='fas fa-list' />
            </div>
            <div className='iconBox'>
              <i class='fas fa-stop' />
            </div>
            <div className='iconBox'>
              <i class='fas ffa-th-large' />
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
