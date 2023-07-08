import AboutMe from "../AboutMe/AboutMe";
import NavBar from "../Banner/Navbar";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <AboutMe />
            <Skills />
            <Projects />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;