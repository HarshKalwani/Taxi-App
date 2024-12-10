import { RiMapPinFill } from "@remixicon/react"


const LocationSearchPanel = ({setVehiclePanelOpen , setPanelOpen}) => {
  // sampleArray for location 

  // console.log(props)

  const locations = [
    "331A Mahavir puram City, Behind CHB, Jodhpur",
    "33B Hari-om Nagar,new Suraj Nagar CHB, Jodhpur",
    "31A Suraj nagar, near Nehar road, CHB, Jodhpur",
    "91, Shankar Nagar, near Jhawar Road, Jodhpur"
  ]
  return (
    <div>
      {/* This is just a sample data  */}

      {locations.map((address , i) => (
        <div
          onClick={() => {
            setPanelOpen(false)
            setVehiclePanelOpen(true);
          }} 
          className="flex items-center justify-start gap-4 my-2 active:border-black p-3 rounded-xl border-gray-50" 
          key={i}
        >
        <h2 className="bg-[#eee] h-10 w-10 flex rounded-full items-center justify-center "> <RiMapPinFill size="20"/> </h2>
        <h4 className="font-medium">{address}</h4>
      </div>
      ))}

      {/* <div className="flex items-center justify-start gap-4 my-2 active:border-black p-3 rounded-xl border-gray-50">
        <h2 className="bg-[#eee] h-10 w-10 flex rounded-full items-center justify-center "> <RiMapPinFill size="20"/> </h2>
        <h4 className="font-medium">331A Mahavir puram City , CHB , Jodhpur</h4>
      </div>
      <div className="flex items-center justify-start gap-4 my-2 active:border-black p-3 rounded-xl border-gray-50">
        <h2 className="bg-[#eee] h-10 w-10 flex rounded-full items-center justify-center "> <RiMapPinFill size="20"/> </h2>
        <h4 className="font-medium">331A Mahavir puram City , CHB , Jodhpur</h4>
      </div>
      <div className="flex items-center justify-start gap-4 my-2 active:border-black p-3 rounded-xl border-gray-50">
        <h2 className="bg-[#eee] h-10 w-10 flex rounded-full items-center justify-center "> <RiMapPinFill size="20"/> </h2>
        <h4 className="font-medium">331A Mahavir puram City , CHB , Jodhpur</h4>
      </div>
      <div className="flex items-center justify-start gap-4 my-2 active:border-black p-3 rounded-xl border-gray-50">
        <h2 className="bg-[#eee] h-10 w-10 flex rounded-full items-center justify-center "> <RiMapPinFill size="20"/> </h2>
        <h4 className="font-medium">331A Mahavir puram City , CHB , Jodhpur</h4>
      </div> */}
      
    </div>
  )
}

export default LocationSearchPanel