import React from 'react'
import { useState,useEffect ,useRef} from 'react'
import { FaCamera } from 'react-icons/fa';
function Profile() {
    const [user,setUser]=useState({});
    const[profilePic,setProfilepic]=useState(null);
    const fileInputRef = useRef(null);
    useEffect(()=>{
const storeUser=JSON.parse(localStorage.getItem('user'));
setUser(storeUser||{});
    },[]);
    const handleimageupload=(e)=>{
        const file=e.target.files[0];
        const imgUrl=URL.createObjectURL(file);
        setProfilepic(imgUrl);
    };
    const handleProfileClick = () => {
        fileInputRef.current.click(); // 📂 Trigger gallery
      };
  return (
    <>
        <div className=' flex items-center justify-center min-h-screen bg-gray-100  '>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-100 rounded-xl mt-0 mb-80 p-4">
            <div className='bg-white h-14 p-4 font-[500]'>Account Settings</div>
        <div className="flex  gap-10 mt-6">
       
        
    <div onClick={handleProfileClick}>
      <img src={profilePic} alt="profile image" className="w-16 h-16 rounded-full object-cover" onChange={handleimageupload}/>
      <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
                <FaCamera className="text-gray-600 text-xs" />
              </div>
    </div>
    
     <input
              type="file"
              accept="image/*"
              onChange={handleimageupload}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
    
    <div className="text-left">
      <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
      <h2 className="text-sm text-gray-600">{user.email}</h2>
    </div>
   
  </div>
  <p className='text-[12px] font-[500] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nulla reiciendis! Quod ducimus ad temporibus ratione! Minima voluptatum voluptates autem necessitatibus, consectetur ad quia magni distinctio atque. Velit, quidem deserunt?</p>
  <div className="w-full border-t border-dotted border-blue-400 h-0 mt-4"></div>

        </div>
      </div>
    </>
  )
}

export default Profile
