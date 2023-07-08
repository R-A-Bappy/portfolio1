import img from '../../../assets/about-me-image/about-me-image.png'

const AboutMe = () => {
    return (
        <section className='w-11/12 md:w-10/12 mx-auto my-24'>
            <div className='md:flex gap-8'>
                <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                    <img className='w-full h-[40rem]' src={img} alt="my photo" />
                </div>
                <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                    <h2 className='text-4xl font-bold mt-8'>About <span className='text-orange-400'>Me</span></h2>
                    <p className='text-gray-400 text-lg mt-4 mb-12'>I&apos;m a hard working, discipline person. I&apos;m expert for problem solving skills</p>
                    <div className='flex gap-8'>
                        <div className='text-lg font-bold'>
                            <p className='mb-4'>Name: </p>
                            <p className='mb-4'>Date of birth: </p>
                            <p className='mb-4'>Address: </p>
                            <p className='mb-4'>Zip code: </p>
                            <p className='mb-4'>Email: </p>
                            <p className='mb-4'>Phone: </p>
                        </div>
                        <div className='text-gray-400 text-lg'>
                            <p className='mb-4'>Robiul Aual Bappy</p>
                            <p className='mb-4'>January 20, 1998</p>
                            <p className='mb-4'>Cox&apos;s Bazar, Bangladesh</p>
                            <p className='mb-4'>4100</p>
                            <p className='mb-4'>example@gmail.com</p>
                            <p className='mb-4'>+232-242-23-43</p>
                        </div>
                    </div>
                    <p className='text-2xl font-bold my-8'><span className=' text-orange-400'>30</span> Projects Completed</p>
                    <a href="https://drive.google.com/uc?export=download&id=10mCKfMWDmWT4pLYUBgmX7FfabFOa00uo" className='btn bg-orange-400 hover:bg-orange-300 text-white mt-8' download>Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;