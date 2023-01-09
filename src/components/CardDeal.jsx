import { card_deal } from '../constants/'

function CardDeal() {
  return (
    <div className='main-container py-2 '>
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