import React, { Component } from 'react'

class ProductDetail extends Component {
  state = {
    data: {},
  }
  //경오님이 해야하는 작업
  componentDidMount() {
    fetch(`http://10.168.1.149:8000/product/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.PRODUCTS }))
  }

  render() {
    return (
      <div>
        <div>{this.state.data.name}</div>
        <h1>디테일 페이지!</h1>
      </div>
    )
  }
}

export default ProductDetail
