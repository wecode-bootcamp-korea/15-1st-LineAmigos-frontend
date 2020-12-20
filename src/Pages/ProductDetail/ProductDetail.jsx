import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';
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
            detailSelected: true,
            reviewSelected: false,
            qaSelected: false,
            targetReached: false,
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
        });

        window.addEventListener('scroll', this.onScroll)
    }


    componentWillUnmount() { window.removeEventListener('scroll', this.onScroll); }

    scrollToTop(){
        scroll.scrollToTop();
    }

    scrollTo(){
        scroll.scrollTo('eltoscrollto',{
            duration: 100,
            delay: 0,
        })
    }

    onScroll = () => {
        let target = document.querySelector('.categoryTap')
        let posInfo = target.getBoundingClientRect().top;

        (posInfo-target.clientHeight)<(-90) ? this.setState({targetReached: true}):this.setState({targetReached: false})
        }

    selectBox = (e) => {
        if(e.target.className === "detailsTap"){
            this.setState({
                detailSelected: true,
                reviewSelected: false,
                qaSelected: false,
            })
            this.scrollTo("dataDes");
        }
        if(e.target.className === "reviewTap"){
            this.scrollTo('reviewScrollTarget');
            this.setState({
                detailSelected: false,
                reviewSelected: true,
                qaSelected: false,
            })
        }
        if(e.target.className === "qaTap"){
            this.setState({
                detailSelected: false,
                reviewSelected: false,
                qaSelected: true,
            })
        }
    }

    render(){
        const {dataList, targetReached} = this.state;
        return(
        <div>
           <div id="DetailPageContainer">
               <div className="topContainer">
                    <div className="topContents">
                        <i className="fab fa-js-square"/>
                        <i className="fas fa-coffee"/>
                        <i className="far fa-bookmark"/>
                        <i className="fas fa-share-square"/>
                    </div>
                    <div className="smallCategory">
                        <span>home - char - BT21 | 다른 상품 보기</span>
                        {/* 나중에 링크로 정리 */}
                    </div>
               </div>
                <ImgPurchInfo dataList={dataList}/>
                <Recommandations dataList={dataList} />
                <div className="categoryTap" onScroll={this.onScroll}>
                    <Link className={this.state.detailSelected? "clicked":"detailsTap"} to="detailAnchor" smooth={true} duration={500}onClick={this.selectBox} isDynamic={true}>상세정보</Link>
                    <Link className={this.state.reviewSelected? "clicked":"reviewTap"} to="reviewAnchor" smooth={true} duration={500} onClick={this.selectBox} isDynamic={true}>리뷰</Link>
                    <Link className={this.state.qaSelected? "clicked":"qaTap"} to="qaAnchor" duration={100} onClick={this.selectBox}>Q&A</Link>
                </div>
                <ProductDescriptions dataList={dataList}/>
                <Review reviewRate={dataList.map(el=>{return(el.reviewRate)})}/>
                <button className="scrollTop" onClick={this.scrollToTop}><i className="fas fa-chevron-up"/></button>             
            </div>
           <nav className={targetReached? "categoryNav":".hideNav"}>
                    <div className="navProduct">
                        <div className="navProductInfo">
                            <div className="imgAndPrice">
                                <img alt="navImg" src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcfa4652c8d383f56/5e21837f63d1b6503160d39b/Home-page.jpg" />
                                <div className="navPriceInfo">
                                    <span className="productName">라인프렌즈 BT21 MANG BABY 부클 버블티 백참</span>
                                    <span className="productPrice">22,000원</span>
                                </div>
                            </div>
                        </div>
                        <button>
                                <i className="fab fa-node-js"/>구매하기
                        </button>
                    </div>
                    <div className="navLinks">
                        <Link className={this.state.detailSelected? "clicked":"detailsTap"} to="detailAnchor" smooth={true} duration={500}onClick={this.selectBox} isDynamic={true}>상세정보</Link>
                        <Link className={this.state.reviewSelected? "clicked":"reviewTap"} to="reviewAnchor" smooth={true} duration={500} onClick={this.selectBox} isDynamic={true}>리뷰</Link>
                        <Link className={this.state.qaSelected? "clicked":"qaTap"} to="qaAnchor" duration={100} onClick={this.selectBox}>Q&A</Link>
                    </div>
            </nav>
        </div>
        );
    }
}
export default ProductDetail;