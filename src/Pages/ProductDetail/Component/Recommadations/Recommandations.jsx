import React, { Component } from 'react';
import './Recommandations.scss'
import Product from '../Product';



class Recommandations extends Component {
    render() {
        const {dataList} = this.props;
        return (
            <div>
                <header>베스트 상품</header>
                {/* 헤더 상품 리스트에 따라 변경 가능하게 해야될듯 */}
                <div className="productList">
                    {dataList && 
                        dataList.map(el=> {
                            return(
                                <li><Product 
                                    key={el.id}
                                    imgUrl={el.imgUrl}
                                    productName={el.productName}
                                    price = {el.price}
                                /></li>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Recommandations;