import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroSection from './pages/Hero'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
