import React from 'react'
import { RiArrowDownWideLine, RiCashFill, RiMapPin2Fill, RiMapPin4Line } from '@remixicon/react'

const LookingForDriver = ({setVehicleFound}) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0'
                onClick={() => {
                    // console.log(vehiclePanelOpen)
                    // setVehiclePanelOpen(false)
                    setVehicleFound(false)
                }}><RiArrowDownWideLine height={25} className="mt-2" /></h5>
            <h3 className="text-2xl font-semibold mb-5">Looking for a driver </h3>

            <div className="flex justify-between items-center flex-col gap-5">
                <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
                    alt=""
                    className="h-20"
                />
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
            </div>
        </div>
    )
}

export default LookingForDriver