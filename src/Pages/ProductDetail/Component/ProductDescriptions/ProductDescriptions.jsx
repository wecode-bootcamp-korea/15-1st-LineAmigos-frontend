import React, { Component } from 'react';
import './ProductDescriptions.scss';

class ProductDescriptions extends Component {
    render() {

        return (
            <div id="ProductDescriptions" className="dataDes" >
                <img alt="detailImg" src={this.props.detailImg}/>
            </div>
        );
    }
}

export default ProductDescriptions;