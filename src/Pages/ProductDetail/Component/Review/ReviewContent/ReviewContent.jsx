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
            reviewClicked: !this.state.reviewClicked
        })
    }

    printStars=(rate)=>{
        let rateArr = [];
        const fullStar = <i className="fas fa-star"/>;
        const emptyStar = <i className="far fa-star"/>;
        for(let i=0; i<Math.floor(rate); i++){rateArr.push(fullStar)};
        for(let i=0; i<(5-Math.floor(rate)); i++){rateArr.push(emptyStar)};

        return rateArr
    }

    render() {
        const {reviewClicked} = this.state;
        const {id, date, size, content, image, rate} = this.props;
        return (
            <div className="reviewContentsContainer">
                <div className="reviewLeft">
                    <div>
                        <div className="stars">
                            {this.printStars(rate)}
                            <span>{rate.toFixed(1)}</span>
                        </div>
                        <div className="userInfo" onClick={this.reviewChange}>
                            <span className="userId">{id} |</span>
                            <span>{date} |</span>
                            <span>{size} | 신고</span>
                            <p>{content}</p>
                        </div>
                    </div>
                    <div>
                        <img className={reviewClicked? "" : "reviewContentImage"} key={id} alt="reviewImg" src={image} onClick={this.reviewChange}/>
                    </div>
                </div>
                <div className="reviewRight">
                    <button><i className="far fa-thumbs-up"/></button>
                </div>
            </div>
        );
    }
}

export default ReviewContent;