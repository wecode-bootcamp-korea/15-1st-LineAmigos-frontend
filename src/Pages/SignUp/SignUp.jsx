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
          <span className="label">아이디</span>
          <input 
            className="idBox"
            type="text" 
            placeholder="@lineamigos.com"></input>
          <span className="label">비밀번호</span>
          <input 
            className="pwBox"
            type="password"></input>
          <span className="label">비밀번호 재확인</span>
          <input 
            className="rePwBox"
            type="password"></input>
        </div>
        <div className="userInfoForm">
          <span className="label">이름</span>
          <input 
            className="name"
            type="text"></input>
          <span className="label">생년월일</span>
          <div className="birthDate">
            <input 
                className="birthYear"
                type="text"
                placeholder="년(4자)"></input>
            <input 
              className="birthMonth"
              type="text"
              placeholder="월"></input>
            <input 
              className="birthDay"
              type="text"
              placeholder="일"></input>
            </div>
          <span className="label">성별</span>
          <input 
            className="gender"
            type="text"></input>
            <span className="label">본인 확인 이메일</span>
            <input 
            className="emailAdress"
            type="text"
            placeholder="선택입력"></input>
        </div>
        <div className="phoneValidationForm">
        <span className="label">휴대전화</span>
          <input 
            className="countryNumber"
            type="text"></input>
          <input 
            className="phoneNumber"
            type="text"
            placeholder="전화번호 입력"></input>
          <button 
            className="validationBtn"
            type="submit">인증번호 받기</button>
            <input 
            className="validationNumber"
            type="text"
            placeholder="인증번호를 입력하세요"></input>
        </div>
        <div
        className="signUpBtnForm">
          <button 
          className="signUpBtn"
          type="submit">가입하기</button>
        </div>
        <footer>
          <ul className="footer">
            <li><a href="">이용약관</a></li>
            <li>|</li>
            <li><a href="">개인정보처리방침</a></li>
            <li>|</li>
            <li><a href="">책임의 한계와 법적고지</a></li>
            <li>|</li>
            <li><a href="">회원정보 고객센터</a></li>
          </ul>
            <span className="companyName">&copy; Line Amigos Corp.</span>
        </footer>
      </div>
    );
  }
}

export default SignUp;