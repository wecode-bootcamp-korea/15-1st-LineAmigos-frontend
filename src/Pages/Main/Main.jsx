import React from 'react'
import Header from '../../Components/Header/Header'
import './Main.scss'

class Main extends React.Component {

  render() {
    return (
      <>
        <Header />
        <div className="visualContainer">
          <div className="visualImages">
            <img alt="Slider image" className="sliderImage"/>
            <img alt="Slider image" className="sliderImage"/>
            <img alt="Slider image" className="sliderImage"/>
          </div>
          <div className="visualText">
            <img alt="Slider text" className="sliderText"/>
            <img alt="Slider text" className="sliderText"/>
            <img alt="Slider text" className="sliderText"/>
          </div>
          <div className="arrowContainer">
            <img alt="arrow" />
          </div>
        </div>
    </>
    )
  }
}

export default Main