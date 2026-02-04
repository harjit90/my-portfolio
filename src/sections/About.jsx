import assets from '../assets/assets'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import AboutFeatures from '../components/AboutFeatures'
import { useMyThemeContext } from "../context/ThemeContext"
import { Link } from 'react-router-dom'
import { FiDownload } from "react-icons/fi";


const About = () => {

    const { theme } = useMyThemeContext();

    return (
        <>
            <div id='about' className='py-25 max-sm:py-15' style={{ backgroundColor: theme === 'dark' ? '#0F172A' : '#F0F7FF' }} >
                <Layout>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div className='text-start'>
                            <Heading style={{ textAlign: 'left' }} subHeading='About Me' mainHeading='Passionate Developer & Designer' />

                            <div style={{ color: theme === 'dark' ? '#ffffff' : '#111111' }}>
                                <p className='pb-4 font-light'>React.js Frontend Developer with a strong design background. Former Senior UI/UX & Graphic Designer, now focused on building modern, component-driven web interfaces using JavaScript, React, Hooks, Context API, Redux Toolkit, and Tailwind CSS.</p>

                                <p className='pb-5 font-light'>I bridge the gap between design and development to deliver intuitive and high-quality user experiences.</p>
                            </div>

                            <div className='grid grid-cols-3 gap-5 items-center'>
                                <AboutFeatures count='50+' text='Projects' />
                                <AboutFeatures count='35+' text='Clients' />
                                <AboutFeatures count='5+' text='Years' />
                            </div>

                            <Link to='https://drive.google.com/drive/folders/1Iu17mvN5u6gVyuKarmj_CAbQ4NWurOvE?usp=sharing' target='_blank' className='py-4 mt-10 px-8 border-2 border-[#6366F1] rounded-md cursor-pointer hover:bg-[#6366F1] hover:text-white transition ease-in-out delay-50 flex flex-row gap-3 items-center justify-center w-65 group'>Download Resume <span className="ps-2 text-2xl group-hover:translate-x-1 transition-all ease-in delay-30"><FiDownload /></span></Link>

                        </div>
                        <div className='rounded-xl border border-white/20 h-3/4 mt-10 md:ms-10 sm:ms-0'><img src={assets.aboutUs} alt='' className='object-cover h-full w-full rounded-lg p-5 bg-[#1E293B]' /></div>
                    </div>
                </Layout >
            </div >
        </>
    )
}

export default About
