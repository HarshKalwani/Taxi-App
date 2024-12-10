import { RiArrowDownWideLine, RiUser3Fill } from '@remixicon/react'

const VehiclePanel = ({ setVehiclePanelOpen , setConfirmRidePanel }) => {
    return (
        <div>
            {/* <h5 className="p-3 w-full absolute top-0 bg-red-500"><RiArrowDownWideLine/></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle </h3> */}
            <div className="flex w-full justify-between ">
                <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle </h3>
                <h5 onClick={() => {
                    // console.log(vehiclePanelOpen)
                    setVehiclePanelOpen(false)
                }}><RiArrowDownWideLine height={25} className="mt-2" /></h5>
            </div>

            {/* Normal Cab  */}
            <div
                onClick={ () => {
                    setConfirmRidePanel(true)
                    setVehiclePanelOpen(false)
                }}
                className="flex items-center p-3 justify-between w-full border-2 active:border-black  rounded-xl mb-2"
            >
                <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
                    alt=""
                    className="h-10"
                />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-sm">Uber Go  <span> <RiUser3Fill className=" inline" height={16} /> 4</span> </h4>
                    <h5 className="font-medium text-sm">2 min away</h5>
                    <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹193.20</h2>
            </div>

            {/* bike  */}
            <div 
                className="flex items-center p-3 justify-between w-full border-2 active:border-black rounded-xl mb-2"
                onClick={ () => {
                    setConfirmRidePanel(true)
                    setVehiclePanelOpen(false)
                }}
            >
                <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                    alt=""
                    className="h-10"
                />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-sm">Moto<span> <RiUser3Fill className=" inline" height={16} /> 1</span> </h4>
                    <h5 className="font-medium text-sm">3 min away</h5>
                    <p className="font-normal text-xs text-gray-600">Affordable, motorcycle rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹65.00</h2>
            </div>

            {/* premium cab  */}
            <div 
                className="flex items-center p-3 justify-between w-full border-2 active:border-black rounded-xl mb-2"
                onClick={ () => {
                    setConfirmRidePanel(true)
                    setVehiclePanelOpen(false)
                }}
            >
                <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714472148/assets/95/a05538-918b-42d8-afe7-3c92325f2fd4/original/UberLux.png"
                    alt=""
                    className="h-10 mix-blend-multiply"
                />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-sm">Premier<span> <RiUser3Fill className=" inline" height={16} /> 4</span> </h4>
                    <h5 className="font-medium text-sm">4 min away</h5>
                    <p className="font-normal text-xs text-gray-600">Comfortable sedans, top-quality drivers</p>
                </div>
                <h2 className="text-lg font-semibold">₹193.20</h2>
            </div>

            {/* Auto  */}
            <div 
                className="flex items-center p-3 justify-between w-full border-2 active:border-black rounded-xl mb-2"
                onClick={ () => {
                    setConfirmRidePanel(true)
                    setVehiclePanelOpen(false)
                }}
            >
                <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt=""
                    className="h-10 mix-blend-multiply"
                />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-sm">Uber Auto<span> <RiUser3Fill className=" inline" height={16} />3</span> </h4>
                    <h5 className="font-medium text-sm">2 min away</h5>
                    <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹113.68</h2>
            </div>
        </div>
    )
}

export default VehiclePanel