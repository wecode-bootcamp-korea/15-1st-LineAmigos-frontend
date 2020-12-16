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

  //API 받을 준비
  handleClick = () => {
    fetch('API주소', {
      method: 'POST',
      body: JSON.stringify({
        userId: this.state.id, //승현님이 정한 key명 확인해서 변경해야함!
        password: this.state.pw, //승현님이 정한 key명 확인해서 변경해야함!
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        //제3의 이름이 아닌 위의 인자와 같은 이름을 써도 되는 이유 질문하기
        if (result.Authorization) {
          localStorage.setItem('token', result.Authorization)
          this.props.history.push('/')
        }
      })
  }

  handleIdPwChange = (event) => {
    const { id, value } = event.target
    this.setState({
      [id]: value,
    })
  }

  handlePwChange = (event) => {
    this.setState({
      pw: event.target.value,
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
      // this.handleClick() // api 연결하면 살릴 부분
      this.props.history.push('/') // api연결하면 지워야하는 부분
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
            src='/images/line-amigos-logo.png'
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
      </div>
    )
  }
}

export default Login
