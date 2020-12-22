import React, { Component } from 'react';
import ImgSlide from './ImgSlide/ImgSlide';
// import {plus, minus} from './function.js';
import './ImgPurchInfo.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ImgPurchInfo extends Component {
    constructor(){
        super();
        this.state={
            count: 1,
            sizeBtn: true,
            showCalComp: false,
        }
    }

    showComp = () =>{
        if(this.state.showCalComp === true){
            alert ("이미 선택한 옵션입니다.")
        }

        this.setState({
            showCalComp: true,
            sizeBtn: !this.state.sizeBtn
        });
    }

    hideComp = () => {
        this.setState({
            showCalComp: false,
            count: 1
        })
    }

    handleClick = () =>{
        this.setState({
            sizeBtn: !this.state.sizeBtn,
        })
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

    minus = () => {
        if(this.state.count>1){
        this.setState({
            count: this.state.count-1,
        })}
        else{
            this.setState({
                count: 1,
            })
        }
    }

    plus  = () => {
        if(this.state.count>0){
            this.setState({
                count: this.state.count+1,
            })}
            else{
                this.setState({
                    count: 1,
                })
            }
    }

    numbersWithComma = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }

    render() {
        const {sizeBtn, count} = this.state;
        const {reviewArray, price}=this.props;
        return (
            <div className="ImgPurchInfo">
                <div className="imgEx">
                    <ImgSlide imgUrl={this.props.imgUrl} id={this.props.id}/>
                    <div className="smallReviewRatings">
                        <div>
                            <span>리뷰수</span>
                            <span className="smallCount">{reviewArray&&reviewArray.length}</span>
                        </div>
                        <div>
                            <span className="smallCount"> {reviewArray.length>0&&(reviewArray.reduce((acc, curr)=>acc+curr)/reviewArray.length).toFixed(1)} /5</span>
                        </div>
                    </div>        
                </div>
                <div className="purchInfo">
                    <div className="nameAndPrice">
                        <span className="productName">{this.props.productName}</span>
                        <div className="priceContainer">
                            <span className="priceNumber">{this.numbersWithComma(Math.floor(price))}</span>
                            <span className="priceWon">원</span>
                        </div>
                    </div>
                    <div className="customerBenefits">
                        <div className="benefitPointsContainer">
                            <span className="benefits">라인프렌즈 고객을 위한 혜택</span>
                            <div className="points">
                                <span>최대 적립 포인트</span>
                                <span>{Math.floor(price*0.017)}원</span>
                            </div>
                            <div className="basicFund">
                                <ul>
                                    <li>기본적립</li>
                                    <li>{price*0.01}원</li>
                                </ul>
                            </div>
                            <div className="extraPointsContainer">
                                <div className="extraPointsTop">
                                    <div className="extraTop">
                                        <span className="tip">Tip.</span>
                                        <span>포인트 더 받는 방법</span>
                                    </div>
                                    <span>+최대 {Math.floor(price*0.12)}원</span>
                                </div>                               
                                <ul className="extraPointsList">
                                        <li>
                                            <span><u>멤버십 데이 추가 8% 적립!</u>&gt;</span>
                                            <span>{price*0.08}원</span>
                                        </li>
                                        <li>
                                            <span><u>충전포인트로 결제 시</u>&gt;</span>
                                            <span>{price*0.02}원</span>
                                        </li>
                                        <li>
                                            <span><u>MY단골스토어에서 결제 시</u>&gt;</span>
                                            <span>{price*0.02}원</span>
                                        </li>
                                </ul>
                            </div>
                        </div>                     
                    </div>
                    <div className="sizeButton">
                        <button className="size" onClick={this.handleClick}>사이즈
                            <i className="fas fa-angle-down"></i>
                        </button> 
                        <button className={sizeBtn ? "singleItemHide":"singleItemShow"} onClick={this.showComp}>단품</button>            
                    </div>
                        {this.state.showCalComp&&
                            <div className="CalTotal">
                                <span>단품</span>
                                <div className="btnPriceContainter">
                                    <div className="quantBtns">
                                        <button className="minusplus" onClick={this.minus}>-</button>
                                        <input type="number" value={this.state.count} onChange={this.countChange}/>
                                        <button className="minusplus"onClick={this.plus}>+</button>
                                    </div>
                                    <div className="calTotPrice">
                                        <span>{this.numbersWithComma(this.state.count*price)}원</span>
                                        <button onClick={this.hideComp}>X</button>
                                    </div>
                                </div>
                            </div>
                        }
                    <div className="PurchCartButtons">
                        <div className="totalQP">
                            <span className="totPriceSpan">
                                총 상품 금액 
                                <i className="fas fa-question"></i>
                            </span>
                            <span className="totQuantity">
                                총 수량 {count}개 |
                                <span className="totPrice"> {this.numbersWithComma(price * count)}원</span>
                            </span>
                        </div>
                        <div className="PCBtns">
                            <button className="purchBtn" >
                                <i className="fab fa-node-js"/>
                                구매하기
                            </button>
                            <div className="cartLike">
                                <button>
                                    장바구니
                                </button>
                                <button>
                                    찜하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="shopWarning">
                        <div className="warning">
                            <i className="fas fa-info-circle"></i>
                            <span>쇼핑할 때 필독</span>
                        </div>
                        <span>안전거래TIP &gt;</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImgPurchInfo;