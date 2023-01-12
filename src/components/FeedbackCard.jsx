import {signal} from "../assets"

function FeedbackCard() {
  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className="heading">
          <h2>Read about our blogs for more information on our processes</h2>
        </div>
        <div className="how-to-start">
          <div className="sec1 flex flex-row my-4  items-center">
            <div className="img border-2 border-primary p-4 rounded-md">
              <img src={signal} alt="" className="w-10 "/>
            </div>
            <div className="content flex flex-col ml-4">
              <h4 className="text-black font-lexend text-xl font-semibold">How to start a company formation in Dubai</h4>
              <p className="text-primary">5 Minutes</p>
            </div>
          </div>
          <div className="sec2 flex flex-row my-4  items-center">
            <div className="img border-2 border-primary p-4 rounded-md">
              <img src={signal} alt="" className="w-10 "/>
            </div>
            <div className="content flex flex-col ml-4">
              <h4 className="text-black font-lexend text-xl font-semibold">How to start an Offshore company formation in Dubai</h4>
              <p className="text-primary">5 Minutes</p>
            </div>
          </div>
          <div className="sec3 flex flex-row my-4  items-center">
            <div className="img border-2 border-primary p-4 rounded-md">
              <img src={signal} alt="" className="w-10 " />
            </div>
            <div className="content flex flex-col ml-4">
              <h4 className="text-black font-lexend text-xl font-semibold">SEO Dubai: Who benefits the most?</h4>
              <p className="text-primary">5 Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard