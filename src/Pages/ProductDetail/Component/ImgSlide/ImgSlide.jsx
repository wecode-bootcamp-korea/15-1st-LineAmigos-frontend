import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImgSlide.scss';


class ImgSlide extends React.Component {

  render() {
    const {imgUrl} = this.props;

    const settings = {
      customPaging: function(i){
        return(
            <img key={i} alt= "thumbImg" src = {imgUrl} />
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    
    return (
      <div>
      <Slider {...settings}>
      {[...Array(5)].map(el=>{return(
        <div className="slideContainer">
        <img alt="slideImg" src={imgUrl} className="slideImg"/>
      </div>
      )})}
        
        {/* {imgUrl.length>0 &&
        imgUrl.map((el, idx) => {
            return (
              <div key={idx}className="slideContainer">
                  <img key={idx} alt="" src={el}  className="slideImg"/>
              </div>
            );
          })} */}
      </Slider >
      </div>
    );
  }
}

export default ImgSlide;