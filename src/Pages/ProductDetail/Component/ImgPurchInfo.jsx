import React, { Component } from 'react';
import './ImgPurchInfo.scss';

class ImgPurchInfo extends Component {
    constructor(){
        super();
        this.state={
            price: 22000,
            quantity: 0,
            sizeBtn: true,
        }
    }

    handleClick = () =>{
        this.setState({
            sizeBtn: !this.state.sizeBtn,
        })
    }

    doNothing = () => {
        return;
    }

    render() {
        const {sizeBtn, price, quantity} = this.state

        return (
            <div className="ImgPurchInfo">
                <div className="imgEx">
                    <div className="bigImgContainer">
                        <img className="bigImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdBUkL6CL9geDn8RcmxCtrjLzSIfL3seMFA&usqp=CAU"/>
                    </div>
                    <div className="smallImgContainer">
                        <img className="smallImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdBUkL6CL9geDn8RcmxCtrjLzSIfL3seMFA&usqp=CAU"/>
                        <img className="smallImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdBUkL6CL9geDn8RcmxCtrjLzSIfL3seMFA&usqp=CAU"/>
                        <img className="smallImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdBUkL6CL9geDn8RcmxCtrjLzSIfL3seMFA&usqp=CAU"/>
                        <img className="smallImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdBUkL6CL9geDn8RcmxCtrjLzSIfL3seMFA&usqp=CAU"/>
                        <img className="smallImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdBUkL6CL9geDn8RcmxCtrjLzSIfL3seMFA&usqp=CAU"/>
                    </div>           
                </div>
                <div className="purchInfo">
                    <div className="nameAndPrice">
                        <span className="productName">라인프렌즈 BT21 MANG BABY 부클 버블티 백참</span>
                        <div className="priceContainer">
                            <span className="priceNumber">22,000</span>
                            <span className="priceWon">원</span>
                        </div>
                    </div>
                    <div className="customerBenefits">
                        <div className="benefitPointsContainer">
                            <span className="benefits">라인프렌즈 고객을 위한 혜택</span>
                            <div className="points">
                                <span>최대 적립 포인트</span>
                                <span>{Math.floor(this.state.price*0.017)}원</span>
                            </div>
                            <div className="basicFund">
                                <ul>
                                    <li>ㄴ 기본적립</li>
                                    <li>{this.state.price*0.01}원</li>
                                </ul>
                            </div>
                            <div className="extraPointsContainer">
                                <div className="extraPointsTop">
                                    <div className="extraTop">
                                        <span className="tip">Tip.</span>
                                        <span>포인트 더 받는 방법</span>
                                    </div>
                                    <span>+최대 {this.state.price*0.12}원</span>
                                </div>                               
                                <ul className="extraPointsList">
                                        <li>
                                            <span><u>멤버십 데이 추가 8% 적립!</u>&gt;</span>
                                            <span>{this.state.price*0.08}원</span>
                                        </li>
                                        <li>
                                            <span><u>충전포인트로 결제 시</u>&gt;</span>
                                            <span>{this.state.price*0.02}원</span>
                                        </li>
                                        <li>
                                            <span><u>MY단골스토어에서 결제 시</u>&gt;</span>
                                            <span>{this.state.price*0.02}원</span>
                                        </li>
                                </ul>
                            </div>
                        </div>                     
                    </div>
                    <div className="sizeButton">
                        <button className="size" onClick={this.handleClick}>사이즈
                            <i className="fas fa-angle-down"></i>
                        </button>
                        <button className={sizeBtn ? "singleItemHide":"singleItemShow"}>단품</button>
                        {/* 단품 클릭 시 가격정보 띄우는거 생각해보기 */}
                    </div>
                    <div className="PurchCartButtons">
                        <div className="totalQP">
                            <span className="totPriceSpan">
                                총 상품 금액 
                                <i class="fas fa-question"></i>
                            </span>
                            <span className="totQuantity">
                                총 수량 {quantity}개 |
                                <span className="totPrice"> {price * quantity}원</span>
                            </span>
                        </div>
                        <div className="PCBtns">
                            <button className="purchBtn">
                                <i class="fab fa-node-js"></i>
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
                            <i class="fas fa-info-circle"></i>
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