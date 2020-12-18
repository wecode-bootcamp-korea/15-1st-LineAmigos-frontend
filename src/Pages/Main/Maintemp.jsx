import React, { Component } from "react";
 import { Link } from "react-router-dom";
 import "./Header.scss";
 import ItemCard from "../ItemCard/ItemCard";

 class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();
    this.state = {
      fix: false,
      hoverAction: false,
      subHoverAction: false,
    };

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnMount = () => {
      window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = e => {
      const scrollTop = ("scroll", window.scrollY);
      this.setState({ fix: scrollTop > 160 ? true : false });
    };

    subMenuMoues = () => {
      this.setState({
        subHoverAction: !this.state.subHoverAction,
      });
    };

    render() {
      <>
      <div className="header">
      <div className={`gnb ${this.state.fix ? "fix" : ""}`}>
        <div className="gnb__search">
          <input />
      </div>
      <div className="gnb__cart">
        <img src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png"></img>
      </div>
      <div className={`gnbInnerBox ${this.state.subHoverAction ? "hoverd" : ""}`}>

      </div>
  <div className={`gnb__subMenu ${this.state.hoverAction ? "hoverd" : ""}`}>
  <ul>
    {this.state.gnbSubMenudata.map(data => {
      return (
        <li onClick={this.subMenuMoues} key={data.id}>
        </li>
      );
    })}
  </ul>
  </div>
  </div>
  </div>
  </>
  }
}
  

}