import React, { Component } from 'react'
import './SignUpFooter.scss'

class SignUpFooter extends Component {
  constructor() {
    super()
    this.state = {
      contents: [
        {
          name: '이용약관',
          href: 'https://policy.naver.com/rules/service.html',
        },
        {
          name: '개인정보처리방침',
          href: 'https://policy.naver.com/policy/privacy.html',
        },
        {
          name: '책임의 한계와 법적고지',
          href: 'https://policy.naver.com/rules/disclaimer.html',
        },
        {
          name: '회원정보 고객센터',
          href:
            'https://help.naver.com/support/service/main.help?serviceNo=532&_membership_p.membership_p.membership_26',
        },
      ],
    }
  }
  render() {
    return (
      <footer>
        <ul className='footer'>
          {this.state.contents.map((content) => (
            <>
              <li>
                <a href={content.href}>{content.name}</a>
              </li>
            </>
          ))}
        </ul>
        <span className='copyright'>Copyright &copy; </span>
        <span className='companyName'>Line Amigos Corp. </span>
        <span className='rights'>All Rights Reserved.</span>
      </footer>
    )
  }
}

export default SignUpFooter
