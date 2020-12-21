import React, { Component } from 'react';
import './ProductDescriptions.scss';

class ProductDescriptions extends Component {
    render() {

        return (
            <div id="detailAnchor" className="dataDes" >
                <img alt="detailImg" src={this.props.detailImg}/>
                {/* {dataList && dataList.map((el)=>{
                    return (
                        <img key={el.id} alt="" src={el.imgUrl} />
                    );
                })} */}
            </div>
        );
    }
}

export default ProductDescriptions;