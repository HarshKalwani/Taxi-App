import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'



const UserSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const {user,setUser} = React.useContext(UserDataContext)

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home');
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_640.png" alt="" className=" w-16 mb-10" />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>Enter Your Name </h3>
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

          <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
          <input type="text"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            placeholder='email@example.com'
          />
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
          >Create Account </button>

        </form>
        <p className="text-center">Already have a account ?<Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className="text-gray-500 text-[10px] leading-tight">This side is protected by reCAPTCHA and the <span className='underline '>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>
      </div>
    </div>
  )
}

export default UserSignup