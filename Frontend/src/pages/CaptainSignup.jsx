import React, { useState } from "react"
import { Link } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainContext"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    vehicleColor: '',
    vehiclePlate: '',
    vehicleCapacity: '',
    vehicleType: ''
  })

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: {
        firstName: formData.firstName,
        lastName: formData.lastName
      },
      email: formData.email,
      password: formData.password,
      vehicle: {
        color: formData.vehicleColor,
        plate: formData.vehiclePlate,
        capacity: formData.vehicleCapacity,
        vehicleType: formData.vehicleType
      }
    }

    console.log(captainData)

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
    if(response.status===201){
      const data = response.data;
      setCaptain(data)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      vehicleColor: '',
      vehiclePlate: '',
      vehicleCapacity: '',
      vehicleType: ''
    })
  }
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/08/16/14/35/taxi-1598104_1280.png" alt="" className=" w-16 mb-10" />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>Whats our captain name </h3>
          <div className="flex gap-4 mb-5">
            <input type="text"
              value={formData.firstName}
              name='firstName'
              onChange={handleChange}
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
              placeholder='First name'
            />

            <input type="text"
              name='lastName'
              onChange={handleChange}
              value={formData.lastName}
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
              placeholder='Last name'
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>Whats our Captain email</h3>
          <input type="text"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Vehicle Information </h3>
          <div className="flex gap-4 mb-5">
            <input type="text"
              value={formData.vehicleColor}
              name='vehicleColor'
              onChange={handleChange}
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
              placeholder='Vehicle Color'
            />

            <input type="text"
              name='vehiclePlate'
              onChange={handleChange}
              value={formData.vehiclePlate}
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
              placeholder='Vehicle Plate'
            />
          </div>

          <div className="flex gap-4 mb-5">
            <input type="number"
              value={formData.vehicleCapacity}
              name='vehicleCapacity'
              onChange={handleChange}
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
              placeholder='Vehicle Capacity'
            />

            <select name="vehicleType"
              value={formData.vehicleType}
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm overflow-auto'
              onChange={handleChange}
              required
            >
              <option value="" disabled className="text-sm">Select Vehicle Type</option>
              <option value="car" className="text-sm">car</option>
              <option value="motorcycle" className="text-sm">motorcycle</option>
              <option value="auto" className="text-sm">auto</option>
            </select>
          </div>

          <h3 className='text-lg font-medium mb-2'>Password</h3>
          <input type="password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='password'
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-5 mt-7 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
          >Create a account </button>

        </form>
        <p className="text-center">Already have a account ?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className="text-gray-500 text-[10px] leading-tight">This side is protected by reCAPTCHA and the <span className='underline '>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>
      </div>
    </div>
  )
}

export default CaptainSignup