import Layout from "../components/Layout"
import Button from "../components/Button"
import { useMyThemeContext } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {

  const { theme } = useMyThemeContext();

  const [isBtnClicked, setIsBtnClicked] = useState(false)
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
      <div id='hero' className={`flex flex-col items-center gap-6 w-full overflow-hidden text-center py-25 ${theme === "dark" ? 'bg-linear-to-tl from-[#120E2D] via-[#020617] to-[#141841]' : '#ffffff'} `} >
        <Layout>

          <p className='uppercase font-medium pb-2  text-[#6366F1]'>Frontend Developer</p>
          <h1 className='text-7xl max-sm:text-6xl lg:px-22 font-bold leading-tight'>Crafting <span className='text-[#6366F1]'>Digital</span> Experience That Matter</h1>
          <p className='py-10 lg:px-40 text-xl font-light'>I transform ideas into elegant, functional web applications with clean code and stunning design</p>

          <div className="flex gap-4 mx-auto justify-center max-sm:grid max-sm:grid-cols-1 max-sm:w-45">
            <Button id='#projects'>View My Work</Button>
            <button onClick={() => { setIsBtnClicked(false); handleNav("contact"); }} className={`py-4 px-8 border-2 ${theme === "dark" ? 'text-white' : 'text-[#111111]'} border-[#6366F1] rounded-md cursor-pointer hover:bg-[#6366F1] hover:text-white transition ease-in-out delay-50`}>Get In Touch</button>
          </div>

        </Layout>

      </div >
    </>
  )
}

export default Hero
