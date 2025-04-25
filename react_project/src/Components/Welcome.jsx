import React from 'react'
import { useNavigate } from 'react-router-dom';
function Welcome() {
    const navigate = useNavigate();
  return (
    <>
    <div className=' flex items-center justify-center min-h-screen bg-gray-50  '>
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[600px] sm:h-[550px] md:h-[60px] bg-gray-50 rounded-xl  p-4">
    <div className='mt-70 sm:mt-40 md:mt-32 lg:mt-24 xl:mt-16'>
    <h1 className="font-bold text-[30px] text-gray-800">Welcome to PopX</h1>
    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere iste </p>
    <div className="space-y-2  mt-4">
          <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition" onClick={() => navigate('/signup')}>
            Create Account
          </button>
          <button className="w-full bg-purple-300 font-bold py-2 rounded-md hover:bg-gray-300 transition " onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
        
    </div>
  </div>
    </div>
      
    </>
  )
}

export default Welcome
