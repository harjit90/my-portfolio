import Heading from '../components/Heading'
import Layout from '../components/Layout'
import { projectDetails } from '../data/projectImages'
import { useMyThemeContext } from "../context/ThemeContext"
import ProjectCategories from '../components/ProjectCategories'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AllProjects = () => {

    const { theme } = useMyThemeContext();

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projectDetails
            : projectDetails.filter(
                (project) => project.category === activeCategory
            );

    return (
        <>
            <div className='py-25 max-sm:py-15' style={{ backgroundColor: theme === 'dark' ? '#0F172A' : '#F0F7FF' }}>
                <Layout>
                    <Heading mainHeading='Featured Projects' style={{ textAlign: 'center' }} />

                    <ProjectCategories onCategoryChange={setActiveCategory} />

                    <div className='grid grid-cols-3 max-sm:grid-cols-1 pt-7 gap-6'>

                        {filteredProjects.map((item) => {

                            return (
                                <div key={item.id} className='bg-[#0F172A] rounded-2xl drop-shadow-2xl hover:border-[#6366F1] transition ease-in-out delay-50 group cursor-pointer'>
                                    <div className='h-45 flex items-center justify-center text-white overflow-hidden rounded-t-2xl'><img src={item.projectImg} className='aspect-video object-cover object-top group-hover:scale-110 transition-all ease-in delay-75' /></div>
                                    <div className='bg-[#020617] p-8 rounded-b-2xl group'>
                                        <Link to={`/projects/${item.id}`} className='text-xl font-semibold text-white pb-3 hover:text-[#6366F1] transition-all ease-in delay-75'>{item.projectHeading}</Link>
                                        <p className='text-sm text-white/40'>{item.projectDesc}</p>
                                        <ul className='pt-5'>
                                            {item.technologies.map((tech, index) => {
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
                </Layout>
            </div>
        </>
    )
}

export default AllProjects
