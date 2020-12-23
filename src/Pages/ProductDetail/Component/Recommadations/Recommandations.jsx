import React, { Component } from 'react';
import Product from '../Product';
import './Recommandations.scss'

const LIMIT = 5;

class Recommandations extends Component {
    constructor(){
        super();
        this.state={
            recommandList: [],
            Count: 0
        }
    }

    componentDidMount(){
        fetch(`http://10.168.1.149:8000/product/best_products?limit=${LIMIT}`)
        .then(res => res.json())
        .then(res=> this.setState({recommandList: res.PRODUCTS}))

        console.log("aaa")
    }

    goToPrevorNext = (e) => {
        const offset = this.state.Count;

       
        fetch(`http://10.168.1.149:8000/product/best_products?limit=${LIMIT}&offset=${offset*LIMIT}`)
        .then(res => res.json())
        .then(res=> this.setState({recommandList: res.PRODUCTS}))

        e.target.className==="nextBtns"?
        this.setState({
            Count: this.state.Count +1
        })
        :
        this.setState({
            Count: this.state.Count -1
        })
        
    }

    render() {
        const {recommandList}= this.state;
        console.log(this.state.recommandList)
        return (
            <>
                <div className="recomTop">
                    <span>베스트 상품</span>
                    <div className="prevNextBtns">
                        <button className="prevBtns" onClick={this.goToPrevorNext}>&lt;</button>
                        <button className="nextBtns"onClick={this.goToPrevorNext}>&gt;</button>
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