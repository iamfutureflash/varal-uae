import { SlidesData } from "../constants"
import Slides from "./Slider/Slider"
function Pricing() {
  return (
    <>
      <section >
        <div className="bg-red-500 w-full">
          <div className="main-container flex overflow-x-scroll p-6 slide-container">
            {SlidesData.map((d, i) => (
              <>
                <div className="sub-container bg-red-200 max-w-[300px] mx-8 each_slide rounded-xl box-border px-4 py-4">
                  <div className="title ">
                    <h4 className="font-lexend">{d.title}</h4>
                  </div>
                  <div className="price">
                    <h2>{d.price}</h2>
                    <p>{d.OTP}</p>
                  </div>
                  <div className="subtitle">
                    <h4>{d.shortDesc}</h4>
                  </div>
                  <div className="points">
                    <div className="p1 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p1} className="w-6" />
                      <p className="font-noto text-base">{d.p1}</p>
                    </div>
                    <div className="p2 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p2} className="w-6" />
                      <p className="font-noto text-base">{d.p2}</p>
                    </div>
                    <div className="p3 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p3} className="w-6" />
                      <p className="font-noto text-base">{d.p3}</p>
                    </div>
                    <div className="p4 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p4} className="w-6" />
                      <p className="font-noto text-base">{d.p4}</p>
                    </div>
                    <div className="p5 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p5} className="w-6" />
                      <p className="font-noto text-base">{d.p5}</p>
                    </div>
                    <div className="p6 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p6} className="w-6" />
                      <p className="font-noto text-base">{d.p6}</p>
                    </div>
                    <div className="p7 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p7} className="w-6" />
                      <p className="font-noto text-base">{d.p7}</p>
                    </div>
                    <div className="p8 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p8} className="w-6" />
                      <p className="font-noto text-base">{d.p8}</p>
                    </div>
                    <div className="p9 flex items-center justify-start  space-y-2 space-x-3">
                      <img src={d.btick} alt={d.p9} className="w-6" />
                      <p className="font-noto text-base">{d.p9}</p>
                    </div>
                    <div className="p10 items-center justify-start  space-y-2 flex space-x-3">
                      <img src={d.btick} alt={d.p10} className="w-6" />
                      <p className="font-noto text-base">{d.p10}</p>
                    </div>
                  </div>
                  <div className="button">
                    <button>{d.button}</button>
                  </div>
                </div>
              </>
            ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing