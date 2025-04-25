import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        companyName: '',
        isAgency:'',
      });
      const navigate=useNavigate();
      const handlesignup = () => {
       
        const { name, email, phone, password, companyName, isAgency } = formData;
          // Basic validation check
  if (!name || !email || !phone || !password || !isAgency) {
    alert("Please fill in all required fields.");
    return;
  }
        const user = { name, email, phone, password, companyName, isAgency };
      
        localStorage.setItem('user', JSON.stringify(user));
        alert("Registration successful!");
        navigate('/login');
      }
          
  return (
    <>
      
      <div className=' flex items-center justify-center min-h-screen bg-gray-50  '>
     <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-50 rounded-xl mt-0 p-4">
     <h1 className="font-bold text-[24px] text-gray-800"> PopX account</h1>
    
     <div className="w-full mt-4 space-y-4">
     <label htmlFor="name" className="block mb-[-6px] ml-3 bg-gray-50 px-1 text-[15px] text-blue-600 font-bold  z-10 relative w-max">
    Full Name<span className='text-red-500'>*</span>
  </label>
  <input
    type="text"
    id="name"
    value={formData.name}
    placeholder="Enter Name"
    required
    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 required"
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  />
   <label htmlFor="phone" className="block mb-[-6px] ml-3 bg-gray-50 px-1 text-[15px] text-blue-600 font-bold  z-10 relative w-max">
    Phone number<span className='text-red-500'>*</span>
  </label>
  <input
    type="tel"
    id="phone"
    value={formData.phone}
    placeholder="Enter phone number"
    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    required/>
  <label htmlFor="email" className="block mb-[-6px] ml-3 bg-gray-50 px-1 text-[15px] text-blue-600 font-bold  z-10 relative w-max">
    Email Address<span className='text-red-500'>*</span>
  </label>
  <input
    type="email"
    id="email"
    value={formData.email}
    placeholder="Enter email address"
    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    required/>
   <label htmlFor="password" className="block mb-[-6px] ml-3 bg-gray-50 px-1 text-[15px] text-blue-600 font-bold  z-10 relative w-max">
    Password<span className='text-red-500'>*</span>
  </label>
  <input
    type="password"
    id="password"
    value={formData.password}
    placeholder="Enter password"
    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    required/>
   <label htmlFor="companyName" className="block mb-[-6px] ml-3 bg-gray-50 px-1 text-[15px] text-blue-600 font-bold  z-10 relative w-max">
    Company name
  </label>
  <input
    type="text"
    id="companyName"
    value={formData.companyName}
    placeholder="Enter company name"
    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
  /><div className="mb-4">
  <p className="mb-2 text-sm font-medium text-gray-700">
    Are you an Agency? <span className="text-red-500">*</span>
  </p>

  <div className="flex items-center space-x-6">
    <label className="flex items-center space-x-2">
      <input type="radio" 
      name="isAgency" 
      value='Yes'
      className="form-radio text-blue-600 scale-150"  checked={formData.isAgency==='Yes'} onChange={(e)=>setFormData({...formData,isAgency:e.target.value})} required />
      <span>Yes</span>
    </label>

    <label className="flex items-center space-x-2">
      <input type="radio" name="isAgency"  className="form-radio text-blue-600 scale-150 "  value="No"
  checked={formData.isAgency === 'No'}
  onChange={(e) => setFormData({ ...formData, isAgency: e.target.value })} required/>
      <span>No</span>
    </label>
  </div>
</div>


     <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition mt-20 mb-10" onClick={handlesignup}>
            Create Account
          </button>
</div>


            </div>
            
            </div> 
    </>
  )
}

export default Signup
