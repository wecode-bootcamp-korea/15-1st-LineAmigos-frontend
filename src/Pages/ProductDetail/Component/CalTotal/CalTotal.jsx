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
        else{
            this.setState({
                count: 1,
            })
        }
    }

    Minus = () => {
        if(this.state.count>1){
        this.setState({
            count: this.state.count-1,
        })}
        else{
            this.setState({
                count: 1,
            })
        }
        console.log(this.state.count)
    }

    Plus  = () => {
        if(this.state.count>0){
            this.setState({
                count: this.state.count+1,
            })}
            else{
                this.setState({
                    count: 1,
                })
            }
        console.log(this.state.count)
    }

    render() {

        const {price} = this.props;
        console.log('a', typeof(this.state.count))
        console.log('b', typeof(this.props.price))
        

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