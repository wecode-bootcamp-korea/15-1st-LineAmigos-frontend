import React from 'react'
import './Footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="brandDescription">
          <img alt="logo" src="/images/line-amigos-logo-white.png" />
          <span>
            <p>끝없는 득템의 재미</p>
            <p>라인프렌즈 공식 브랜드스토어</p>
            <p>#라인프렌즈 #BT21 #브롤스타즈</p>
          </span>
          <div className="icons">
            <div className="like"><i class="far fa-heart" />찜하기 122,232</div>
            <div className="share">공유</div>
          </div>
        </div>

        <footer>
          <div className="notice">
            <i class="fas fa-exclamation-circle" />반품 배송비, 반품 배송주소 등은 해당 상품 페이지 내 안내를 참고해주세요
            <span>라인프렌즈 주식회사 고객센터 1544-5921</span>
          </div>
          <ul className="footerMenu">
            <li>네이버 약관</li>
            <li>네이버페이 약관</li>
            <li>전자금융거래 이용약관</li>
            <li className="bold">개인정보처리방침</li>
            <li>청소년보호정책</li>
            <li>지식재산권신고센터</li>
            <li>안전거래 가이드</li>
            <li>쇼핑&페이 고객센터</li>
          </ul>
          <div className="brandContact">
            <div className="naver">
              <b>네이버㈜</b><br/>
              사업자등록번호 220-81-62517 통신판매업 신고번호 2006-경기성남-0692호<br/>
              대표이사 한성숙 경기도 성남시 분당구 불정로 6 네이버 그린팩토리 13561<br/>
              전화 1588-3819 이메일 helpcustomer@naver.com 사업자등록정보 확인<br/>
              호스팅 서비스 제공 : NAVER Business Platform
            </div>
            <div className="QnA">
              <b>고객센터</b><br/>
              강원도 춘천시 퇴계로 89 강원전문건설회관<br/>
              전화 1588-3819 전화 전 클릭<br/>
              결제도용신고 1588-3816<br/>
              <span>1:1문의 바로가기</span>
            </div>
            <div className="conflicts">
              <b>전자금융거래 분쟁처리</b><br/>
              전화 1588-3819<br/>
              <span>1:1문의 바로가기</span>
            </div>
          </div>
          <div className="brandResponsibility">
            네이버㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
          </div>
          <div className="copyRights">
            <img alt="Naver logo" src="/images/naver-logo.png" />
            <p>Copyright ©NAVER Corp.All Rights Reserved.</p>
          </div>
        </footer>
        
      </div>
    );
  }
}

export default Footer;
