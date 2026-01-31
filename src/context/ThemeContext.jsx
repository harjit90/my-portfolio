import { createContext, useEffect, useState, useContext } from "react";

// Create Context

const ThemeContext = createContext()

// Provide Context

const MyThemeContext = ({ children }) => {

    // const [theme, setTheme] = useState();

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || "dark";
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    const value = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

// Use Context

const useMyThemeContext = () => {
    return (
        useContext(ThemeContext)
    )
}

export { useMyThemeContext, MyThemeContext }