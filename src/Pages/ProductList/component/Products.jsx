import React, { Component } from 'react'
import Product from '../component/Product'
import '../component/products.scss'

const PAGENUM = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
class Products extends Component {
  handlePagenation = () => {
    this.onPageNum(this.props.onPageNum)
  }

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
          {PAGENUM.map((num) => (
            <div
              className={this.props.nextPageBox ? 'nextPageNow' : 'nextPageBox'}
            >
              <span className='nextPageNum' onClick={this.handlePagenation}>
                {num.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Products
