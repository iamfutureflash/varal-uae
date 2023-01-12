import FeedbackCard from "./FeedbackCard"
import MainFooter from "./MainFooter"
function Footer() {
  return (
    <div className='main-container'>
      <div className="sub-container">
        <div className="left footer-top">
          <FeedbackCard/>
        </div>
        <div className="right footer-bottom">
          <MainFooter/>
        </div>
      </div>
    </div>
  )
}

export default Footer