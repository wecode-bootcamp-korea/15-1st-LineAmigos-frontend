import React, { Component } from 'react'
import '../component/Filter.scss'

class Filter extends Component {
  constructor() {
    super()
    this.state = {
      filterId: '',
      filterBtn: false,
      filterBtn2: '',
    }
  }

  handleFilter = (el) => {
    if (
      Number(el.target.id) !== this.props.filter.id
      // &&this.state.filterBtn === true
    ) {
      this.setState({
        filterBtn: false,
      })
    } else if (Number(el.target.id) === this.props.filter.id) {
      this.setState({
        filterBtn: !this.state.filterBtn,
      })
    }
  }

  render() {
    return (
      <div className='filterContainer'>
        <i
          className={
            this.state.filterBtn
              ? 'fas fa-check fasBlock'
              : 'fas fa-check fasNone'
          }
        />
        <li
          id={this.props.filter.id}
          className='filter'
          onClick={this.handleFilter}
        >
          {this.props.filter.name}
        </li>
      </div>
    )
  }
}

export default Filter
