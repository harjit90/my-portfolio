import { useMyThemeContext } from "../context/ThemeContext"

const Heading = ({ subHeading, mainHeading, headingDescription, ...props }) => {

  const { theme } = useMyThemeContext();

  return (
    <>
      <div style={props.style} >
        <p className='text-[#6366F1] pb-3 uppercase'>{subHeading}</p>
        <h2 className='text-5xl font-bold pb-7' style={{ color: theme === "dark" ? '#ffffff' : '#111111' }} >{mainHeading}</h2>
        <p className='font-light text-md' style={{ color: theme ? '#555555' : '#ffffff' }} >{headingDescription}</p>
      </div>
    </>
  )
}

export default Heading
