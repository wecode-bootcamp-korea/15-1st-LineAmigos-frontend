import React from 'react';
import './ProductDetail.scss'
import ImgPurchInfo from './Component/ImgPurchInfo';
import PhotoReviewList from './Component/PhotoReviewList';

class ProductDetail extends React.Component{

    constructor(){
        super();
        this.state={
            reviews: "",
        };
    }

   
    render(){
        return(
           <div id="DetailPageContainer">
               <div className="topContainer">
                    <div className="topContents">
                        <i class="fab fa-js-square"></i>
                        <i class="fas fa-coffee"></i>
                        <i class="far fa-bookmark"></i>
                        <i class="fas fa-share-square"></i>
                    </div>

                    <div className="smallCategory">
                        <span>home - char - BT21 | 다른 상품 보기</span>
                        {/* 나중에 맵이랑 링크로 정리 */}
                    </div>
               </div>
                <ImgPurchInfo />
                <PhotoReviewList />
            </div>
        );
    }
}
export default ProductDetail;