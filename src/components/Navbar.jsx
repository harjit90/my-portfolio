import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useMyThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [isBtnClicked, setIsBtnClicked] = useState(false)

  const { theme, setTheme } = useMyThemeContext();

  const navigate = useNavigate();

  const handleNav = (section) => {
    setIsBtnClicked(false);

    if (section === "home") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
      return;
    }

    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <>
      <div id='navbar' className='container-fluid mx-auto px-5 sticky top-0 z-20 backdrop-blur-xl py-4'>
        <div className='grid grid-cols-12 justify-between items-center font-medium  text-sm uppercase'>

          <div className="col-span-3 max-lg:col-span-2"><button onClick={() => handleNav("home")} className='text-4xl font-black text-[#6366F1] cursor-pointer'>HK</button></div>

          <ul className={`col-span-6 max-lg:col-span-8 flex flex-row justify-center max-sm:justify-start gap-7 ${!sideBarOpen ? 'max-md:w-0 overflow-hidden' : 'max-md:w-60 max-md:pl-10'} max-md:fixed top-0 bottom-0 right-0 max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-[#6366F1] max-md:text-white max-md:pt-20 md:items-center transition-all`} >

            <div className='w-5 text-2xl absolute right-4 top-4 md:hidden' onClick={() => setSideBarOpen(false)}>
              <IoCloseSharp />
            </div>

            <li>
              <button onClick={() => { setSideBarOpen(false); handleNav("home"); }} className='sm:hover:text-[#6366F1] uppercase cursor-pointer'>Home</button>
            </li>
            <li>
              <button onClick={() => { setSideBarOpen(false); handleNav("about"); }} className='sm:hover:text-[#6366F1] uppercase cursor-pointer' > About</button>
            </li>
            <li>
              <button onClick={() => { setSideBarOpen(false); handleNav("skills"); }} className='sm:hover:text-[#6366F1] uppercase cursor-pointer'>Skills</button>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setSideBarOpen(false)}
                className={`${({ isActive }) => isActive ? "text-[#6366F1]" : ""} sm:hover:text-[#6366F1] uppercase cursor-pointer`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <button onClick={() => { setSideBarOpen(false); handleNav("contact"); }} className='sm:hover:text-[#6366F1] uppercase cursor-pointer' > Contact</button>
            </li>
          </ul>

          <div className='col-span-3 max-lg:col-span-2 max-md:col-span-10 flex items-center justify-end gap-2 sm:gap-4'>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='text-xl size-9 flex justify-center items-center border border-white/50 rounded-full cursor-pointer' style={{ borderColor: theme && '#6366F1', color: '#6366F1' }}>{theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>

            <div onClick={() => setSideBarOpen(true)} className='w-8 md:hidden text-2xl flex justify-end' style={{ color: theme && '#6366F1' }}><RiMenu3Fill /></div>

            <button onClick={() => handleNav("contact")} className='group flex flex-row  items-center cursor-pointer px-5 py-2 rounded-full bg-[#6366F1] max-lg:hidden text-white'>Connect <span className="ps-2 text-2xl group-hover:translate-x-1 transition-all ease-in delay-30"><IoIosArrowRoundForward /></span></button>
          </div>
        </div >
      </div >
    </>
  )
}

export default Navbar
