import { RiLogoutBoxLine } from '@remixicon/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const[confirmRidePopUp , setConfirmRidePopUpPanel]= useState(false)
  
  const confirmRidePopUpRef = useRef(null)
  const ridePopUpRef = useRef(null)

  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanel])

  

  useGSAP(function () {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopUp])


  return (
    <div className='h-screen'>

      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img src="https://cdn.pixabay.com/photo/2014/04/04/22/59/taxi-314011_1280.png" alt="" className='w-16' />
        <Link to="/home" className=" bg-white h-10 w-10 flex items-center justify-center rounded-full ">
          <RiLogoutBoxLine height={20} className='text-lg font-medium' />
        </Link>
      </div>
      <div className="h-3/5">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>

      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-12 " ref={ridePopUpRef}>
         <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>

      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-12 h-screen " ref={confirmRidePopUpRef}>
         <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome