import FeedbackCard from "./FeedbackCard"
import MainFooter from "./MainFooter"
function Footer() {
  return (
    <div className='main-container  px-4 '>
      <div className="sub-container   flex flex-col justify-center items-center md:items-start md:flex-row md:justify-between lg:px-[4rem] w-full">
        <div className="left footer-top max-w-[400px]  ">
          <FeedbackCard />
        </div>
        <div className="right footer-bottom   md:max-w-[400px] ">
          <MainFooter />
        </div>
      </div>
    </div>
  )
}

export default Footer