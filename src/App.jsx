import { Navbar, Hero, Search, WatchVideo, Mission, CardDeal, Testimonials, Pricing, Footer } from './components';
function App() {
  return (
    <div className='main-container bg-white w-full  overflow-hidden '>
    <div className='main-container flex flex-col justify-center mx-auto w-[90%] xl:max-w-[1280px] '>
    <div className={`Navbar-container `}>
        <div className={`Navbar-component `}>
          <Navbar />
        </div>
      </div>

      <div className={`Hero-Search-container`}>
        <div className={`Hero-Search-component `}>
          <Search/>
          <Hero />
        </div>
      </div>

      <div className={`other-container `}>
        <div className={`other-component  text-primary `}>
          <WatchVideo />
          <Mission />
          <CardDeal />
          <Testimonials />
          <Pricing/>
          <Footer />
        </div>
      </div>
    </div>
      

    </div>
  )
}

export default App