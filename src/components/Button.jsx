import { useMyThemeContext } from "../context/ThemeContext"

const Button = ({ children, ...props }) => {

  const { theme } = useMyThemeContext();

  return (
    <>
      <a href={props.id} style={props.style} className={`py-4 px-8 border-2 ${theme === "dark" ? 'text-white' : 'text-[#111111]'} border-[#6366F1] rounded-md cursor-pointer hover:bg-[#6366F1] hover:text-white transition ease-in-out delay-50`}>{children}</a>
    </>
  )
}

export default Button
