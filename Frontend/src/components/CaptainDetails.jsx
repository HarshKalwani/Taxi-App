import { RiBookletFill, RiSpeedUpLine, RiTimer2Line } from '@remixicon/react'


const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className="flex items-center justify-start gap-3">
                    <img
                        src="https://photos.lensculture.com/large/5dd2fa6e-fe8d-469f-959b-46299ced511d.jpg" alt=""
                        className='h-10 w-10 rounded-full object-cover'
                    />
                    <h4 className='text-lg font-medium'>Patel ji </h4>
                </div>
                <div>
                    <h4 className='font-semibold text-xl'>₹295.20</h4>
                    <p className='text-sm  text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-between gap-5 items-start '>
                <div className="text-center">
                    <RiTimer2Line className='text-3xl mb-2 font-thin inline' />
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours online</p>
                </div>
                <div className="text-center">
                    <RiSpeedUpLine className='text-3xl mb-2 font-thin inline' />
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours online</p>
                </div>
                <div className="text-center">
                    <RiBookletFill className='text-3xl mb-2 font-thin inline' />
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails