import { Navbar, Hero, Search, WatchVideo, Mission, CardDeal, Testimonials, Pricing, Footer } from './components';
import { ring_with_white_rectangle, blue_ellipse_1 } from "./assets"
function App() {
  return (
    <div className='main-container bg-white w-full relative overflow-hidden '>
      
      <div className='small_blue  -left-[8rem]  top-[44rem]  absolute z-[10] hidden md:block'><img src={ring_with_white_rectangle} alt="" className='w-80 h-80' /></div>
      <div className='small_blue  right-[8rem]  top-[44rem] animate-bounce  absolute z-[10] '><img src={blue_ellipse_1} alt="" className='w-20 h-20' /></div>
      
      <div className='main-container flex flex-col justify-center mx-auto w-[90%] xl:max-w-[1280px] xxs:scale-[25px] '>
        <div className={`Navbar-container `}>
          <div className={`Navbar-component `}>
            <Navbar />
          </div>
        </div>

        <div className={`Hero-Search-container`}>
          <div className={`Hero-Search-component `}>
            <Search />
            <Hero />
          </div>
        </div>

        <div className={`other-container `}>
          <div className={`other-component  `}>
            <WatchVideo />
            <Mission />
            <CardDeal />
            <Testimonials />
            <Pricing />
            <Footer />
            <div className=' mt-10 mb-16'>
              <p className="text-base text-center text-slate-400">Varaluae 2021 &copy;  All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App