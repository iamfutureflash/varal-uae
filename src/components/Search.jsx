import { search,blue_ellipse_1,blue_ellipse_7,brown_ellipse_2 } from '../assets'

function Search() {
  return (
    <div className='  flex md:justify-end  w-full relative  '>
      <div className='small_blue animate-bounce top-5 left-10  absolute z-10 w-10 h-10'><img src={blue_ellipse_1} alt="" /></div>
      <div className='small_blue  animate-bounce right-80  top-24 absolute z-10 w-10 h-10'><img src={brown_ellipse_2} alt="" /></div>
      <div className='small_blue animate-bounce  right-96  top-4 absolute z-10 w-6 h-6'><img src={blue_ellipse_7} alt="" /></div>
      <div className='mid_blue'></div>
      <div className="inner-container flex bg-white border-[3px] border-primary rounded-md px-2 py-1 w-full mx-4 my-2 md:w-fit ">
        <img src={search} alt="search" className={`text-primary font-bold w-6 h-6 md:w-8 md:h-8`} />
        <input type="search" name="Search" id="search" className='rounded-md  focus:border-none active:border-none
      placeholder-primary pl-4'
          placeholder='Search a Team | Topic' />
      </div>
    </div>
  )
}

export default Search