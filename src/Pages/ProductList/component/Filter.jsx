import React, { Component } from 'react'
import '../component/Filter.scss'

class Filter extends Component {
  constructor() {
    super()
    this.state = {
      filterId: '',
      filterBtn: false,
      isActiveFilter: '',
    }
  }

  handleFilter = () => {
    this.setState({
      isActiveFilter: this.props.filter.id,
    })
  }

  handleFilterMenu = () => {
    this.props.onFilterMenu(this.props.filter.name)
  }

  render() {
    return (
      <div className='filterContainer'>
        <i
          name={this.props.filter.name}
          className={
            this.props.filter.selected
              ? 'fas fa-check fasBlock'
              : 'fas fa-check fasNone'
          }
        />
        <li
          id={this.props.filter.id}
          className={this.state.filterBtn ? 'clickedColor' : 'filter'}
          onClick={
            (() => this.handleFilter(this.props.filter.id),
            this.handleFilterMenu,
            this.props.handleSorting)
          }
        >
          {this.props.filter.name}
        </li>
      </div>
    )
  }
}

export default Filter
