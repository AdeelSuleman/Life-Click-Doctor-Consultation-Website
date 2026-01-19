import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Slider from './Components/Slider/Slider'
import Home from './Components/HomeF/Home'
// import { Carousel } from 'react-responsive-carousel'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <Slider/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route exact path='' element='' /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
