import React, { Component } from 'react'
import Product from '../ProductList/component/Product'

class ProductDetail extends Component {
  state = {
    data: {},
  }
  //경오님이 해야하는 작업
  componentDidMount() {
    fetch('http://10.168.1.149:8000/product/${this.props.match.params.id}')
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.PRODUCTS }))
    // .then((res) => console.log('res', res.productListData))
  }

  render() {
    // console.log(this.props.match.params.id)
    console.log('디테일', this.state.data)
    // console.log('디테일 아이디', this.state.data[0].src)

    return (
      <div>
        <div>{this.state.data.name}</div>
        <h1>디테일 페이지!</h1>
      </div>
    )
  }
}

export default ProductDetail
