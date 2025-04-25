import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome'
import Login from './Components/Login'
import Signup from './Components/Signup';
import Profile from './Components/Profile';
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
    </Router>
    </>
  )
}

export default App
