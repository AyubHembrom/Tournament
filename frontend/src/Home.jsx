import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Slider from './Components/Slider'
import NavBar from './Components/NavBar'
import MatchSlider from './Components/MatchSlider'
import FAQ from './Components/FAQ'
import GetInTouch from './Components/GetInTouch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Slider />
      <MatchSlider/>
      <MatchSlider/>
      <FAQ/>
      <GetInTouch/>
      <Footer />
    </>
  )
}

export default App
