import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/components/HomePage/HomePage'
import Services from './assets/components/Services'
import SpaDetails from './assets/components/SpaDetails'
import ServiceDetails from './assets/components/ServiceTabs/ServiceDetails'
import DocStaff from './assets/components/ServiceTabs/DocStaff'
import GalleryTab from './assets/components/ServiceTabs/GalleryTab'
import Reviews from './assets/components/ServiceTabs/Reviews'
import AboutUs from './assets/components/ServiceTabs/AboutUs'
import SpaModal from './assets/components/ContainerWraper/SpaModal'
import SalonPage from './assets/components/SalonPage'
import SlickCarousel from './assets/components/ContainerWraper/SlickCarousel'
import TabNavigation from './assets/components/ContainerWraper/TabNavigation'
import CardCarousel from './assets/components/ContainerWraper/CardCarousel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PicCarousel from './assets/components/ContainerWraper/PicCarousel'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={< Services />} />
        <Route path='/spadetails' element={< SpaDetails />} />
        <Route path='/servicedetails' element={< ServiceDetails />} />
        <Route path='/docstaff' element={< DocStaff />} />
        <Route path='/gallery' element={< GalleryTab />} />
        <Route path='/reviews' element={< Reviews />} />
        <Route path='/aboutus' element={< AboutUs />} />
        <Route path='/modal' element={< SpaModal />} />
        <Route path='/services/salon' element={< SalonPage />} />
        <Route path='/slickcarousel' element={< SlickCarousel />} />
        <Route path='/tabnavigation' element={< TabNavigation />} />
        <Route path='/cardcarousel' element={< CardCarousel />} />
        <Route path='/piccarousel' element={< PicCarousel />} />



      </Routes>


    </BrowserRouter>

  )
}

export default App