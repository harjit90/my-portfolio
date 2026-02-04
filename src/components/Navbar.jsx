import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Layout from "./Layout";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useMyThemeContext } from "../context/ThemeContext";

const Navbar = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false)

  const { theme, setTheme } = useMyThemeContext();

  return (
    <>
      <div className='container-fluid mx-auto px-5 sticky top-0 z-20 backdrop-blur-xl py-4' /*style={{ backgroundColor: theme && '#ffffff' }}*/>
        <div className='grid grid-cols-12 justify-between items-center font-medium  text-sm uppercase'>

          <div className="col-span-3 max-lg:col-span-2"><a href='/' className='text-4xl font-black text-[#6366F1]'>HK</a></div>

          <ul className={`col-span-6 max-lg:col-span-8 flex flex-row justify-center gap-7 ${!sideBarOpen ? 'max-md:w-0 overflow-hidden' : 'max-md:w-60 max-md:pl-10'} max-md:fixed top-0 bottom-0 right-0 max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-[#6366F1] max-md:text-white max-md:pt-20 md:items-center transition-all`} /*style={{ color: theme && '#111111' }}*/>

            <div className='w-5 text-2xl absolute right-4 top-4 md:hidden' onClick={() => setSideBarOpen(false)}>
              <IoCloseSharp />
            </div>

            <li>
              <a href='/#' onClick={() => setSideBarOpen(false)} className='sm:hover:text-[#6366F1]'>Home</a>
            </li>
            <li>
              <a href='/#about' onClick={() => setSideBarOpen(false)} className='sm:hover:text-[#6366F1]'>About</a>
            </li>
            <li>
              <a href='/#skills' onClick={() => setSideBarOpen(false)} className='sm:hover:text-[#6366F1]'>Skills</a>
            </li>
            {/* <li>
                <a href='#projects' onClick={() => setSideBarOpen(false)} className='sm:hover:text-[#6366F1]'>Projects</a>
              </li> */}
            <NavLink
              to="/projects"
              onClick={() => setSideBarOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#6366F1]" : ""
              }
            >
              Projects
            </NavLink>
            <li>
              <a href='/#contact' onClick={() => setSideBarOpen(false)} className='sm:hover:text-[#6366F1]'>Contact</a>
            </li>
          </ul>

          <div className='col-span-3 max-lg:col-span-2 max-md:col-span-10 flex items-center justify-end gap-2 sm:gap-4'>
            {/* <button onClick={() => setTheme(!theme)} className='text-xl size-9 flex justify-center items-center border border-white/50 rounded-full cursor-pointer' style={{ borderColor: theme && '#6366F1', color: '#6366F1' }}>{theme ? <MdDarkMode /> : <MdLightMode />}</button> */}

            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='text-xl size-9 flex justify-center items-center border border-white/50 rounded-full cursor-pointer' style={{ borderColor: theme && '#6366F1', color: '#6366F1' }}>{theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>

            <div onClick={() => setSideBarOpen(true)} className='w-8 md:hidden text-2xl flex justify-end' style={{ color: theme && '#6366F1' }}><RiMenu3Fill /></div>

            <a href="#contact" className='group flex flex-row  items-center cursor-pointer px-5 py-2 rounded-full bg-[#6366F1] max-lg:hidden text-white'>Connect <span className="ps-2 text-2xl group-hover:translate-x-1 transition-all ease-in delay-30"><IoIosArrowRoundForward /></span></a>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar
