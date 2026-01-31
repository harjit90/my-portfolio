import { useParams } from "react-router-dom"
import { projectDetails } from "../data/projectImages"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FaAngleLeft } from "react-icons/fa6";
import { useMyThemeContext } from "../context/ThemeContext"
import Button from "../components/Button";
import ImageViewerModal from "../components/ImageViewerModal";

const ProjectDetail = () => {

    const { theme } = useMyThemeContext();
    const { id } = useParams();
    const [project, setProject] = useState();
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    useEffect(() => {
        setProject(projectDetails.find((data) => String(data.id) == String(id)));
    }, [id]);

    if (!project) return null;

    const handleViewProject = () => {
        const hasLiveUrl =
            typeof project?.liveUrl === "string" &&
            project.liveUrl.trim().length > 0;

        const hasImage =
            Boolean(project?.projectImg) ||
            Array.isArray(project?.projectImgs);

        if (hasLiveUrl) {
            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
            return;
        }

        if (hasImage) {
            setIsViewerOpen(true);
        }
    };

    return (
        <>
            <Layout>
                <div className=' p-10 my-8 w-full inline-block rounded-md bg-[#0F172A]' >
                    <Link to='/projects' >
                        <button className='pb-8 w-full flex flex-row items-center gap-1 cursor-pointer text-white hover:text-[#6366F1] transition-all ease-in delay-10'>
                            <FaAngleLeft />
                            <span>Back to All Projects</span>
                        </button>
                    </Link>
                    <div className='grid grid-cols-2 max-sm:grid-cols-1'>
                        <div className='size-95 aspect-square object-cover object-top overflow-hidden cursor-pointer max-sm:size-auto'>
                            <img src={project?.projectImg} alt={project?.projectHeading} onClick={handleViewProject} className='cursor-pointer' />
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-xl font-semibold text-white pb-3 hover:text-[#6366F1] transition-all ease-in delay-75 cursor-pointer'>{project?.projectHeading}</h2>
                            <p className='text-sm text-white/40'>{project?.projectDesc}</p>
                            <ul className='pt-5'>
                                {project?.technologies.map((tech, index) => {
                                    return (
                                        <li key={index} className='p-2 bg-[#1E293B] inline-block rounded-lg my-1 me-2 text-sm text-white/40'>{tech}</li>
                                    )
                                })}
                            </ul>
                            <button onClick={handleViewProject} className='py-4 px-8 border-2 border-[#6366F1] rounded-md cursor-pointer hover:bg-[#6366F1] hover:text-white transition ease-in-out delay-50 inline-block mt-7' style={{ color: '#ffffff' }}>View Project</button>
                        </div>
                    </div>
                    {isViewerOpen && !project.liveUrl && (
                        <ImageViewerModal
                            projects={projectDetails}
                            currentId={project.id}
                            onClose={() => setIsViewerOpen(false)}
                        />
                    )}
                </div >
                <ImageViewerModal />
            </Layout >
        </>
    )
}

export default ProjectDetail
