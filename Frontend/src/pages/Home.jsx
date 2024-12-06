import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { RiArrowDownWideLine} from "@remixicon/react";

const Home = () => {

  const [locations , setLocations] = useState({
    pickup:'',
    destination:''
  })

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const [panelOpen, setPanelOpen] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  const handleChange = (e)=>{
    setLocations({
      ...locations,[e.target.name]:e.target.value
    })
  }

  return (
    <div className="h-screen relative">
      <img src="https://cdn.pixabay.com/photo/2014/04/04/22/59/taxi-314011_1280.png"
        alt=""
        className="w-16 absolute left-5 top-5"
      />

      <div className="h-screen w-screen">
        {/* image for temporary */}
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" flex flex-col justify-end absolute top-0 w-full h-screen">


        <div className="h-[30%] p-6 bg-white relative">


          {/* <h5 onClick={() => {setPanelOpen((prev) => !prev)}} className="absolute top-3 left-3 text-xl">
          <i className="ri-arrow-down-wide-line"></i>
          </h5> */}

            <h5 className="absolute top-6 right-6 text-2xl opacity-0"
              onClick={() => {setPanelOpen((prev) => !prev)}}
              ref={panelCloseRef}
            >
            <RiArrowDownWideLine
            size={20} // set custom `width` and `height`
            color="black" // set `fill` color
            className="my-icon" // add custom class name
            />
            </h5>

          <h4 className="text-2xl font-semibold ">Find a trip</h4>

          <form className="relative py-3" onSubmit={handleSubmit}>
            
            <div className="line absolute h-16 w-1 top-[50%] left-5 -translate-y-1/2 bg-gray-800 rounded-full"></div>
            
            <input type="text"
              name="pickup"
              value={locations.pickup}
              placeholder="Add a pick-up location"
              onChange={handleChange}
              onClick={() => {setPanelOpen(true)}}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
            />
            
            
            <input type="text"
              name="destination"
              value={locations.destination}
              onChange={handleChange}
              placeholder="Enter your destination"
              onClick={() => {setPanelOpen(true)}}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
            />
          
          </form>
        
        </div>

        <div className="bg-red-500" ref={panelRef}></div>
      </div>
    </div>
  )
}

export default Home