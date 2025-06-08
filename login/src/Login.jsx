import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import bg from '../src/assets/netflix-bg.jpg'

const Login = () => {
    // State variables for email, password, and errors
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const  [error, setError] = useState('')
  const navigate = useNavigate()

  // handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    try {
      const response = await axios.post("https://login-app-new-backend.onrender.com/api/login", { email, password });

      if (response.data.success) {
        navigate("/dashboard")
      } else {
        setError(response.data.message)
      }
    } catch(err) {
      setError("Server error. Please try again.")
    }
    }

  return (
    <div className='bg-black relative'>
        <div className='absolute inset-0'>
        <img src={bg} className='w-full h-full object-cover z-10' alt="" />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        <nav className="absolute top-4 left-4 z-20 font-bold text-3xl sm:text-3xl md:text-3xl text-red-600 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10">
  NETFLIX
</nav>
    <div className='flex items-center justify-center h-screen  text-white z-20 relative'>
      <div className='bg-black bg-opacity-80 p-14 rounded-lg w-[400px] h-[550px] shadow-lg'>
        <h1 className='text-3xl font-bold mb-6 '>Sign in</h1>

        
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                <input type="email" 
                placeholder='Your email' 
                className='w-full p-3 bg-black bg-opacity-10 rounded border border-zinc-500  text-white focus:outline-1'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                
                </div>
                <div>
                <input type="password" 
                placeholder='Password' 
                className='w-full p-3 bg-black bg-opacity-20 rounded border border-zinc-500  text-white focus:outline-2'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                /> 
            
                </div>
     
                <button type='submit' 
                className='w-full bg-red-600 hover:bg-red-700 transition p-2 rounded text-white font-semibold'
                >Sign in</button>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                

            </form>
            <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <label>
            <input type="checkbox" className="mr-1" /> Remember me
          </label>
          <a href="#" className="hover:underline">Need help?</a>
        </div>

        <p className="text-gray-400 text-sm mt-6 text-center">
          New to Netflix? <a href="#" className="text-white hover:underline">Sign up now</a>.
        </p>
        
      </div>
    </div>
    </div>
  )
}

export default Login
