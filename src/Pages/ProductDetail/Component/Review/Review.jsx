import React, { Component } from 'react';
import ReviewContent from './ReviewContent/ReviewContent';
import './Review.scss';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state={
            monthFilter: false,
            revList: [],
            clicked: {
                photo: false,
                storePick: false,
                monthReview: false},
            clickedSort: {
                date: false,
                rateH: false,
                rateL: false
            }
        }
    }

    printStars= (ratingArr)=>{
       const fullStar = <i className="fas fa-star"/>;
       const emptyStar = <i className="far fa-star"/>;
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
        
        for(let i=0; i<this.props.rateArray.length; i++){
            if(this.props.rateArray[i] === rate){
                rateCount ++;
            }
        }
        return rateCount
    }

    printThermo= ()=>{
        const fullThermo = <i className="fas fa-thermometer-full"/>;
        const halfThermo = <i className="fas fa-thermometer-half"/>;
        const emptyThermo = <i className="fas fa-thermometer-empty"/>;
        let rateArr = [];

        for(let i=5; i>0; i--){
            rateArr.push(this.countRate(i))
        }

        let maxIdx = rateArr.indexOf(Math.max(...rateArr));
        let minIdx = rateArr.indexOf(Math.min(...rateArr));

        for(let i=0; i<rateArr.length; i++){
            rateArr[i] = <li><span className="thermoGraph">{halfThermo}</span><span className="points">{5-i}점</span></li>
        }
        rateArr[maxIdx] = <li><span className="thermoGraph">{fullThermo}</span><span className="points">{5-maxIdx}점</span></li>
        rateArr[minIdx] = <li><span className="thermoGraph">{emptyThermo}</span><span className="points">{5-minIdx}점</span></li>

        return rateArr
    }

    Filter = (e) =>{
        if(e.target.className === "monthReview"){
        this.setState({
            revList: this.props.reviewList.filter(el=> el.monthly_reviewed === true),
            clicked: {
                photo: false,
                storePick: false,
                monthReview: true},
        });
    }
    if(e.target.className === "storePick"){
        this.setState({
            revList: this.props.reviewList.filter(el=> el.rate === 5),
            clicked: {
                photo: false,
                storePick: true,
                monthReview: false},
        });
    }
    if(e.target.className === "photoandVideo"){
        this.setState({
            revList: this.props.reviewList.filter(el=> el.reviewed_image !== ""),
            clicked: {
                photo: true,
                storePick: false,
                monthReview: false},
        });
    }
    if(e.target.className === "wholeReviewList"){
        this.setState({
            clicked: {
                photo: false,
                storePick: false,
                monthReview: false},
        });
    }
}

sortBy = (e) => {

    if(e.target.className === "dateOrder"){
        this.setState({
            revList: this.props.reviewList.sort((a, b)=> new Date(b.created_time).getTime() - new Date(a.rcreated_time).getTime()),
        })
    }

    if(e.target.className === "rateOrder"){
        this.setState({
            revList: this.props.reviewList.sort((a,b) => b.rate - a.rate),
        })
    }

    if(e.target.className === "rateOrderDowntoUp"){
        this.setState({
            revList: this.props.reviewList.sort((a,b) => a.rate - b.rate),
        })
    }

}

    render() {
        const {reviewList, rateArray} = this.props;
        const {revList, clicked, clickedSort} = this.state;
        return (
            <>
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
                        <span className="stars">{rateArray.length>0 &&
                            this.printStars(rateArray)
                        }
                        </span>
                        <span className="ratingPoint">{rateArray.length>0 &&
                            (rateArray.reduce((acc, curr) => (acc+curr))/rateArray.length).toFixed(1)} /5</span>
                    </div>
                    <div className="totalReviews">
                        <span className="ratingType">전체 리뷰수</span>
                        <i className="far fa-comment-dots"/>
                        <span className="count">{rateArray.length}</span>
                    </div>
                    <div className="graphRatings">
                        <span className="ratingType">평점 비율</span>
                        <ul>
                            {rateArray.length>0&&this.printThermo()}
                        </ul>
                    </div>
                </div>
                <div className="reviewContents">
                    <div className="reviewContentsTop">
                        <span>리뷰 {reviewList.length}건</span>
                        <div className="reviewFilter">
                            <span>랭킹순</span>
                            <span className={clickedSort.date? "sortClicked":"dateOrder"} onClick={this.sortBy}>최신순</span>
                            <span className={clickedSort.date? "sortClicked":"rateOrder"} onClick={this.sortBy}>평점 높은순</span>
                            <span className={clickedSort.date? "sortClicked":"rateOrderDowntoUp"} onClick={this.sortBy}>평점 낮은순</span>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <ul className="reviewCategory">
                            <li className="wholeReviewList" onClick={this.Filter}>전체 보기</li>
                            <li className={clicked.photo? "clickedList" :"photoandVideo"} onClick={this.Filter}>포토/동영상</li>
                            <li className={clicked.storePick? "clickedList" : "storePick"} onClick={this.Filter}>스토어Pick</li>
                            <li className={clicked.monthReview? "clickedList":"monthReview"} onClick={this.Filter}>한달 사용 리뷰</li>
                        </ul>
                        <div className="reviewList">
                                {clicked.monthReview || clicked.photo || clicked.storePick?
                                    revList.map((el,idx) => {
                                        return(
                                                <ReviewContent 
                                                key={idx}
                                                id={el.user}
                                                date={el.created_time}
                                                size={"단품"}
                                                content={el.reviewed_body}
                                                image={el.reviewed_image}
                                                rate ={el.rate}
                                                />
                                        )
                                    })
                                    :
                                    reviewList.map((el,idx) => {
                                        return(
                                                <ReviewContent 
                                                key={idx}
                                                id={el.user}
                                                date={el.created_time}
                                                size={"단품"}
                                                content={el.reviewed_body}
                                                image={el.reviewed_image}
                                                rate ={el.rate}
                                                />
                                        )
                                    })
                                }
                            <div className={reviewList.length > 0 ? 'noReview' : ""}>
                                <i className="far fa-comment-dots"/>
                                <span>조건에 맞는 리뷰가 없습니다.</span>
                            </div>
                        </div>         
                    </div>
                </div>
           </>
        );
    }
}

export default Review;