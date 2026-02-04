import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllProjects from './pages/AllProjects'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from './pages/ProjectDetail'
import { useRef } from 'react'

function App() {

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };
  

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home refs={sectionRefs} />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
