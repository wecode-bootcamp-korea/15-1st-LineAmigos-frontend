import React, { Component } from 'react';
import './Login.scss'


class Login extends Component {
  constructor(){
    super();
    this.state = {
      id:'',
      pw:'',
      idValidation:'',
      pwValidation:'',
      keepLogin: false,
      onOffBtn: false,
    }
  }

  handleIdChange = (event) => {
    this.setState({
      id: event.target.value
    });
  }

  handlePwChange = (event) => {
    this.setState({
      pw: event.target.value
    });
  }

  handleValidation = (event) => {
    event.preventDefault();
    const checkId = this.state.id;
    const checkPw = this.state.pw;
    if (!checkId){
      this.setState({ 
        idValidation : "아이디를 입력해주세요."
      })
    } if (!checkPw){ 
      this.setState({
        pwValidation : "비밀번호를 입력해주세요."
      })
    } else {
        this.props.history.push('/')
    }
  }

  handleKeepLogin = () => {
    this.setState({
      keepLogin : !this.state.keepLogin
    })
  }

  handleOnOffBtn = () => {
    this.setState({
      onOffBtn : !this.state.onOffBtn
    })
  }

  render() {
    console.log(this.state.onOffBtn)
    return (
      <div className="container">
        <header>
          <img 
            className="logoImg"
            alt="logo" 
            src="/images/line-amigos-logo.png" />
        </header>
        <div className="loginForm">
          <input 
            className="idBox"
            placeholder="아이디"
            type="text"
            value={this.state.id}
            onChange={this.handleIdChange}
          ></input>
          <span 
            className="validationMessage
            ">{this.state.idValidation}</span>
          <input 
            className="pwBox"
            placeholder="비밀번호"
            type="password"
            value={this.state.pw}
            onChange={this.handlePwChange}
            ></input>
          <span
            className="validationMessage"
            >{this.state.pwValidation}</span>
          <button
            className="loginBtn"
            onClick={this.handleValidation}>로그인</button>
          <div className="bottomContainer">
            <div className="KeepLoginMark">
              <i 
              className={this.state.keepLogin ? "fas fa-check-circle" : "far fa-check-circle"}
              onClick={this.handleKeepLogin}
              ></i>
              <span>로그인 상태 유지</span>
            </div>
            <div className="ipSecurity">
              <span>IP 보안</span>
              <span 
              className={this.state.onOffBtn ? "onBtn" : "offBtn"}
              onClick={this.handleOnOffBtn}>{this.state.onOffBtn ? "ON" : "OFF"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;