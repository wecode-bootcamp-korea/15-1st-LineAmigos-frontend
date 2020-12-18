import React, { Component } from 'react';
import './Review.scss';


const fullStar = <i className="fas fa-star"/>;
const emptyStar = <i className="far fa-star"/>;

const fullThermo = <i className="fas fa-thermometer-full"/>;
const halfThermo = <i className="fas fa-thermometer-half"/>;
const emptyThermo = <i className="fas fa-thermometer-empty"/>;

class Review extends Component {

    printStars= (ratingArr)=>{
       const ave = Math.floor((ratingArr.reduce((acc, curr)=> acc+curr))/ratingArr.length);
       const starArr = [];

       for(let i=0; i<ave; i++){
           starArr.push(fullStar)
       }
       for(let i=0; i<5-ave; i++){
           starArr.push(emptyStar)
       }

       return starArr
    }

    countRate= (rate) => {
        let rateCount = 0;
        
        for(let i=0; i<this.props.reviewRate.length; i++){
            if(this.props.reviewRate[i] === rate){
                rateCount ++;
            }
        }

        return rateCount
    }

    printThermo= ()=>{
        let rateArr = [];
        
        for(let i=5; i>0; i--){
            rateArr.push(this.countRate(i))
        }

        let maxIdx = rateArr.indexOf(Math.max(...rateArr));
        let minIdx = rateArr.indexOf(Math.min(...rateArr));

        for(let i=0; i<rateArr.length; i++){
            if(i === maxIdx){
                rateArr[i] = <li><span className="thermoGraph">{fullThermo}</span><span className="points">{5-i}점</span></li>
            }
            else if(i===minIdx){
                rateArr[i] = <li><span className="thermoGraph">{emptyThermo}</span><span className="points">{5-i}점</span></li>
            }
            else{
                rateArr[i] = <li><span className="thermoGraph">{halfThermo}</span><span className="points">{5-i}점</span></li>
            }
        }

        return rateArr
    }

    render() {
        const {reviewRate} = this.props;
        return (
            <div>
                <div className="reviewEventContainer">
                    <div className="reviewheader">
                    <header>상품리뷰</header>
                        <div>
                            <span>상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성시 아래 금액만큼 포인트가 적립됩니다.</span>
                            <div>
                                <span>텍스트리뷰 : </span><span className="reviewMoney">50원</span>
                                <span>포토/동영상 리뷰 : </span><span className="reviewMoney">150원</span>
                                <span>한달사용 텍스트 리뷰 : </span><span className="reviewMoney">150원</span>
                            </div>
                        </div>
                    </div>
                    <div className="reviewPointBox">
                        <div className="reviewEvent">
                            <span>Review Event</span>
                        </div>
                        <div className="reviewEventText">
                            <span>"생생한 리뷰를 이미지 3장과 100자 이상 남겨주세요.</span>
                            <span className="bestBlueText"> 베스트 리뷰로 선정되면, 2,000포인트를 드립니다.</span>
                            <span>"</span>
                        </div>             
                    </div>
                    <div className="eventDuedate">
                        <span>응모기간 : 2020.12.01 ~ 2020.12.31. | 발표일 : 2021.01.10</span>
                    </div>
                </div>
                <div className="reviewRatings">
                    <div className="starRatings">
                        <span className="ratingType">사용자 총 평점</span>
                        <span className="stars">{reviewRate.length>0 &&
                            this.printStars(reviewRate)
                        }
                        </span>
                        <span className="ratingPoint">{reviewRate.length>0 &&
                            Math.floor((reviewRate.reduce((acc, curr)=> acc+curr))/reviewRate.length)}.0/5</span>
                    </div>
                    <div className="totalReviews">
                        <span className="ratingType">전체 리뷰수</span>
                        <i className="far fa-comment-dots"/>
                        <span className="count">{reviewRate.length}</span>
                    </div>
                    <div className="graphRatings">
                        <span className="ratingType">평점 비율</span>
                        <ul>
                            {reviewRate.length>0&&this.printThermo()}
                        </ul>
                    </div>
                </div>
                <div className="reviewContents">
                    <div className="reviewContentsTop">
                        <span>리뷰 {reviewRate.length}건</span>
                        <div className="reviewFilter">
                            <span>랭킹순</span>
                            <span>최신순</span>
                            <span>평점 높은순</span>
                            <span>평점 낮은순</span>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <ul className="reviewCategory">
                            <li>전체보기</li>
                            <li>포토/동영상</li>
                            <li>스토어PICK</li>
                            <li>한달사용리뷰</li>
                        </ul>
                        <ul className="reviewSmallCategory">
                            <li>주제전체</li>
                            <li>성능</li>
                        </ul>
                        <div className="reviewList">
                            <i className="far fa-comment-dots"/>
                            <span>조건에 맞는 리뷰가 없습니다.</span>
                        </div>         
                    </div>
                </div>
           </div>
        );
    }
}

export default Review;