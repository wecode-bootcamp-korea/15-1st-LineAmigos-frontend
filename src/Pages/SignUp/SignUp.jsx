import React, { Component } from 'react';
import './SignUp.scss'

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img 
            className="logoImg"
            alt="logo" 
            src="/images/line-amigos-logo.png" />
        </header>
        <div className="signUpForm">
          <span>아이디</span>
          <input 
            className="idBox"
            type="text" 
            placeholder="@lineamigos.com"></input>
          <span>비밀번호</span>
          <input 
            className="pwBox"
            type="password"></input>
          <span>비밀번호 재확인</span>
          <input 
            className="rePwBox"
            type="password"></input>
        </div>
        <div className="userInfoForm">
          <span>이름</span>
          <input 
            className="name"
            type="text"></input>
          <span>생년월일</span>
          <input 
            className="birthDate"
            type="text"></input>
          <span>성별</span>
          <input 
            className="gender"
            type="text"></input>
            <span>본인 확인 이메일</span>
            <input 
            className="emailAdress"
            type="text"></input>
        </div>
        <div className="phoneValidationForm">
        <span>휴대전화</span>
          <input 
            className="countryNumber"
            type="text"></input>
          <input 
            className="phoneNumber"
            type="text"></input>
          <button 
            className="validationBtn"
            type="submit"></button>
            <input 
            className="validationNumber"
            type="text"></input>
        </div>
      </div>
    );
  }
}

export default SignUp;