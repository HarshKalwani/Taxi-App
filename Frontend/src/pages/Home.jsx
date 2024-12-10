import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { RiArrowDownWideLine} from "@remixicon/react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {

  const [locations , setLocations] = useState({
    pickup:'',
    destination:''
  })

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)


  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel]=useState(false)
  const [vehicleFound , setVehicleFound] = useState(false)
  const [waitingForDriver , setWaitingForDriver] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  // Locatin Panel on LocationSearchPanel component 
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])


  // Vehicle Select panel on VehiclePanel Component
  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])


  // Vehicle Info panel on Confirm Ride component 
  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])


  // Searching For a Vehicle panel at components
  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])


  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])


  const handleChange = (e)=>{
    setLocations({
      ...locations,[e.target.name]:e.target.value
    })
  }

  return (
    <div className="h-screen relative overflow-hidden">
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

        <div className="bg-white h-0" ref={panelRef}>
          <LocationSearchPanel vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} setPanelOpen={setPanelOpen}/> 
        </div>
      </div>

      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-12" ref={vehiclePanelRef}>
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-12" ref={confirmRidePanelRef}>
        <ConfirmedRide setConfirmRidePanel = {setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-12" ref={vehicleFoundRef}>
        <LookingForDriver setVehicleFound= {setVehicleFound}/>
      </div>

      <div 
        className="fixed w-full z-10 bottom-0 bg-white py-6 px-3 pt-12" 
        // ref={waitingForDriverRef}
      >
        <WaitingForDriver setWaitingForDriver = {setWaitingForDriver}/>
      </div>
    </div>
  )
}

export default Home