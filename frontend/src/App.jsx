import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./Home"
import SignupPage from './User/SignupPage'
import UserDashboard from './User/UserDashboard'
import {WinnersTable,Tournaments} from './Components/WinnersTable'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winner" element={<WinnersTable />} />
        <Route path="/tournament" element={<Tournaments />} />
        <Route path="/login" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UserDashboard />} />
      </Routes>

    </>
  )
}

export default App
