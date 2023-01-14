import { SlidesData } from "../../constants"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
function PricingSM() {
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className=" w-full">
                <Swiper
                    slidesPerView={1}
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
                                    <div key={i} className="sub-container-swiper  min-w-[300px] max-w-[300px] mx-8  rounded-md  px-4 py-4 bg-white" >
                                        <div className="title ">
                                            <h4 className="font-lexend font-bold text-xl mb-4">{d.title}</h4>
                                        </div>
                                        <div className="price flex mb-2">
                                            <h2 className="font-lexend font-bold text-2xl">{d.price}
                                                <sub className="font-noto font-medium text-sm text-slate-500 ml-2">{d.OTP}</sub>
                                            </h2>
                                        </div>
                                        <div className="subtitle">
                                            <h4 className="font-noto font-medium text-sm text-primary">{d.shortDesc}</h4>
                                        </div>
                                        <div className="points font-lexend text-sm flex flex-col items-start justify-start max-w-[330px] ">
                                            <div className="p1 flex items-start justify-start   p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p1}</p>
                                            </div>
                                            <div className="p2 flex items-center justify-start  p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p2}</p>
                                            </div>
                                            <div className="p3 flex items-center justify-start  p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p3}</p>
                                            </div>
                                            <div className="p4 flex items-center justify-start  p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p4}</p>
                                            </div>
                                            <div className="p5 flex items-center justify-start  p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p5}</p>
                                            </div>
                                            <div className="p6 flex items-center justify-start  p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p6}</p>
                                            </div>
                                            <div className="p7 flex items-center justify-start  p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p7}</p>
                                            </div>
                                            <div className="p8 flex items-center justify-start  p-2 gap-2">
                                            <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p8}</p>
                                            </div>
                                            <div className="p9 flex items-start justify-start  p-2 gap-2  ">
                                                <div className="img">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto">{d.p9}</p>
                                            </div>
                                            <div className="p10 items-start justify-start flex space-x-3   ">
                                                <div className="img ml-2">
                                                    <img src={d.btick} alt={d.p1} className="w-6 img-swiper1" />
                                                    <img src={d.wtick} alt={d.p1} className="w-6 img-swiper2 hidden" />
                                                </div>
                                                <p className="font-noto max-w-[200px]">{d.p10}</p>
                                            </div>
                                        </div>
                                        <div className="button-swiper flex justify-center mt-4 mb-1 py-4 w-full border-2 border-primary rounded-lg cursor-pointer">
                                            <button className="font-medium">{d.button}</button>
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

export default PricingSM