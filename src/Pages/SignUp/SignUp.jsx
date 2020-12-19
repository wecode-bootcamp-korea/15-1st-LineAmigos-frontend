import React, { Component } from 'react'
import SignUpFooter from '../../Pages/SignUp/SignUpFooter'
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
      countryCode: '82',
      phoneNumber: '',
      gender: '초기',
      emailValidationMassage: '',
      pwValidationMassage: '',
      rePwValidationMassage: '',
      nameValidationMassage: '',
      birthMonthValidationMassage: '',
      birthDayValidationMassage: '',
      genderValidationMassage: '',
    }
  }

  handleAllValidation = () => {
    return (
      this.handleEmailValidation(),
      this.handlePwValidation(),
      this.handleRePwValidation(),
      this.handleNameValidation(),
      this.handleBirthYearValidation(),
      this.handleSignUpClcik()
    )
  }

  handleSignUpClcik = () => {
    fetch('http://10.168.1.140:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.pw,
        name: this.state.name,
        gender: this.state.gender,
        date_of_birth: `${this.state.birthYear}-${this.state.birthMonth}-${this.state.birthDay}`,
        country_code: this.state.countryCode,
        phone_number: this.state.phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === 'SUCCESS') {
          alert('라인 아미고스샵에 오실걸 환영합니다!')
          this.props.history.push('/login')
        }
      })
  }

  handleValueChange = (event) => {
    const { id, value } = event.target
    this.setState({
      [id]: value,
    })
  }

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
        pwValidationMassage:
          '8~16자 영문 대/소문자, 숫자, 특수문자를 모두 사용하세요.',
      })
    } else if (pwValidation.test(checkPw)) {
      this.setState({
        pwValidationMassage: '',
      })
    }
  }

  handleNameValidation = () => {
    this.setState({
      nameValidationMassage: this.state.name ? '' : '필수 정보입니다.',
    })
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

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    })
    if (event.target.value === 'none') {
      this.setState({
        genderValidationMassage: '필수 정보입니다.',
      })
    } else {
      this.setState({
        genderValidationMassage: '',
      })
    }
  }

  render() {
    return (
      <div className='signUp'>
        <header>
          <img
            className='logoImg'
            alt='logo'
            src='/images/line-amigos-logo.png'
          />
        </header>
        <div className='IdPwForm'>
          <div className='IdBox'>
            <span className='label'>아이디</span>
            <input
              className='IdPwBox'
              id='email'
              type='text'
              placeholder='@lineamigos.com'
              value={this.state.email}
              onChange={this.handleValueChange}
              onKeyUp={this.handleEmailValidation}
            />
            <span className='validationMassage'>
              {this.state.emailValidationMassage}
            </span>
          </div>
          <div className='pwBox'>
            <span className='label'>비밀번호</span>
            <input
              className='IdPwBox'
              id='pw'
              type='password'
              value={this.state.pw}
              onChange={this.handleValueChange}
              onKeyUp={this.handlePwValidation}
            />
            <span className='validationMassage'>
              {this.state.pwValidationMassage}
            </span>
          </div>
          <div className='rePwBox'>
            <span className='label'>비밀번호 재확인</span>
            <input
              className='IdPwBox'
              id='rePw'
              type='password'
              value={this.state.rePw}
              onChange={this.handleValueChange}
              onKeyUp={this.handleRePwValidation}
            />
            <span className='validationMassage'>
              {this.state.rePwValidationMassage}
            </span>
          </div>
        </div>
        <div className='userInfoForm'>
          <span className='label'>이름</span>
          <input
            className='name'
            id='name'
            type='text'
            value={this.state.name}
            onChange={this.handleValueChange}
            onKeyUp={this.handleNameValidation}
          />
          <span className='validationMassage'>
            {this.state.nameValidationMassage}
          </span>
          <span className='label'>생년월일</span>
          <div className='birthDate'>
            <input
              className='birthYear'
              id='birthYear'
              type='text'
              placeholder='년(4자)'
              value={this.state.birthYear}
              onChange={this.handleValueChange}
              onKeyUp={this.handleBirthYearValidation}
            />
            <input
              className='birthMonth'
              id='birthMonth'
              type='text'
              placeholder='월'
              value={this.state.birthMonth}
              onChange={this.handleValueChange}
              onKeyUp={this.handleBirthMonthValidation}
            />
            <input
              className='birthDay'
              id='birthDay'
              type='text'
              placeholder='일'
              value={this.state.birthDay}
              onChange={this.handleValueChange}
              onKeyUp={this.handleBirthDayValidation}
            />
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
            className='genderDropdown'
            value={this.state.gender}
            onChange={this.handleGenderChange}
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
            value={this.state.countryCode}
            placeholder='국가번호'
          />
          <input
            className='phoneNumber'
            id='phoneNumber'
            type='text'
            placeholder='전화번호 입력'
            value={this.state.phoneNumber}
            onChange={this.handleValueChange}
          />
          <button className='validationBtn' type='submit'>
            인증번호 받기
          </button>
          <input
            className='validationNumber'
            type='text'
            placeholder='인증번호를 입력하세요'
          />
        </div>
        <div className='signUpBtnForm'>
          <button
            className='signUpBtn'
            type='submit'
            onClick={this.handleAllValidation}
          >
            {' '}
            가입하기
          </button>
        </div>
        <SignUpFooter />
      </div>
    )
  }
}

export default SignUp
