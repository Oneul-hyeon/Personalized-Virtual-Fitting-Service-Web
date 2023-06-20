import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <section className="footerSection">
        <p>Aivle 5반 20조 &copy; All rights reserved.</p>
        <section className="_1trxeqsk">
          <a href="mailto:contact@daangn.com">제휴 문의</a>
          <a href="mailto:ad@daangn.com">광고 문의</a>
        </section>
        <section className="_1trxeqsf">
          <div className="_1trxeqsg">
            <Link to="/policyterms">이용 약관</Link>
            <Link to="/privacymain">개인정보처리방침</Link>
          </div>
        </section>
      </section>
    </footer>
  )
}

export default Footer
