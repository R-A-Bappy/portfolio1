import img1 from '../../../assets/projects-images/be_humble.png'
import img2 from '../../../assets/projects-images/bistro-boss.png'
import img3 from '../../../assets/projects-images/desktop.png'
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className=' mb-12 mt-4'>
            <h2 className="text-center text-3xl font-bold text-slate-600">My <span className="text-orange-400">Projects</span></h2>
            <p className="text-center text-slate-400">I build each of my projects with passion, creativity, user-friendly, clean coding</p>
            <div className='md:flex md:gap-6 justify-center mt-16'>
                <ProjectCard img={img1} imgAlt={'donate project image'} duration={"duration-[3000ms]"} />
                <ProjectCard img={img2} imgAlt={'donate project image'} duration={"duration-[5000ms]"} />
                <ProjectCard img={img3} imgAlt={'dragon news project images'} duration={"duration-[1500ms]"} />
            </div>
        </section>
    );
};

export default Projects;