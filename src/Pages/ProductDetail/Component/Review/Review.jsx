import React, { Component } from 'react';
import './Review.scss';


const fullStar = <i className="fas fa-star"/>;
// const emptyStar = <i className="far fa-star"/>;
// const halfStar = <i className="fas fa-star-half-alt"/>;

const fullThermo = <i class="fas fa-thermometer-full"/>;

class Review extends Component {
    render() {
        const {dataList} = this.props;
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
                        <span className="stars">{fullStar}{fullStar}{fullStar}{fullStar}{fullStar}</span>
                        <span className="ratingPoint">5.0/5</span>
                    </div>
                    <div className="totalReviews">
                        <span className="ratingType">전체 리뷰수</span>
                        <i class="far fa-comment-dots"/>
                        <span className="count">{dataList.length}</span>
                    </div>
                    <div className="graphRatings">
                        <span className="ratingType">평점 비율</span>
                        <ul>
                            <li>
                                <span className="thermoGraph">{fullThermo}</span>
                                <span className="points">5점</span>
                            </li>
                            <li>
                                <span className="thermoGraph">{fullThermo}</span>
                                <span className="points">4점</span>
                            </li>
                            <li>
                                <span className="thermoGraph">{fullThermo}</span>
                                <span className="points">3점</span>
                            </li>
                            <li>
                                <span className="thermoGraph">{fullThermo}</span>
                                <span className="points">2점</span>
                            </li>
                            <li>
                                <span className="thermoGraph">{fullThermo}</span>
                                <span className="points">1점</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="reviewContents">
                    <div className="reviewContentsTop">
                        <span>리뷰 {dataList.length}건</span>
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
                            <i class="far fa-comment-dots"/>
                            <span>조건에 맞는 리뷰가 없습니다.</span>
                        </div>         
                    </div>
                </div>
           </div>
        );
    }
}

export default Review;