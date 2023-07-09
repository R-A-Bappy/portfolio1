// import Typewriter from 'typewriter-effect/dist/core';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDown } from 'react-icons/fa';
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner' className="banner flex items-center">
            <div className='w-10/12 md:w-8/12 h-screen ps-2 md:ps-32 flex flex-col justify-center'>
                <span className=' text-orange-400'></span>
                <h2 className='text-2xl md:text-4xl text-orange-400 font-semibold uppercase mb-4'>Hi! I&apos;m</h2>
                <h2 className='text-2xl md:text-4xl text-white font-semibold uppercase mb-4'>MD. Robiul Aual Bappy</h2>
                <p className='h-4 text-2xl md:text-4xl font-semibold text-orange-400 mb-16'>
                    <Typewriter
                        words={['I\'m Full Stack Web developer']}
                        loop={true}
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <a href="https://drive.google.com/uc?export=download&id=10mCKfMWDmWT4pLYUBgmX7FfabFOa00uo" className='btn bg-orange-400 hover:bg-orange-300 text-white w-48 border-0' download>Download Resume</a>
            </div>
            <div className="animate-bounce w-12 h-12 text-2xl text-orange-400 bg-white rounded-full flex justify-center items-center ">
                <FaArrowDown />
            </div>
        </div>
    );
};

export default Banner;