import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'




const UserLogin = () => {
  const [formData , setFormData] = useState({
    email:'',
    password:''
  })


  const {user,setUser} = React.useContext(UserDataContext);
  const navigate = useNavigate();



  const handleChange = (e)=>{
    setFormData({
      ...formData , [e.target.name] : e.target.value
    })
  }



  const submitHandler = async(e)=>{
    e.preventDefault();

    const userData = {
      email:formData.email,
      password:formData.password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
    if (response.status === 200){
      const data = response.data
      setUser(data.user);
      localStorage.setItem('token',data.token)
      navigate('/home');
    }


    setFormData({
      email:'',
      password:''
    })
  }



  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_640.png" alt="" className=" w-16 mb-10" />
        <form onSubmit={(e) => {submitHandler(e)}}>
          <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
          <input type="text"
            name='email'
            required
            value={formData.email}
            onChange={handleChange}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Password</h3>
          <input type="password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='password'
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 mt-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Login </button>

        </form>
          <p className="text-center">New here ?<Link to='/signup' className='text-blue-600'>Create New Account </Link></p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className='flex items-center justify-center mb-5 bg-[#10b461] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain </Link>
      </div>
    </div>
  )
}

export default UserLogin