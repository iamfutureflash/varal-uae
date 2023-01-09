import {play} from "../assets"
function WatchVideo() {
  return (
    <div className=' flex flex-col md:flex-row flex-wrap justify-center items-center py-16 space-x-4'>
    <p className="font-noto font-semibold text-xl leading-8 max-w-[350px] text-center">
    Watch the video about UAE or 
    Offshore Company Registration
    </p>
    <div className="mt-2 ">
    <img src={play} alt="play button" className=" w-10 border-2 border-primary rounded-full items-center px-[.3rem] py-[.3rem]" />
    </div>
    </div>
  )
}

export default WatchVideo
