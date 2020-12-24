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
      gender: '',
      isValid: false,
    }
  }

  handleSignUpClcik = () => {
    const {
      email,
      pw,
      name,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      countryCode,
      phoneNumber,
    } = this.state

    fetch('http://10.168.1.140:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: email,
        password: pw,
        name: name,
        gender: gender,
        date_of_birth: `${birthYear}-${birthMonth}-${birthDay}`,
        country_code: countryCode,
        phone_number: phoneNumber,
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

  handleIsValid = () => {
    this.setState({
      isValid: true,
    })
  }

  render() {
    const emailValidation = /^[a-z0-9_-]{5,20}$/
    const pwValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/
    const checkBirthYear = this.state.birthYear.length === 4
    const checkBirthYear2 = this.state.birthYear >= 1900
    const checkBirthMonth = this.state.birthMonth.length === 2
    const checkBirthMonth2 = this.state.birthMonth <= 12
    const checkBirthDay = this.state.birthDay.length === 2
    const checkBirthDay2 = this.state.birthDay <= 31

    return (
      <div className='signUp'>
        <header>
          <img
            className='logoImg'
            alt='logo'
            src='/images/line-amigos-logo-default.png'
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
            />
            <span className='validationMassage'>
              {this.state.isValid && !this.state.email
                ? '필수 정보입니다.'
                : '' ||
                  (this.state.isValid &&
                    !emailValidation.test(this.state.email))
                ? '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
                : ''}
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
              {
                (this.state.isValid && !this.state.pw ? '필수 정보입니다.' : '',
                this.state.isValid && !pwValidation.test(this.state.pw)
                  ? '8~16자 영문 대/소문자, 숫자, 특수문자를 모두 사용하세요.'
                  : '')
              }
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
              onKeyUp={this.handleIsValid}
            />
            <span className='validationMassage'>
              {this.state.rePwValidationMassage}
              {this.state.isValid && this.state.rePw !== this.state.pw
                ? '비밀번호가 일치하지않습니다.'
                : ''}
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
          />
          <span className='validationMassage'>
            {this.state.isValid && !this.state.name ? '필수 정보입니다.' : ''}
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
            />
            <input
              className='birthMonth'
              id='birthMonth'
              type='text'
              placeholder='월'
              value={this.state.birthMonth}
              onChange={this.handleValueChange}
            />
            <input
              className='birthDay'
              id='birthDay'
              type='text'
              placeholder='일'
              value={this.state.birthDay}
              onChange={this.handleValueChange}
            />
          </div>
          <span className='validationMassage'>
            {this.state.isValid && (!checkBirthYear || !checkBirthYear2)
              ? '태어난 년도 4자리를 정확하게 입력하세요.'
              : ''}
          </span>
          <span className='validationMassage'>
            {checkBirthYear &&
            checkBirthYear2 &&
            (!checkBirthMonth || !checkBirthMonth2)
              ? '태어난 월 2자리를 정확하게 입력하세요.'
              : ''}
          </span>
          <span className='validationMassage'>
            {checkBirthMonth &&
            checkBirthMonth &&
            (!checkBirthDay || !checkBirthDay2)
              ? '태어난 일(날짜) 2자리를 정확하게 입력하세요.'
              : ''}
          </span>
          <span className='label'>성별</span>
          <select
            className='genderDropdown'
            id='gender'
            value={this.state.gender}
            onChange={this.handleValueChange}
          >
            <option value='none'>선택안함</option>
            <option value='female'>여성</option>
            <option value='male'>남성</option>
          </select>
          <span className='validationMassage'>
            {this.state.isValid && this.state.gender === 'none'
              ? '필수 정보입니다.'
              : ''}
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
            onClick={this.handleIsValid}
          >
            가입하기
          </button>
        </div>
        <SignUpFooter />
      </div>
    )
  }
}

export default SignUp
