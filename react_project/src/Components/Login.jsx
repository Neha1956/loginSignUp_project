import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    const navigate=useNavigate();
    const handlelogin=()=>{
        const storeUser=JSON.parse(localStorage.getItem('user'));
        if(storeUser?.email===email && storeUser?.password===password){
            navigate('/profile')
        }else{
            alert('User not found. Please register first.');
        }
    };
  return (
    <>
     <div className=' flex items-center justify-center min-h-screen bg-gray-50  '>
     <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-50 mb-60 rounded-xl mt-0 p-4">
     <h1 className="font-bold text-[24px] text-gray-800"> PopX account</h1>
     <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere iste </p>
     <div className="w-full mt-4 space-y-4">
  <label htmlFor="email" className="block mb-[-6px] ml-3 bg-gray-50 px-1 text-[15px] text-blue-600 font-bold  z-10 relative w-max">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    placeholder="Enter email address"
    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
    onChange={(e) => setEmail(e.target.value)}
  />
   <label htmlFor="password" className="block mb-[-6px] ml-3 bg-gray-50 px-1 text-[15px] text-blue-600 font-bold  z-10 relative w-max">
    Password
  </label>
  <input
    type="password"
    id="password"
    placeholder="Enter password"
    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
    onChange={(e) => setPassword(e.target.value)}
  />
    <button className="w-full bg-gray-300 text-white  font-bold py-2 rounded-md hover:bg-gray-300 transition "  onClick={ handlelogin}>
            Login
          </button>
</div>

            </div>
            
            </div> 
    </>
  )
}

export default Login
