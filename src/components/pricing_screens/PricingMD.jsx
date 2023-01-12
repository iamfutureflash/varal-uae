import { SlidesData } from "../../constants"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
function PricingMD() {
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className=" w-full">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={1}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="main-container flex flex-row justify-between m-0 ">
                        {SlidesData.map((d, i) => (
                            <>
                                <SwiperSlide className=" py-8 flex justify-center ">
                                    <div key={i} className="sub-container-swiper  min-w-[300px] max-w-[300px] mx-8 each_slide rounded-xl box-border px-4 py-4 " onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}>
                                        <div className="title ">
                                            <h4 className="font-lexend font-bold text-xl">{d.title}</h4>
                                        </div>
                                        <div className="price flex">
                                            <h2 className="font-lexend font-bold text-2xl">{d.price}
                                                <sub className="font-noto font-normal text-sm text-slate-500">{d.OTP}</sub>
                                            </h2>
                                        </div>
                                        <div className="subtitle">
                                            <h4 className="font-noto font-normal text-sm text-slate-500">{d.shortDesc}</h4>
                                        </div>
                                        <div className="points font-lexend flex flex-col items-start justify-center">
                                            <div className="p1 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover?d.wtick:d.btick} alt={d.p1} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p1}</p>
                                            </div>
                                            <div className="p2 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover?d.wtick:d.btick} alt={d.p2} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p2}</p>
                                            </div>
                                            <div className="p3 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover ?d.wtick:d.btick} alt={d.p3} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p3}</p>
                                            </div>
                                            <div className="p4 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover ?d.wtick:d.btick} alt={d.p4} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p4}</p>
                                            </div>
                                            <div className="p5 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover ?d.wtick:d.btick} alt={d.p5} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p5}</p>
                                            </div>
                                            <div className="p6 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover ?d.wtick:d.btick} alt={d.p6} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p6}</p>
                                            </div>
                                            <div className="p7 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover ?d.wtick:d.btick} alt={d.p7} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p7}</p>
                                            </div>
                                            <div className="p8 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover ?d.wtick:d.btick} alt={d.p8} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p8}</p>
                                            </div>
                                            <div className="p9 flex items-center justify-start  space-y-2 space-x-3">
                                                <img src={hover ?d.wtick:d.btick} alt={d.p9} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p9}</p>
                                            </div>
                                            <div className="p10 items-center justify-center   flex space-x-3 ">
                                                <img src={hover?d.wtick:d.btick} alt={d.p10} className="w-6 img-swiper" />
                                                <p className="font-noto text-base">{d.p10}</p>
                                            </div>
                                        </div>
                                        <div className="button-swiper flex justify-center mt-4 mb-1 py-4 w-full border-2 border-primary rounded-lg cursor-pointer">
                                            <button className="">{d.button}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))
                        }
                    </div>
                </Swiper>

            </div>
        </>
    )
}

export default PricingMD