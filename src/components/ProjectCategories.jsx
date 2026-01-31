import { projectDetails } from "../data/projectImages"
import { useState } from "react";
import { useMyThemeContext } from "../context/ThemeContext"

const availableCategories = ["All", ...new Set(projectDetails.map((projects) => projects.category))];

const ProjectCategories = ({ onCategoryChange }) => {

    const { theme } = useMyThemeContext();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleClick = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <>
            <div className='flex flex-row flex-wrap gap-4 pt-10 pb-6 items-center justify-center '>
                {
                    availableCategories.map((category) => {
                        const isActive = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => handleClick(category)}
                                className={`py-2 px-6 border-2 border-[#6366F1] rounded-md cursor-pointer transition ease-in-out delay-50 
                                    ${isActive
                                        ? "bg-[#6366F1] text-white"
                                        : theme === "light"
                                            ? "text-black"
                                            : "text-white"}`}
                            >
                                {category}
                            </button>
                        )
                    })
                }
            </div >
        </>
    )
}

export default ProjectCategories
