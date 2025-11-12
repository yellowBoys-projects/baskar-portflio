import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroSection from './pages/Hero'
import BookOrder from './components/BookNow'
import ViewWork from './components/ViewWork'
import HireMe from './components/HireMe'
import SelectedProjects from './components/SelectedProjects'
import NoPage from './components/NoPage'
import CaseStudy from './components/CaseStudy'
import Projects from './components/ExploreWork'
import Services from './pages/services'
import ServicesCom from './components/Services'
import AboutCom from './components/About'
import ContactCom from './components/Contact'
import BlogCom from './components/blog'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/book-order' element={ <BookOrder/> }/>
        <Route path='/view-work' element={ <ViewWork/> }/>
        <Route path='/hire-me' element={ <HireMe/> }/>
        <Route path='/selected-projects' element={ <SelectedProjects/> }/>
        <Route path='/case-study' element={ <CaseStudy/> }/>
        <Route path='/explore-my-work' element={ <Projects/> }/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/service-com' element={<ServicesCom/>}/>
        <Route path='/contact-com' element={<ContactCom/>}/>
        <Route path='/about-com' element={<AboutCom/>}/>
        <Route path='/blog-com' element={<BlogCom/>}/>
        <Route path='*' element={ <NoPage/> }/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
