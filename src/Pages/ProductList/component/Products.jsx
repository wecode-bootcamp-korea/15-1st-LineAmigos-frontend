import React, { Component } from 'react'
import Product from '../component/Product'
import '../component/products.scss'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      pageBtn: '',
    }
  }

  render() {
    const selectedArr = this.props.pageArr.map((el) => {
      return el.selected
    })
    return (
      <>
        <ul>
          {this.props.productArr.length > 0 &&
            this.props.productArr.map((product) => (
              <Product
                id={product.product_id}
                key={product.product_id}
                product={product}
                onModal={this.props.onModal}
                rate={this.props.reviewArr
                  .filter((el) => {
                    return el.product_name === product.name
                  })
                  .map((item) => item.rate)}
              />
            ))}
        </ul>

        <div className='nextPageContainer'>
          <div className={selectedArr[0] ? 'nowPageNumBox' : 'nextPageNumBox'}>
            <button
              className='nextPageNum'
              data-idx='0'
              onClick={this.props.fetchProduct}
            >
              1
            </button>
          </div>
          <div className={selectedArr[1] ? 'nowPageNumBox' : 'nextPageNumBox'}>
            <button
              className='nextPageNum'
              data-idx='1'
              onClick={this.props.fetchProduct}
            >
              2
            </button>
          </div>
          <div className={selectedArr[2] ? 'nowPageNumBox' : 'nextPageNumBox'}>
            <button
              className='nextPageNum'
              data-idx='2'
              onClick={this.props.fetchProduct}
            >
              3
            </button>
          </div>
          <div className={selectedArr[3] ? 'nowPageNumBox' : 'nextPageNumBox'}>
            <button
              className='nextPageNum'
              data-idx='3'
              onClick={this.props.fetchProduct}
            >
              4
            </button>
          </div>
          <div className={selectedArr[4] ? 'nowPageNumBox' : 'nextPageNumBox'}>
            <button
              className='nextPageNum'
              data-idx='4'
              onClick={this.props.fetchProduct}
            >
              5
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Products
