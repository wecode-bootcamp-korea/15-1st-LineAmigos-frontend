import React, { Component } from 'react';
import Product from '../Product';
import './Recommandations.scss'

const LIMIT = 5;

class Recommandations extends Component {
    constructor(){
        super();
        this.state={
            recommandList: []
        }
    }

    componentDidMount(){
        fetch(`http://10.168.1.149:8000/product/best_products?limit=${LIMIT}`)
        .then(res => res.json())
        .then(res=> this.setState({recommandList: res.PRODUCTS}))

        console.log("aaa")
    }

    goToPrevorNext = (e) => {
        const offset = e.target.id

        fetch(`http://10.168.1.149:8000/product/best_products?limit=${LIMIT}&offset=${offset*LIMIT}`)
        .then(res => res.json())
        .then(res=> this.setState({recommandList: res.PRODUCTS}))
    }

    render() {
        const {recommandList}= this.state;
        console.log(this.state.recommandList)
        return (
            <>
                <div className="recomTop">
                    <span>베스트 상품</span>
                    <div className="prevNextBtns">
                        <button id="0" onClick={this.goToPrevorNext}>&lt;</button>
                        <button id="1" onClick={this.goToPrevorNext}>&gt;</button>
                    </div>
                </div>
                <ul className="productList">
                   {recommandList&&
                   recommandList.map((el,idx)=>{
                       return(
                           <li>
                           <Product 
                                key={idx}
                                name ={el.name}
                                price ={el.price}
                                image ={el.product_image}
                           />
                           </li>
                       )
                   })}
                </ul>
            </>
        );
    }
}

export default Recommandations;