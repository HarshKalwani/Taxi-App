import { useState } from 'react'
import { Link} from 'react-router-dom'
const CaptainLogin = () => {
  const [captainData, setCaptainData] = useState({
    email: '',
    password: ''
  })

  // const [userData , setUserData] = useState({});

  const handleChange = (e) => {
    setCaptainData({
      ...captainData, [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("formData", captainData)
    // setUserData({
    //   email:formData.email,
    //   password:formData.password
    // })
    // console.log('userData', userData)
    setCaptainData({
      email: '',
      password: ''
    })
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/08/16/14/35/taxi-1598104_1280.png" alt="" className=" w-24 mb-10" />
        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
          <input type="text"
            name='email'
            required
            value={captainData.email}
            onChange={handleChange}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Password</h3>
          <input type="password"
            name='password'
            value={captainData.password}
            onChange={handleChange}
            placeholder='password'
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 mt-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Login </button>

        </form>
        <p className="text-center">Join a fleet?<Link to='/captain-signup' className='text-blue-600'>Register as a captain </Link></p>
      </div>
      <div>
        <Link
          to="/login"
          className='flex items-center justify-center mb-5 bg-[#f19e2b] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User </Link>
      </div>
    </div>
  )
}

export default CaptainLogin