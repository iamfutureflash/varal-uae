import {search} from '../assets'

function Search() {
  return (
    <div className='  flex md:justify-end  w-full  '>
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