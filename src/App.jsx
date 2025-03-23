import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'
import ServicesPage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Error404 from './pages/ErrorPage'

function App() {
  return (
    <Routes>
      {/* Add routes here */}
      <Route path="/" element={<Home />} />
      <Route path='/booking' element={<BookingPage />} />\
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App