import React, { Component } from 'react'
import Product from '../component/Product'
import '../component/products.scss'

class Products extends Component {
  render() {
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
        {/* <ul>
          {this.props.reviewArr.map((review) => (
            <Product 
            review={review}
            this.props.reviewArr
             />
          ))}
        </ul> */}
        <div className='nextPageContainer'>
          <div
            className={
              this.props.onPageNum ? 'nextPageNumBox' : 'nowPageNumBox'
            }
          >
            <button
              className='nextPageNum'
              data-idx='0'
              onClick={(this.props.fetchProduct, this.props.onPageNum)}
            >
              1
            </button>
          </div>
          <div
            className={
              this.props.onPageNum ? 'nextPageNumBox' : 'nowPageNumBox'
            }
          >
            <button
              className='nextPageNum'
              data-idx='1'
              onClick={this.props.fetchProduct}
            >
              2
            </button>
          </div>
          <div
            className={
              this.props.onPageNum ? 'nextPageNumBox' : 'nowPageNumBox'
            }
          >
            <button
              className='nextPageNum'
              data-idx='2'
              onClick={this.props.fetchProduct}
            >
              3
            </button>
          </div>
          <div
            className={
              this.props.onPageNum ? 'nextPageNumBox' : 'nowPageNumBox'
            }
          >
            <button
              className='nextPageNum'
              data-idx='3'
              onClick={this.props.fetchProduct}
            >
              4
            </button>
          </div>
          <div
            className={
              this.props.onPageNum ? 'nextPageNumBox' : 'nowPageNumBox'
            }
          >
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
