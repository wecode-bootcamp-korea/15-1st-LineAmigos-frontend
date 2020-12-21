import React, { Component } from 'react';
import './ReviewContent.scss';

class ReviewContent extends Component {
    constructor(){
        super();
        this.state={
            reviewClicked: false,
        }
    }

    reviewChange = () => {
        this.setState({
            reviewClicked: !this.state.revieWClicked
        })
    }

    printStars=(rate)=>{
        let rateArr = [];
        const fullStar = <i className="fas fa-star"/>;
        const emptyStar = <i className="far fa-star"/>;
        for(let i=0; i<rate; i++){rateArr.push(fullStar)};
        for(let i=0; i<5-rate; i++){rateArr.push(emptyStar)};

        return rateArr
    }

    render() {
        const {id, date, size, content, image, monthlyReview, rate} = this.props;
        return (
            <div className="reviewContentsContainer">
                <div className="reviewLeft">
                    <div className="stars">
                        {this.printStars(rate)}
                        <span>{rate}</span>
                    </div>
                    <div className={this.state.reviewClicked? "userInfoClicked":"userInfo"} onClick={this.reviewChange}>
                        <span className="userId">{id} |</span>
                        <span>{date} |</span>
                        <span>{size} | 신고</span>
                        <p>{content}</p>
                    </div>
                </div>
                <div className="reviewRight">
                    <img key={id} alt="reviewImg" src={image} />
                    <button><i className="far fa-thumbs-up"/></button>
                </div>
            </div>
        );
    }
}

export default ReviewContent;