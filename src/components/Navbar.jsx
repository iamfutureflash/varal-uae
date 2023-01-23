import { useState } from 'react'
import { varal_uae, menu, close } from "../assets"
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex flex-row justify-between items-center  my-2 px-4 bg-white '>
      <div className=''>
        <img src={varal_uae} alt="varal uae logo" className='' />
      </div>
      <div className='for-small-screen md:hidden z-10 '>
        <img src={toggle?close:menu} alt="menu" className='w-10 h-10 relative' onClick={()=>setToggle((toggle)=>!toggle)} />
        <div className={`for-small-screen-visible-on-click ${toggle?'flex':'hidden'}  absolute flex-col justify-center items-center space-x-4  left-4 right-4    slider_gradient rounded-lg mt-5 sidebar`}>
          <ul className='flex flex-col  justify-center item-center   text-white capitalize  text-xl font-noto font-medium leading-10 w-[90vw]'>
            <li className='cursor-pointer text-center py-2'>home</li>
            <li className='cursor-pointer text-center py-2'>service</li>
            <li className='cursor-pointer text-center py-2'>pricing</li>
            <li className='cursor-pointer text-center py-2'>about us</li>
          </ul>
          <button className='hover:bg-primary text-white px-1 py-1 hover:px-1 hover:py-1 rounded-sm shadow-sm text-lg font-noto cursor-pointer font-medium leading-10'>Start a Company</button>
        </div>
      </div>
      <div className='hidden md:block  py-1 '>
        <div className='flex flex-row justify-center items-center space-x-4'>
          <ul className='  flex flex-row  justify-center item-center   text-black capitalize space-x-4 text-lg font-noto'>
            <li className='cursor-pointer'>home</li>
            <li className='cursor-pointer'>service</li>
            <li className='cursor-pointer'>pricing</li>
            <li className='cursor-pointer'>about us</li>
          </ul>
          <button className='bg-primary text-white px-4 py-3 rounded-sm shadow-sm text-lg font-medium font-noto cursor-pointer'>Start a Company</button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar