import Layout from "../components/Layout"
import Button from "../components/Button"
import { useMyThemeContext } from "../context/ThemeContext"

const Hero = () => {

  const { theme } = useMyThemeContext();

  /*${theme === "dark" ? 'bg-linear-to-tl from-[#120E2D] via-[#020617] to-[#141841]' : '#ffffff'}*/

  return (
    <>
      <div id='hero' className={`flex flex-col items-center gap-6 w-full overflow-hidden text-center py-25 ${theme === "dark" ? 'bg-linear-to-tl from-[#120E2D] via-[#020617] to-[#141841]' : '#ffffff'} `}  /* style={{ backgroundColor: theme && '#ffffff' }} */ >
        <Layout>

          <p className='uppercase font-medium pb-2  text-[#6366F1]'>Frontend Developer</p>
          <h1 className='text-7xl max-sm:text-6xl lg:px-22 font-bold leading-tight' /* style={{ color: theme && '#111111' }} */>Crafting <span className='text-[#6366F1]'>Digital</span> Experience That Matter</h1>
          <p className='py-10 lg:px-40 text-xl font-light' /* style={{ color: theme && '#555555' }} */>I transform ideas into elegant, functional web applications with clean code and stunning design</p>

          <div className="flex gap-4 mx-auto justify-center max-sm:grid max-sm:grid-cols-1 max-sm:w-45">
            <Button id='#projects' /* style={{ backgroundColor: '#6366F1', color: '#ffffff' }} */>View My Work</Button>
            <Button id='#contact'>Get In Touch</Button>
          </div>

        </Layout>

      </div >
    </>
  )
}

export default Hero
