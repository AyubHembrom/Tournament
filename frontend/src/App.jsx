import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./Home"
import SignupPage from './User/SignupPage'
import UserDashboard from './User/UserDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UserDashboard />} />
      </Routes>

    </>
  )
}

export default App
