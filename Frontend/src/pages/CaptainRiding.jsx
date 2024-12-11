import { useGSAP } from '@gsap/react'
import { RiArrowDownWideLine, RiLogoutBoxLine } from '@remixicon/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)


    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])
    return (
        <div className='h-screen '>
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img src="https://cdn.pixabay.com/photo/2014/04/04/22/59/taxi-314011_1280.png" alt="" className='w-16' />
                <Link to="/home" className=" bg-white h-10 w-10 flex items-center justify-center rounded-full ">
                    <RiLogoutBoxLine height={20} className='text-lg font-medium' />
                </Link>
            </div>
            <div className="h-4/5">
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>

            <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'>
                <h5 className='p-1 text-center absolute top-0 w-[90%]'
                    onClick={() => {
                        // console.log(vehiclePanelOpen)
                        // setVehiclePanelOpen(false)
                        // setConfirmRidePanel(false)
                        // setRidePopUpPanel(false)
                    }}><RiArrowDownWideLine height={25} className="mt-2 inline" />
                </h5>
                <h4 className='text-xl font-semibold'>4 min away </h4>
                <button 
                    onClick={() => setFinishRidePanel(true)}
                    className='mt-1 bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'
                >
                    Complete Ride 
                </button>
            </div>
            <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-12 " ref={finishRidePanelRef}>
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>

        </div>
    )
}

export default CaptainRiding