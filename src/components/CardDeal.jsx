import { card_deal } from '../constants/'
import { blue_ellipse_1, brown_ellipse_1 } from '../assets'

function CardDeal() {
  return (
    <div className='main-container py-2 relative'>
      <div className='small_blue  right-[37rem]  top-[14rem] animate-bounce  absolute z-[10] '><img src={brown_ellipse_1} alt="" className='w-12 h-12' /></div>
      <div className='small_blue  left-[20rem]  top-[13rem] animate-bounce  absolute z-[10] '><img src={blue_ellipse_1} alt="" className='w-6 h-6' /></div>
      <div className='sub-container flex flex-row flex-wrap justify-center items-center '>
        {card_deal.map((info) => (
          <>
            <div className='text-start max-w-[260px]
            mx-4 mt-8 space-y-3 '>
              <div className='image   '>
                <img src={info.icon} alt={info.title} className="w-10 mx-auto sm:mx-0"/>
              </div>
              <div className='heading4'>
              <h4 className='
              font-lexend font-normal text-base text-black xxs:text-center sm:text-start'>{info.title}</h4>
              </div>
              <div className='paragraph'>
              <p className='font-noto font-medium text-xs text-gray-500 xxs:text-center sm:text-start'>{info.desc}</p>
              </div>
              <div className='paragraph  text-center sm:text-start '>
              <button className='font-noto  font-medium text-sm text-secondary '>{info.button}</button>
              </div>
            </div>
          </>
        ))
        }
      </div>
    </div>
  )
}

export default CardDeal