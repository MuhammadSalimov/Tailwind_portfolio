import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
