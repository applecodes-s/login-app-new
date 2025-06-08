import React from 'react'
import { useNavigate } from "react-router-dom";


const dashboard = () => {
    const navigate = useNavigate()

    return(
        <div className="flex flex-col items-center justify-center h-screen text-center bg-black">
             <nav className="absolute top-4 left-4 z-20 font-bold text-3xl sm:text-3xl md:text-3xl text-red-600 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10">
  NETFLIX
</nav>
        <h1 className="text-2xl font-bold text-red-500 mb-4">Welcome to Your Dashboard</h1>
        <p className="mb-6 text-white">You have successfully logged in.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
         back
        </button>
      </div>    
    )
}

export default dashboard
