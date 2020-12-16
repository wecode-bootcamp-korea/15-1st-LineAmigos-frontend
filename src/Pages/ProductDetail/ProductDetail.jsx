import React from 'react';
import './ProductDetail.scss'
import ImgPurchInfo from './Component/ImgPurchInfo';

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
                dataList: res,
            })
            console.log('this is what i got', this.state.dataList);
        })
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
                {/* 나중에 이름 수정 */}
            </div>
        );
    }
}
export default ProductDetail;