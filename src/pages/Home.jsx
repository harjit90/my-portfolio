import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Home = ({ refs }) => {

    const location = useLocation();

    // useEffect(() => {
    //     if (location.hash) {
    //         const sectionId = location.hash.replace("#", "");
    //         const element = document.getElementById(sectionId);

    //         if (element) {
    //             setTimeout(() => {
    //                 element.scrollIntoView({ behavior: "smooth" });
    //             }, 100);
    //         }
    //     }
    // }, [location]);

    useEffect(() => {
        const section = location.state?.scrollTo;

        if (section && refs[section]?.current) {
            refs[section].current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location, refs]);


    return (
        <>
            <section ref={refs.hero} id="hero"><Hero /></section>
            <section ref={refs.about} id="about"><About /></section>
            <section ref={refs.skills} id="skills"><Skills /></section>
            <section ref={refs.projects} id="skills"><Projects /></section>
            <section ref={refs.contact} id="contact"><Contact /></section>
        </>
    )
}

export default Home
