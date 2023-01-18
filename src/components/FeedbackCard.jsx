import { signal, profile, right_quote, left_quote } from "../assets"
function FeedbackCard() {
  return (
    <div className='main-container space-y-12'>
      <section className='sub-container-for-5-minutes-tips mt-8'>
        <div className="heading border-l-4 border-primary mb-10">
          <h2 className="ml-4 text-black font-extrabold max-w-[300px] text-lg ">Read about our blogs for more information on our processes</h2>
        </div>
        <div className="how-to-start">
          <div className="five-min-tips sec1 flex flex-row my-4  items-center ">
            <div className="img border-2 border-primary p-4 rounded-md">
              <img src={signal} alt="" className="w-10 " />
            </div>
            <div className="content flex flex-col ml-4">
              <h4 className="text-black font-lexend text-xl font-semibold five-min-tips-title">How to start a company formation in Dubai</h4>
              <p className="text-primary five-min-tips-time">5 Minutes</p>
            </div>
          </div>
          <div className="five-min-tips sec2 flex flex-row my-4  items-center">
            <div className="img border-2 border-primary p-4 rounded-md">
              <img src={signal} alt="" className="w-10 " />
            </div>
            <div className="content flex flex-col ml-4">
              <h4 className="text-black font-lexend text-xl font-semibold five-min-tips-title">How to start an Offshore company formation in Dubai</h4>
              <p className="text-primary five-min-tips-time">5 Minutes</p>
            </div>
          </div>
          <div className="five-min-tips sec3  my-4  items-center hidden md:flex flex-row">
            <div className="img border-2 border-primary p-4 rounded-md">
              <img src={signal} alt="" className="w-10 " />
            </div>
            <div className="content flex flex-col ml-4">
              <h4 className="text-black font-lexend text-xl font-semibold five-min-tips-title">SEO Dubai: Who benefits the most?</h4>
              <p className="text-primary five-min-tips-time">5 Minutes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sub-container-feedback-of-users">
        <div className="">
          <div className="heading border-l-4 border-primary px-4 mt-4 mb-10">
            <h2 className="text-black text-lg font-extrabold max-w-[300px] ">Satisfied We are When Our Customers Are Happy</h2>
          </div>
          <div className="feedback  px-8 space-y-7">
            <div className="feedback-1 flex flex-row justify-between gap-4 pt-4">
              <div className="left-logo border-b-2 border-primary  my-2 w-32 ">
                <div className="border-2 border-primary w-fit rounded-full p-2 ">
                  <img src={profile} alt="" className="w-8 " />
                </div>
              </div>
              <div className="right-quote max-w-[250px]">
                <div className="flex flex-wrap">
                  <div className="text  w-fit flex flex-wrap gap-2">
                    <div className="w-full ">
                      <img src={left_quote} alt="" className="w-4 h-4" />
                    </div>
                    <p className="text-base text-slate-600 font-medium">
                      I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone,
                    </p>
                    <div className="w-full  ">
                      <img src={right_quote} alt="" className="w-4 h-4 items-end  mx-auto" />
                    </div>
                  </div>
                </div>
                <h4 className="author text-base text-black font-bold">Muhib Abrar</h4>
              </div>
            </div>
            <div className="feedback-2 flex flex-row justify-between gap-4">
              <div className="left-logo border-b-2 border-primary  my-2 w-32 ">
              <div className="border-2 border-primary w-fit rounded-full p-2">
                  <img src={profile} alt="" className="w-8" />
                </div>
                {/* <span className="border-b-2 border-primary bg-red-200 w-10 h-10">hi</span> */}
              </div>
              <div className="right-quote max-w-[250px]">
                <div className="flex flex-wrap">
                  <div className="text  w-fit flex flex-wrap gap-2">
                    <div className="w-full ">
                      <img src={left_quote} alt="" className="w-4 h-4" />
                    </div>
                    <p className="text-base text-slate-600 font-medium">
                    Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity,
                    </p>
                    <div className="w-full  ">
                      <img src={right_quote} alt="" className="w-4 h-4 items-end  mx-auto" />
                    </div>
                  </div>
                </div>
                <h4 className="author text-base text-black font-bold">Colin Saldahna</h4>
              </div>
            </div>
            <div className="feedback-3 hidden md:flex flex-row justify-between gap-4 pb-4">
              <div className="left-logo border-b-2 border-primary  my-2 w-32 ">
              <div className="border-2 border-primary w-fit rounded-full p-2">
                  <img src={profile} alt="" className="w-8" />
                </div>
              </div>
              <div className="right-quote max-w-[250px]">
                <div className="flex flex-wrap">
                  <div className="text  w-fit flex flex-wrap gap-2">
                    <div className="w-full ">
                      <img src={left_quote} alt="" className="w-4 h-4" />
                    </div>
                    <p className="text-base text-slate-600 font-medium">
                    Your advise was so complete that I actually realized how beneficial this would be to my clients and my business.
                    </p>
                    <div className="w-full  ">
                      <img src={right_quote} alt="" className="w-4 h-4 items-end  mx-auto" />
                    </div>
                  </div>
                </div>
                <h4 className="author text-base text-black font-bold">Muhib Abrar</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeedbackCard

