import { laptop_working_view, brown_ellipse_1 } from "../assets"

function Hero() {
  return (
    <section className=' flex flex-col md:flex-row justify-between items-center  mx-4 md:mx-0 relative'>
      <div className='small_blue animate-bounce  left-40  top-12 absolute z-20 w-4 h-4'><img src={brown_ellipse_1} alt="" /></div>
      <div className='md:on-left sm:on-top flex flex-col  w-full'>
        <div className="claim text-start text-primary font-lexend font-bold lg:font-normal mt-10 mb-2 ">
          <h4>Claim a Free Quote</h4>
        </div>
        <div className="get-stated-heading font-lexend font-extrabold xxs:text-xl sm:text-2xl md:text-4xl">
          <h1 className="leading-10 md:leading-[50px]">
            <span className="border-[6px] border-x-0 border-t-0 border-b-secondary "> Get started o<span className="border-b-[6px] border-white">n</span></span>  fulfilling
            <br />
            your Dubai or UAE <br className="hidden md:block"/>
            dream.</h1>
        </div>
        <div className="sm:image my-8 md:hidden">
          <img src={laptop_working_view} alt="laptop working image" />
        </div>
        <div className="offshore font-noto text-primary font-medium">
          <h6>UAE & Offshore Company</h6>
        </div>
        <div className="offshore-desc font-lexend font-bold text-gray-500 my-4">
          <p className="max-w-[400px]">We provide you with information about UAE or
            Offshore Company Registration & help  you setup your company with a bank  account and
            visas.</p>
        </div>
        <div className="2-buttons flex xxs:flex-col xs:flex-row  space-x-0 justify-center ss:justify-start ">
          <input className="bg-primary xxs:my-2 px-4 py-4 font-noto font-medium xxs:rounded-md ss:rounded-l-md ss:rounded-r-none   text-white" type="button" value="Start a Company" />
          <input className="bg-white xxs:my-2 px-4 py-4 font-noto font-medium text-primary xxs:rounded-md ss:rounded-l-none ss:rounded-r-md border-primary border-2" type="button" value="Renew a Company" />
        </div>
      </div>
      <div className='md:on-right sm:on-bottom hidden md:block w-full animate-pulse ease-linear'>
      <img src={laptop_working_view} alt="laptop working image " className="w-full " />
      </div>
    </section>
  )
}

export default Hero