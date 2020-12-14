import React, { Component } from 'react';
import './Login.scss'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      id:'',
      pw:'',
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
      alert("아이디를 입력해주세요.")
    } if (!checkPw){
      alert("비밀번호를 입력해주세요.")
    } else {
        this.props.history.push('/')
    }
  }


  render() {
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
          >
          {/* <span>아이디를 입력해 주세요.</span> */}
          </input>
          <input 
          className="pwBox"
          placeholder="비밀번호"
          type="password"
          value={this.state.pw}
          onChange={this.handlePwChange}
          >
          </input>
          {/* <span>비밀번호를 입력해주세요.</span> */}
          <button
          className="loginBtn"
          onClick={this.handleValidation}>로그인</button>
          
          <div className="bottomContainer">
            {/* <img alt="Check Mark" src="/images/check-mark.png" /> */}
            {/* <i class="far fa-check-circle"></i> */}
            <span>로그인 상태 유지</span>
            <span>IP 보안</span>
            <span>OFF</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;