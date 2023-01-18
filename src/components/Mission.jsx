import React from 'react'
import { blue_ellipse_1, ring_with_white_rectangle } from "../assets"
function Mission() {
  return (
    <section className='mission-section   py-1 relative'>

      <div className='small_blue  left-[29rem]  top-[.1rem] absolute z-20 animate-bounce'><img src={blue_ellipse_1} alt="" className='w-12 h-12' /></div>
      

      <div className="inner-contain flex flex-col justify-center items-center">
        <div className="h2 mb-4 ">
          <h2 className='font-lexend font-extrabold text-xl text-center text-black'>
            <span className='border-secondary border-b-4'>Dedicated</span> <br />
            to our mission we are</h2>
        </div>
        <div className="paragraph">
          <p className='max-w-[440px] text-center font-noto text-gray-400 font-medium'>
            Our services include Company Formation & Renewals,  Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.</p>
        </div>
      </div>
    </section>
  )
}

export default Mission