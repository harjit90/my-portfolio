import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllProjects from './pages/AllProjects'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from './pages/ProjectDetail'

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
