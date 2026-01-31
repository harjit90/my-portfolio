import Layout from "../components/Layout"
import { FaGithub, FaLinkedin, FaBehanceSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div id='footer' className='bg-[#0F172A] pt-15 pb-10 text-white/40'>
        <Layout>
          <div className="flex justify-between pb-6 max-sm:grid max-sm:grid-rows-1">
            <span className='max-sm:w-full max-sm:pb-4'>
              <h2 className='text-3xl
                    size-20 rounded-full border-4 border-[#6366F1] text-[#6366F1] text-center leading-19 mb-5 font-black'>HK</h2>
              <p>Crafting digital experience</p>
            </span>
            <ul className="flex flex-row items-center text-2xl gap-4 max-sm:w-full">
              <li><a href="https://github.com/harjit90" target='_blank' className='hover:text-[#6366F1]'><FaGithub /></a></li>
              <li><a href="https://www.linkedin.com/in/harjit-kumar-19912792" target='_blank' className='hover:text-[#6366F1]'><FaLinkedin /></a></li>
              <li><a href="https://www.behance.net/harjitmehmi" target='_blank' className='hover:text-[#6366F1]'><FaBehanceSquare /></a></li>
              <li><a href="https://www.instagram.com/" target='_blank' className='hover:text-[#6366F1]'><FaInstagramSquare /></a></li>
            </ul>
          </div>
          <hr className="text-white/10" />
          <div className="flex justify-between pt-6 text-sm max-sm:grid max-sm:grid-rows-1">
            <p className='max-sm:pb-2'>@2025 <a href="#" className='hover:text-[#6366F1]'>Harjit Kumar</a>. All rights reserved.</p>
            <ul className="flex flex-row gap-4 items-center">
              <li><a href="#" className='hover:text-white/70'>Privacy Policy</a></li>
              <li><a href="#" className='hover:text-white/70'>Terms of Services</a></li>
            </ul>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default Footer
