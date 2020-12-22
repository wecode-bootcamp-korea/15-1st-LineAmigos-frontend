import React, { Component } from 'react'
import Product from '../component/Product'
import '../component/products.scss'

class Products extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     nextPageBox: false,
  //   }
  // }
  // handlePagenation = () => {
  //   this.setState({
  //     nextPageBox: !this.state.nextPageBox,
  //   })
  // }
  render() {
    return (
      <div>
        <ul>
          {this.props.productArr.map((product) => (
            <Product
              id={product.id}
              product={product}
              onModal={this.props.onModal}
            />
          ))}
        </ul>
        <div className='nextPageContainer'>
          <div className='nextPagenNumBox'>
            <button
              className='nextPageNum'
              data-idx='0'
              onClick={this.props.fetchProduct}
            >
              1
            </button>
            <button
              className='nextPageNum'
              data-idx='1'
              onClick={this.props.fetchProduct}
            >
              2
            </button>
            <button
              className='nextPageNum'
              data-idx='2'
              onClick={this.props.fetchProduct}
            >
              3
            </button>
            <button
              className='nextPageNum'
              data-idx='3'
              onClick={this.props.fetchProduct}
            >
              4
            </button>
            <button
              className='nextPageNum'
              data-idx='4'
              onClick={this.props.fetchProduct}
            >
              5
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
