import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx" 
import About from "./Components/About/About.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Footer from './Components/Footer/fotter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <About/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
