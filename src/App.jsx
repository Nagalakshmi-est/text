import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/components/HomePage/HomePage'
import Services from './assets/components/Services'
import SpaDetails from './assets/components/SpaDetails'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={< Services />} />
        <Route path='/spadetails' element={< SpaDetails />} />

      </Routes>


    </BrowserRouter>

  )
}

export default App