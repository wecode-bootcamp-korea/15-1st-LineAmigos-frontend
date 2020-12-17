import React, { Component } from 'react'
import '../component/Product.scss'

class Product extends Component {
  handleNextPage = () => {}

  render() {
    return (
      <div className='container'>
        <ul className='productListContainer'>
          {this.props.productArr.map((product) => {
            return (
              <li className='productList'>
                <img alt='product' className='productImg' src={product.src} />
                <div className='productNameContainer'>
                  <span className='productName'>{product.name}</span>
                  <i className='far fa-heart'></i>
                </div>
                <span className='productPrice'>{product.price}원</span>
              </li>
            )
          })}
        </ul>
        <div className='nextPageContainer'>
          <div className='nextPageBox'>
            <span className='nextPageNum' onClick={this.handleNextPage}>
              1
            </span>
          </div>
          <div className='nextPageBox'>
            <span className='nextPageNum'>2</span>
          </div>
          <div className='nextPageBox'>
            <span className='nextPageNum'>3</span>
          </div>
          <div className='nextPageBox'>
            <span className='nextPageNum'>4</span>
          </div>
          <div className='nextPageBox'>
            <span className='nextPageNum'>5</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
