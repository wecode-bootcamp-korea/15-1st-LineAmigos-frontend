import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'

class Pagination extends Component {
  render() {
    return (
      <div className='nextPageContainer'>
        <div className='nextPageBox'>
          <span className='nextPageNum'>1</span>
        </div>
      </div>
    )
  }
}

export default Pagination
