import React, { Component } from 'react'
import '../component/Filter.scss'

class Filter extends Component {
  constructor() {
    super()
    this.state = {
      filterId: '',
      filterBtn: false,
      // popular: false,
      // lowPrice: false,
      // upToDate: false,
      // review: false,
      // rate: false,
    }
  }

  // handleFilter = (el) => {
  //   console.log('dkdlel', el.target.id)
  //   if (Number(el.target.id) === 0) {
  //     this.setState({
  //       filterBtn: true,
  //       lowPrice: false,
  //       upToDate: false,
  //       review: false,
  //       rate: false,
  //     })
  //   }
  //   if (el.target.id === 1) {
  //     this.setState({
  //       lowPrice: true,
  //       popular: false,
  //       upToDate: false,
  //       review: false,
  //       rate: false,
  //     })
  //   }
  //   if (el.target.id === '2') {
  //     this.setState({
  //       upToDate: true,
  //       popular: false,
  //       upToDate: false,
  //       review: false,
  //       rate: false,
  //     })
  //   }
  //   if (el.target.id === '3') {
  //     this.setState({
  //       rate: true,
  //       popular: false,
  //       upToDate: false,
  //       review: false,
  //       lowPrice: false,
  //     })
  //   }
  //   if (el.target.id === '4') {
  //     this.setState({
  //       review: true,
  //       popular: false,
  //       upToDate: false,
  //       lowPrice: false,
  //       rate: false,
  //     })
  //   }
  // }
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
          className={this.state.filterBtn ? 'clickedColor' : 'filter'}
          onClick={this.handleFilter}
        >
          {this.props.filter.name}
        </li>
      </div>
    )
  }
}

export default Filter
