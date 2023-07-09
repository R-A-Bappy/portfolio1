import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import NavBar from "../Banner/Navbar";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
// import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <Services />
            {/* <Testimonial /> */}

            <Footer />
        </div>
    );
};

export default Home;