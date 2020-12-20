import React, { Component } from 'react'
import Product from '../component/Product'
import '../component/products.scss'
class Products extends Component {
  render() {
    console.log(this.props.proudctArr)
    return (
      <div>
        <ul>
          {this.props.productArr.map((product) => (
            <Product
              id={product.id}
              product={product}
              // onWishBtn={this.props.onWishBtn}
              // wishBtn={this.props.wishBtn}
            />
          ))}
        </ul>
        <div className='nextPageContainer'>
          <div className='nextPageBox'>
            <span className='nextPageNum'>1</span>
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

export default Products
