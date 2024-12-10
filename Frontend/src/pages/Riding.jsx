import { RiCashFill, RiHome5Line, RiMapPin2Fill, RiMapPin4Line } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>

            <Link to="/home" className="fixed bg-white h-10 w-10 flex items-center justify-center rounded-full right-2 top-2 ">
                <RiHome5Line height={20} className='text-lg font-medium'/>
            </Link>
            <div className="h-1/2">
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>

            <div className='h-1/2 p-4'>
                <div className="flex items-center justify-between">
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
                        alt=""
                        className="h-12"
                    />
                    <div className="text-right ">
                        <h2 className='text-lg font-medium'>Sarthak </h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className="flex justify-between items-center flex-col gap-5">
                    <div className="w-full mt-5 ">
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
                    <button className='w-full mt-5 bg-green-500 text-white font-semibold p-3 rounded-lg'>Make me payment </button>
                </div>
            </div>
        </div>
    )
}

export default Riding