import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainSlider from './MainSlider'
import './Main.scss'


class Main extends React.Component {

  render() {
    return (
      <div className="Main">
        <div className="visualContainer">
          <MainSlider />
        </div>
        <Header />
        <div className="middleContainer">
        
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main