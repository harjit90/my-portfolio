import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            const element = document.getElementById(sectionId);

            if (element) {
                // Small delay ensures DOM is fully rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </>
    )
}

export default Home
