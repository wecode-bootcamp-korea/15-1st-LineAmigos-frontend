import React, { Component } from 'react';
import './Product.scss'

class Product extends Component {
    render() {
        const {image, name, price} = this.props;
        return (
            <div className="product">
                <div className="productImg">
                    <img alt="productImg" src={image}/>
                </div>
                <div className="nameAndPrice">
                    <span className="productName">{name}</span>
                    <span className="price">{Math.floor(price)}원</span>
                </div>
            </div>
        );
    }
}

export default Product;