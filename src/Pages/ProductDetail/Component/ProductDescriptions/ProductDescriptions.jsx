import React, { Component } from 'react';
import './ProductDescriptions.scss';

class ProductDescriptions extends Component {
    render() {
        const {dataList} = this.props;

        return (
            <div id="detailAnchor" className="dataDes" >
                {dataList && dataList.map((el)=>{
                    return (
                        <img key={el.id} alt="" src={el.imgUrl} />
                    );
                })}
            </div>
        );
    }
}

export default ProductDescriptions;