import React, { Component } from 'react';
import './CalTotal.scss'

class CalTotal extends Component {
    constructor(){
        super();
        this.state = {
            count: 1,
        }
    }

    countChange = (e) =>{
        if(e.target.value>1){
        this.setState({
            count: e.target.value,
        })}
    }

    Minus = () => {
        if(this.state.count>1){
        this.setState({
            count: this.state.count-1,
        })}
    }

    Plus  = () => {
        if(this.state.count>0){
            this.setState({
                count: this.state.count+1,
            })}
    }

    render() {
        const {price} = this.props;

        return (
            <div className="CalTotal">
                <span>단품</span>
                <div className="btnPriceContainter">
                    <div className="quantBtns">
                        <button className="minusplus" onClick={this.Minus}>-</button>
                        <input type="number" value={this.state.count} onChange={this.countChange}/>
                        <button className="minusplus"onClick={this.Plus}>+</button>
                    </div>
                    <div className="calTotPrice">
                        <span>{this.state.count*price}원</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalTotal;