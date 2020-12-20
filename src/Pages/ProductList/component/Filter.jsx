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

  // handleFilter = () => {
  //   const copyFilter = { 0: false, 1: false, 2: false, 3: false }

  //   copyFilter[this.props.filter.id] = true
  //   this.setState({
  //     filterBtn: copyFilter[this.props.filter.id],
  //   })
  //   // console.log(this.props.filter.name) //안녕안녕 // console.log(this.state.filterBtn) //false
  //   console.log(this.props.filter.id) //3
  //   console.log(this.state.filterBtn)
  //   console.log(copyFilter)
  // }

  handleFilter = (el) => {
    console.log(this.props.filters)
    this.props.filters.map((item) => {
      console.log('item.id', item.id)
      console.log('target.id', el.target.id)

      if (el.target.id !== item.id) {
        this.setState({
          filterBtn: false,
        })
      } else if (el.target.id === item.id) {
        this.setState({
          filterBtn: !this.state.filterBtn,
        })
      }
    })
    // console.log(this.state.filterBtn)
    // console.log(filter.id)
    // console.log(item.id)
  }

  render() {
    // console.log('어레이', this.props.filters)
    // console.log(this.state.filterBtn)
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

// <i
// className={
//   this.state.filterBtn
//     ? 'fas fa-check fasBlock'
//     : 'fas fa-check fasNone'
// }
// />
// <li
// id={this.props.filter.id}
// className='filter'
// onClick={this.handleFilter}
// >
// {this.props.filter.name}
// </li>
