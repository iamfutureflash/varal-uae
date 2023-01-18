import FeedbackCard from "./FeedbackCard"
import MainFooter from "./MainFooter"
import {blue_ellipse_1} from "../assets"
function Footer() {
  return (
    <div className='main-container  px-4 relative '>
      <div className='small_blue  left-[14rem]  top-[.1rem] animate-bounce  absolute z-[10] hidden md:block'><img src={blue_ellipse_1} alt="" className='w-28 h-28' /></div>
      <div className='small_blue  left-[29rem]  top-[16rem] animate-bounce  absolute z-[10] hidden md:block'><img src={blue_ellipse_1} alt="" className='w-18 h-18' /></div>
      <div className='small_blue  right-[29rem]  top-[31rem] animate-bounce  absolute z-[10] hidden md:block'><img src={blue_ellipse_1} alt="" className='w-24 h-24' /></div>
      <div className='small_blue  right-[30rem]  top-[76rem] animate-bounce  absolute z-[10] hidden md:block'><img src={blue_ellipse_1} alt="" className='w-36 h-36' /></div>
      <div className='small_blue  left-[8rem]  top-[41rem] animate-bounce  absolute z-[10] hidden md:block'><img src={blue_ellipse_1} alt="" className='w-18 h-18' /></div>
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