import Heading from '../components/Heading'
import Layout from '../components/Layout'
import { projectDetails } from '../data/projectImages'
import { useMyThemeContext } from "../context/ThemeContext"
import { Link } from 'react-router-dom'
import ProjectCategories from '../components/ProjectCategories'
import { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {

    const { theme } = useMyThemeContext();

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projectDetails.slice(0, 6)
            : projectDetails.filter(
                (project) => project.category === activeCategory
            );

    return (
        <>
            <div id='projects' className='py-25 max-sm:py-15' style={{ backgroundColor: theme === 'dark' ? '#0F172A' : '#F0F7FF' }} >
                <Layout>
                    <Heading subHeading='Portfolio' mainHeading='Featured Projects' headingDescription='A selection of my recent work and client projects' style={{ textAlign: 'center' }} />

                    <ProjectCategories onCategoryChange={setActiveCategory} />

                    <div className='grid grid-cols-3 max-sm:grid-cols-1 pt-7 gap-6'>
                        {filteredProjects.map((project) => {
                            return (
                                <div key={project.id} className='bg-[#0F172A] rounded-2xl drop-shadow-2xl hover:border-[#6366F1] transition ease-in-out delay-50 group cursor-pointer'>
                                    <div className='h-45 flex items-center justify-center text-white overflow-hidden rounded-t-2xl'><img src={/*ProjectImgs && <ProjectImgs />*/ project.projectImg} className='aspect-video object-cover object-top group-hover:scale-110 transition-all ease-in delay-75' />
                                    </div>
                                    <div className='bg-[#020617] p-8 rounded-b-2xl group'>
                                        <Link to={`/projects/${project.id}`} className='text-xl font-semibold text-white pb-3 hover:text-[#6366F1] transition-all ease-in delay-75'>{project.projectHeading}</Link>
                                        <p className='text-sm text-white/40'>{project.projectDesc}</p>
                                        <ul className='pt-5'>
                                            {project.technologies.map((tech, index) => {
                                                return (
                                                    <li key={index} className='p-2 bg-[#1E293B] inline-block rounded-lg my-1 me-2 text-sm text-white/40'>{tech}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='text-center pt-12 flex flex-row items-center justify-center'>
                        <Link to='/projects' className='py-4 px-8 border-2 border-[#6366F1] rounded-md cursor-pointer hover:bg-[#6366F1] hover:text-white transition ease-in-out delay-50 flex flex-row group'>View All Projects <span className="ps-2 text-2xl group-hover:translate-x-1 transition-all ease-in delay-30"><IoIosArrowRoundForward /></span></Link>
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default Projects
