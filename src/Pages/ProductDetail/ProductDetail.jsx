import React from 'react';
import ImgPurchInfo from './Component/ImgPurchInfo';
import ProductDescriptions from './Component/ProductDescriptions/ProductDescriptions';
import Review from './Component/Review/Review'
import Recommandations from './Component/Recommadations/Recommandations'
import './ProductDetail.scss';

const API = 'http://localhost:3000/data/data.json';

class ProductDetail extends React.Component{

    constructor(){
        super();
        this.state={
            reviews: "",
            id: "",
            productImgUrl: "",
            price: 0,
            dataList:[],
        };
    }
    
    componentDidMount() {
        fetch(API, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                dataList: res.data,
            })
        })
    }
   
    render(){
        return(
           <div id="DetailPageContainer">
               <div className="topContainer">
                    <div className="topContents">
                        <i className="fab fa-js-square"></i>
                        <i className="fas fa-coffee"></i>
                        <i className="far fa-bookmark"></i>
                        <i className="fas fa-share-square"></i>
                    </div>
                    <div className="smallCategory">
                        <span>home - char - BT21 | 다른 상품 보기</span>
                        {/* 나중에 링크로 정리 */}
                    </div>
               </div>
                <ImgPurchInfo />
                <Recommandations dataList={this.state.dataList}/>

                <nav className="categoryTap">
                    <span className="detailsTap">상세정보</span>
                    <span>리뷰 0</span> 
                    {/* 리뷰옆에 숫자는 리뷰 개수 */}
                    <span>Q&A</span>
                </nav>

                <ProductDescriptions dataList={this.state.dataList}/>
                <Review reviewRate={this.state.dataList.map(el=>{return(el.reviewRate)})}/>
            </div>
        );
    }
}
export default ProductDetail;