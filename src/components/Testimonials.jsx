import { testimonials_1, testimonials_2 } from '../constants'
import { right_arrow, blue_ellipse_1, brown_ellipse_1, gray_ellipse_1 } from '../assets'

function Testimonials() {
  return (
    <div className='main-container xxs:mx-2  my-14  flex justify-center items-center relative'>
            <div className='small_blue  left-[24rem]  top-[43rem] animate-bounce  absolute z-[10] '><img src={blue_ellipse_1} alt="" className='w-10 h-10' /></div>
            <div className='small_blue  right-[16rem]  top-[34rem] animate-bounce  absolute z-[10] '><img src={brown_ellipse_1} alt="" className='w-4 h-4' /></div>
            <div className='small_blue  left-[38rem]  top-[33rem] animate-bounce  absolute z-[10] '><img src={blue_ellipse_1} alt="" className='w-20 h-20' /></div>
            <div className='small_blue  left-[36rem]  top-[71rem] animate-bounce  absolute z-[10] '><img src={gray_ellipse_1} alt="" className='w-6 h-6' /></div>
      <div className='sub-container flex w-full xxs:flex-col md:flex-row justify-between md:mx-20 max-w-[750px] '>
        <div className='left flex flex-col justify-center items-center'>
          <div className='claim-free-quote mb-16'>
            <h4 className='max-w-[300px] font-lexend text-sm text-black'>Learn the ways in which you can benefit
              from a UAE/Offshore Company. Then get
              started on fulfilling your UAE dream.</h4>
            <button className='font-noto text-base font-normal text-primary mt-4'>Claim a Free Quote</button>
          </div>
          <div className='space-y-28'>
            {testimonials_1.map((data, index) => (
              <div className={`${data.id} border-2 border-gray-400 rounded-xl flex flex-col space-y-4 w-fit max-w-[300px]  py-4 px-6 `}>
                <div className="image">
                  <img src={data.icon} alt={data.title} />
                </div>
                <div className="title">
                  <h4 className='font-lexend text-xl font-medium text-black max-w-[300px] text-left'>{data.title}</h4>
                </div>
                <div className="desc">
                  <p className={` ${" "} max-w-[280px] text-sm text-gray-400 text-left`}>{data.desc}</p>
                </div>
                <div className="learn-more flex space-x-2 flex-row items-center">
                  <button>{data.button}</button>
                  <img src={data.arrow} alt="arrow" className='w-3 mt-1' />
                </div>
              </div>
            ))}
          </div>
          <div className='professional-team mt-16 md:hidden'>
            <h4 className='max-w-[300px] font-lexend text-sm text-black font-light'>We have gathered a team of professionals to craft adequate
              services you can rely on for a friction
              free setup in UAE.</h4>
            <div className='flex space-x-2 flex-row items-center'>
              <button className='font-noto text-base font-medium text-primary mt-4'>More about our services</button>
              <img src={right_arrow} alt="right-arrow" className='w-3 mt-4 ' />
            </div>
          </div>
        </div>
        <div className='right  hidden md:block'>
          <div className='space-y-28'>
            {testimonials_2.map((data) => (
              <div className={`${data.id} border-2 border-gray-400 rounded-xl flex flex-col space-y-4 w-fit max-w-[300px] py-4 px-6 `}>
                <div className="image">
                  <img src={data.icon} alt={data.title} />
                </div>
                <div className="title">
                  <h4 className='font-lexend text-xl font-medium text-black max-w-[300px] text-left'>{data.title}</h4>
                </div>
                <div className="desc">
                  <p className={` ${" "} max-w-[280px] text-sm text-gray-400 text-left`}>{data.desc}</p>
                </div>
                <div className="learn-more flex space-x-2 flex-row items-center">
                  <button>{data.button}</button>
                  <img src={data.arrow} alt="arrow" className='w-3 mt-1' />
                </div>
              </div>
            ))}
          </div>
          <div className='professional-team mt-16'>
            <h4 className='max-w-[300px] font-lexend text-sm text-black font-normal'>We have gathered a team of professionals to craft adequate
              services you can rely on for a friction
              free setup in UAE.</h4>
            <div className='flex space-x-2 flex-row items-center'>
              <button className='font-noto text-base font-medium text-primary mt-4'>More about our services</button>
              <img src={right_arrow} alt="right-arrow" className='w-3 mt-4 ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials