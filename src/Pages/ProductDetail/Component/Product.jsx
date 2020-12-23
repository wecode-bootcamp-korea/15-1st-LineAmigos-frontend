import React, { Component } from 'react';
import './Product.scss'

class Product extends Component {
    render() {
        const {imgUrl, productName, price} = this.props;
        return (
            <div className="product">
                <div className="productImg">
                    <img alt="" src={imgUrl}/>
                </div>
                <div className="nameAndPrice">
                    <span className="productName">{productName}</span>
                    <span className="price">{Math.floor(price)}원</span>
                </div>
            </div>
        );
    }
}

export default Product;