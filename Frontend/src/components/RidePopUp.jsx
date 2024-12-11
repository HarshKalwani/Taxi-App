import { RiArrowDownWideLine, RiCashFill, RiMapPin2Fill, RiMapPin4Line } from '@remixicon/react'
import React from 'react'

const RidePopUp = ({setRidePopUpPanel , setConfirmRidePopUpPanel}) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0'
                onClick={() => {
                    // console.log(vehiclePanelOpen)
                    // setVehiclePanelOpen(false)
                    // setConfirmRidePanel(false)
                    setRidePopUpPanel(false)
                }}><RiArrowDownWideLine height={25} className="mt-2 inline" /></h5>
            <h3 className="text-2xl font-semibold mb-5">New Ride Available </h3>

            <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-2">
                <div className="flex items-center gap-3">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvpDwuCY8BkKF9QaNeSPXhOlsoCR5yarkE95hnnOu5j537BpRCGlHxg6jluwvquhcww4&usqp=CAU" alt="" 
                        className='h-12 w-12 rounded-full object-cover '   
                    />
                    <h2 className='text-xl font-medium'>Rashi Jii</h2>
                </div>

                <div className="">
                    <h5 className='text-lg font-semibold'>2.2 Km</h5>
                </div>
            </div>

            <div className="flex justify-between items-center flex-col gap-5">
                {/* <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
                    alt=""
                    className="h-20"
                /> */}
                <div className="w-full mt-5 ">
                    <div className='flex items-center gap-5 p-2 border-b-2'>
                        <RiMapPin2Fill height={19} />
                        <div>
                            <h3 className='font-medium text-lg'>562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">Kaylana Lake, Jodhpur</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-5 p-2 border-b-2'>
                            <RiMapPin4Line height={19} />
                            <div>
                                <h3 className='font-medium text-lg'>Third Wave Coffee</h3>
                                <p className="text-sm -mt-1 text-gray-600">Pal Road, Near Big'O restaurant</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-5 p-2 '>
                            <RiCashFill height={19} />
                            <div>
                                <h3 className='font-medium text-lg'>193.20</h3>
                                <p className="text-sm -mt-1 text-gray-600">Cash </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 w-full justify-center items-center'>
                <button
                    className='w-1/2 mt-1 bg-green-500 text-white font-semibold p-3 rounded-lg'
                    onClick={() => {
                        // setVehicleFound(true)
                        // setConfirmRidePanel(false)
                        setConfirmRidePopUpPanel(true)
                        setRidePopUpPanel(false)
                    }}
                >
                    Accept
                </button>

                <button
                    className='w-1/2 mt-1 bg-gray-300 text-gray-700 font-semibold p-3 rounded-lg'
                    onClick={() => {
                        // setVehicleFound(true)
                        // setConfirmRidePanel(false)
                        setRidePopUpPanel(false)
                    }}
                >
                    Ignore 
                </button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp