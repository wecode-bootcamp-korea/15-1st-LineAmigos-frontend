import React, { Component } from 'react'
import './SignUp.scss'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      pw: '',
      rePw: '',
      name: '',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      emailValidationMassage: '',
      pwValidationMassage: '',
      rePwValidationMassage: '',
      nameValidationMassage: '',
      birthMonthValidationMassage: '',
      birthDayValidationMassage: '',
      genderValidationMassage: '',
      genderDropdown: 'genderDropdown',
    }
  }

  handleAllValidation = () => {
    return (
      this.handleEmailValidation(),
      this.handlePwValidation(),
      this.handleRePwValidation(),
      this.handleNameValidation(),
      this.handleBirthYearValidation(),
      this.handleDropValidation(),
      this.handleDropNoneValidation()
    )
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handlePwChange = (event) => {
    this.setState({
      pw: event.target.value,
    })
  }

  handleRePwChange = (event) => {
    this.setState({
      rePw: event.target.value,
    })
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleBirthYearChange = (event) => {
    this.setState({
      birthYear: event.target.value,
    })
    // this.handleBirthYearValidation()
  }

  handleBirthMonthChange = (event) => {
    this.setState({
      birthMonth: event.target.value,
    })
  }

  handleBirthDayChange = (event) => {
    this.setState({
      birthDay: event.target.value,
    })
  }

  //인풋에 글 썼다 지웠을때 validation문구 변경될 수있도록(pw도)
  handleEmailValidation = () => {
    const checkEmail = this.state.email
    const emailValidation = /^[a-z0-9_-]{5,20}$/

    if (!checkEmail) {
      this.setState({
        emailValidationMassage: '필수 정보입니다.',
      })
    } else if (!emailValidation.test(checkEmail)) {
      this.setState({
        emailValidationMassage:
          '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
      })
    } else if (emailValidation.test(checkEmail)) {
      this.setState({
        emailValidationMassage: '',
      })
    }
  }

  handlePwValidation = () => {
    const checkPw = this.state.pw
    const pwValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/

    if (!checkPw) {
      this.setState({
        pwValidationMassage: '필수 정보입니다.',
      })
    } else if (!pwValidation.test(checkPw)) {
      this.setState({
        pwValidationMassage: '8~16자 영문, 숫자, 특수문자를 모두 사용하세요.',
      })
    } else if (pwValidation.test(checkPw)) {
      this.setState({
        pwValidationMassage: '',
      })
    }
  }

  handleNameValidation = () => {
    if (!this.state.name) {
      this.setState({
        nameValidationMassage: '필수 정보입니다.',
      })
    } else {
      this.setState({
        nameValidationMassage: '',
      })
    }
  }

  handleRePwValidation = () => {
    if (this.state.rePw !== this.state.pw) {
      this.setState({
        rePwValidationMassage: '비밀번호가 일치하지 않습니다.',
      })
    } else {
      this.setState({
        rePwValidationMassage: '',
      })
    }
  }

  handleBirthYearValidation = () => {
    const checkBirthYear = this.state.birthYear.length === 4
    const checkBirthYear2 = this.state.birthYear >= 1900
    if (!checkBirthYear || !checkBirthYear2) {
      this.setState({
        birthYearValidationMassage: '태어난 년도 4자리를 정확하게 입력하세요.',
      })
    } else {
      this.setState({
        birthYearValidationMassage: '',
      })
    }
  }

  handleBirthMonthValidation = () => {
    const checkBirthMonth = this.state.birthMonth.length === 2
    const checkBirthMonth2 = this.state.birthMonth <= 12
    if (!checkBirthMonth || !checkBirthMonth2) {
      this.setState({
        birthMonthValidationMassage: '태어난 월 2자리를 정확하게 입력하세요.',
      })
    } else {
      this.setState({
        birthMonthValidationMassage: '',
      })
    }
  }

  handleBirthDayValidation = () => {
    const checkBirthDay = this.state.birthDay.length === 2
    const checkBirthDay2 = this.state.birthDay <= 31
    if (!checkBirthDay || !checkBirthDay2) {
      this.setState({
        birthDayValidationMassage:
          '태어난 일(날짜) 2자리를 정확하게 입력하세요.',
      })
    } else {
      this.setState({
        birthDayValidationMassage: '',
      })
    }
  }

  handleDropNoneValidation = (event) => {
    const genderCheck = event.target.value //none
    if (genderCheck === 'none') {
      this.setState({
        genderValidationMassage: '필수 정보입니다.',
      })
    } else {
      this.setState({
        genderValidationMassage: '',
      })
    }
  }

  handleDropValidation = () => {
    this.setState({
      genderValidationMassage: '필수 정보입니다.',
    })
  }

  render() {
    return (
      <div className='container'>
        <header>
          <img
            className='logoImg'
            alt='logo'
            src='/images/line-amigos-logo.png'
          />
        </header>
        <div className='signUpForm'>
          <span className='label'>아이디</span>
          <input
            className='emailBox'
            type='text'
            placeholder='@lineamigos.com'
            value={this.state.email}
            onChange={this.handleEmailChange}
            onKeyUp={this.handleEmailValidation}
          ></input>
          <span className='validationMassage'>
            {this.state.emailValidationMassage}
          </span>
          <span className='label'>비밀번호</span>
          <input
            className='pwBox'
            type='password'
            value={this.state.pw}
            onChange={this.handlePwChange}
            onKeyUp={this.handlePwValidation}
          ></input>
          <span className='validationMassage'>
            {this.state.pwValidationMassage}
          </span>
          <span className='label'>비밀번호 재확인</span>
          <input
            className='rePwBox'
            type='password'
            value={this.state.rePw}
            onChange={this.handleRePwChange}
            onKeyUp={this.handleRePwValidation}
          ></input>
          <span className='validationMassage'>
            {this.state.rePwValidationMassage}
          </span>
        </div>
        <div className='userInfoForm'>
          <span className='label'>이름</span>
          <input
            className='name'
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange}
            onKeyUp={this.handleNameValidation}
          ></input>
          <span className='validationMassage'>
            {this.state.nameValidationMassage}
          </span>
          <span className='label'>생년월일</span>
          <div className='birthDate'>
            <input
              className='birthYear'
              type='text'
              placeholder='년(4자)'
              value={this.state.birthYear}
              onChange={this.handleBirthYearChange}
              onKeyUp={this.handleBirthYearValidation}
            ></input>
            <input
              className='birthMonth'
              type='text'
              placeholder='월'
              value={this.state.birthMonth}
              onChange={this.handleBirthMonthChange}
              onKeyUp={this.handleBirthMonthValidation}
            ></input>
            <input
              className='birthDay'
              type='text'
              placeholder='일'
              value={this.state.birthDay}
              onChange={this.handleBirthDayChange}
              onKeyUp={this.handleBirthDayValidation}
            ></input>
          </div>
          <span className='validationMassage'>
            {this.state.birthYearValidationMassage}
          </span>
          <span className='validationMassage'>
            {this.state.birthMonthValidationMassage}
          </span>
          <span className='validationMassage'>
            {this.state.birthDayValidationMassage}
          </span>
          <span className='label'>성별</span>
          <select
            className={this.state.genderDropdown}
            onChange={this.handleDropNoneValidation}
          >
            <option value='none'>선택안함</option>
            <option value='female'>여성</option>
            <option value='male'>남성</option>
          </select>
          <span className='validationMassage'>
            {this.state.genderValidationMassage}
          </span>
        </div>
        <div className='phoneValidationForm'>
          <span className='label'>휴대전화</span>
          <input
            className='countryNumber'
            type='text'
            placeholder='국가번호'
          ></input>
          <input
            className='phoneNumber'
            type='text'
            placeholder='전화번호 입력'
          ></input>
          <button className='validationBtn' type='submit'>
            인증번호 받기
          </button>
          <input
            className='validationNumber'
            type='text'
            placeholder='인증번호를 입력하세요'
          ></input>
        </div>
        <div className='signUpBtnForm'>
          <button
            className='signUpBtn'
            type='submit'
            onClick={this.handleAllValidation}
          >
            가입하기
          </button>
        </div>
        <footer>
          <ul className='footer'>
            <li>
              <a href=''>이용약관</a>
            </li>
            <li>|</li>
            <li>
              <a href=''>개인정보처리방침</a>
            </li>
            <li>|</li>
            <li>
              <a href=''>책임의 한계와 법적고지</a>
            </li>
            <li>|</li>
            <li>
              <a href=''>회원정보 고객센터</a>
            </li>
          </ul>
          <span className='copyright'>Copyright &copy; </span>
          <span className='companyName'>Line Amigos Corp. </span>
          <span className='rights'>All Rights Reserved.</span>
        </footer>
      </div>
    )
  }
}

export default SignUp
