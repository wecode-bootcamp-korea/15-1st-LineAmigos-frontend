import React, { Component } from 'react'
import './Login.scss'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      pw: '',
      idValidation: '',
      pwValidation: '',
      keepLogin: false,
      onOffBtn: false,
    }
  }

  handleClick = () => {
    fetch('http://10.168.1.140:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === 'SUCCESS') {
          this.props.history.push('/')
        }
        if (response.access_token) {
          localStorage.setItem('token', response.access_token)
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
      })
  }

  handleIdPwChange = (event) => {
    const { id, value } = event.target
    this.setState({
      [id]: value,
    })
  }

  handleValidation = (event) => {
    event.preventDefault()
    const checkId = this.state.id
    const checkPw = this.state.pw
    this.setState({
      idValidation: !checkId ? '아이디를 입력해주세요.' : '',
      pwValidation: !checkPw ? '비밀번호를 입력해주세요.' : '',
    })
    if (checkId && checkPw) {
      this.handleClick()
    }
  }

  handleKeepLogin = () => {
    this.setState({
      keepLogin: !this.state.keepLogin,
    })
  }

  handleOnOffBtn = () => {
    this.setState({
      onOffBtn: !this.state.onOffBtn,
    })
  }

  render() {
    const {
      id,
      pw,
      idValidation,
      pwValidation,
      keepLogin,
      onOffBtn,
    } = this.state
    return (
      <div className='container'>
        <header>
          <img
            className='logoImg'
            alt='logo'
            src='/images/line-amigos-logo-default.png'
          />
        </header>
        <div className='loginForm'>
          <input
            id='id'
            className='idBox'
            placeholder='아이디'
            type='text'
            value={id}
            onChange={this.handleIdPwChange}
          />
          <span
            className='validationMessage
          '
          >
            {idValidation}
          </span>
          <input
            id='pw'
            className='pwBox'
            placeholder='비밀번호'
            type='password'
            value={pw}
            onChange={this.handleIdPwChange}
          />
          <span className='validationMessage'>{pwValidation}</span>
          <button className='loginBtn' onClick={this.handleValidation}>
            로그인
          </button>

          <div className='bottomContainer'>
            <div className='KeepLoginMark'>
              <i
                className={`fa-check-circle ${
                  this.state.keepLogin ? 'fas' : 'far'
                }`}
                onClick={this.handleKeepLogin}
              />
              <span>로그인 상태 유지</span>
            </div>
            <div className='ipSecurity'>
              <span>IP 보안</span>
              <span
                className={onOffBtn ? 'onBtn' : 'offBtn'}
                onClick={this.handleOnOffBtn}
              >
                {onOffBtn ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </div>
        <a className='signUpLink' href='http://localhost:3000/signup'>
          아직 회원이 아니신가요?
        </a>
      </div>
    )
  }
}

export default Login
