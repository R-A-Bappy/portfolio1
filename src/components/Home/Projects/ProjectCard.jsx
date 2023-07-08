import { Link } from "react-router-dom";


const ProjectCard = ({ img, imgAlt, duration }) => {
    return (
        <Link className='w-11/12 md:w-[30%]'>
            <div className='relative h-[500px] overflow-hidden shadow-xl mb-8 md:mb-0'>
                <div className={` h-max w-full transition-transform ${duration} ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-500px)] hover:opacity-70 peer `}>
                    <img className='w-full object-cover object-top rounded-lg ' src={img} alt={imgAlt} />
                </div>
                <p className='absolute invisible top-48 right-40 text-5xl font-semibold peer-hover:visible'>Details</p>
            </div>
        </Link>
    );
};

export default ProjectCard;