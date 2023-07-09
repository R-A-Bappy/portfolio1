

const Skills = () => {
    return (
        <section id="skills" className="w-11/12 md:w-10/12 mx-auto pt-12">
            <h2 className='text-4xl font-bold mt-8 text-center'>My <span className='text-orange-400'>Skills</span></h2>
            <p className='text-gray-400 text-lg mt-2 mb-12 text-center'>I&apos;m a hard working, discipline person. I&apos;m expert for problem solving skills</p>
            <div className="md:flex gap-16">
                <div className="w-full mb-8 md:mb-0">
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">JavaScript</h2>
                        <progress className="progress w-full h-3 progress-warning" value="80" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">TypeScript</h2>
                        <progress className="progress w-full h-3 progress-warning" value="50" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">React JS</h2>
                        <progress className="progress w-full h-3 progress-warning" value="70" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">TailWind</h2>
                        <progress className="progress w-full h-3 progress-warning" value="80" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">Firebase</h2>
                        <progress className="progress w-full h-3 progress-warning" value="75" max="100"></progress>
                    </div>
                </div>
                <div className="w-full mb-8 md:mb-0">
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">Node JS</h2>
                        <progress className="progress w-full h-3 progress-warning" value="50" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">Express JS</h2>
                        <progress className="progress w-full h-3 progress-warning" value="65" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">MongoDB</h2>
                        <progress className="progress w-full h-3 progress-warning" value="60" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">Github</h2>
                        <progress className="progress w-full h-3 progress-warning" value="80" max="100"></progress>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className="text-2xl font-bold ">Vercel</h2>
                        <progress className="progress w-full h-3 progress-warning" value="60" max="100"></progress>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;