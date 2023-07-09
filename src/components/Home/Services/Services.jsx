import img1 from '../../../assets/services-icon/advergment.png'
import img3 from '../../../assets/services-icon/app_development.png'
import img4 from '../../../assets/services-icon/brending.png'
import img2 from '../../../assets/services-icon/strategy.png'
import img5 from '../../../assets/services-icon/web_design.png'
import img6 from '../../../assets/services-icon/web_development.png'

const Services = () => {
    return (
        <section id='services' className='pt-20'>
            <h2 className="text-center text-4xl font-bold text-slate-600 mb-2">My <span className="text-orange-400">Services</span></h2>
            <p className="text-center text-slate-400">I ensure and committed to best services </p>
            <div className='md:grid md:grid-cols-3 w-11/12 mx-auto gap-4 my-12'>
                <div className="w-full shadow-xl hover:bg-orange-300 rounded hover:text-white flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img className='w-32 h-32 mt-8' src={img1} alt="" style={{ filter: 'invert(46%) sepia(82%) saturate(383%) hue-rotate(181deg) brightness(91%) contrast(87%)' }} />
                    <h2 className='text-2xl font-semibold mt-4'>advertisement</h2>
                    <p className='text-blue-400 text-4xl font-bold -mt-6 mb-4'>____</p>
                    <p className='p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt. Repellendus adipisci quod quam amet vel blanditiis illo pariatur eum.</p>
                </div>
                <div className="w-full shadow-xl hover:bg-orange-300 rounded hover:text-white flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img className='w-32 h-32 mt-8' src={img2} alt="" style={{ filter: 'invert(46%) sepia(82%) saturate(383%) hue-rotate(181deg) brightness(91%) contrast(87%)' }} />
                    <h2 className='text-2xl font-semibold mt-4'>advertisement</h2>
                    <p className='text-blue-400 text-4xl font-bold -mt-6 mb-4'>____</p>
                    <p className='p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt. Repellendus adipisci quod quam amet vel blanditiis illo pariatur eum.</p>
                </div>
                <div className="w-full shadow-xl hover:bg-orange-300 rounded hover:text-white flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img className='w-32 h-32 mt-8' src={img3} alt="" style={{ filter: 'invert(46%) sepia(82%) saturate(383%) hue-rotate(181deg) brightness(91%) contrast(87%)' }} />
                    <h2 className='text-2xl font-semibold mt-4'>advertisement</h2>
                    <p className='text-blue-400 text-4xl font-bold -mt-6 mb-4'>____</p>
                    <p className='p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt. Repellendus adipisci quod quam amet vel blanditiis illo pariatur eum.</p>
                </div>
                <div className="w-full shadow-xl hover:bg-orange-300 rounded hover:text-white flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img className='w-32 h-32 mt-8' src={img4} alt="" style={{ filter: 'invert(46%) sepia(82%) saturate(383%) hue-rotate(181deg) brightness(91%) contrast(87%)' }} />
                    <h2 className='text-2xl font-semibold mt-4'>advertisement</h2>
                    <p className='text-blue-400 text-4xl font-bold -mt-6 mb-4'>____</p>
                    <p className='p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt. Repellendus adipisci quod quam amet vel blanditiis illo pariatur eum.</p>
                </div>
                <div className="w-full shadow-xl hover:bg-orange-300 rounded hover:text-white flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img className='w-32 h-32 mt-8' src={img5} alt="" style={{ filter: 'invert(46%) sepia(82%) saturate(383%) hue-rotate(181deg) brightness(91%) contrast(87%)' }} />
                    <h2 className='text-2xl font-semibold mt-4'>advertisement</h2>
                    <p className='text-blue-400 text-4xl font-bold -mt-6 mb-4'>____</p>
                    <p className='p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt. Repellendus adipisci quod quam amet vel blanditiis illo pariatur eum.</p>
                </div>
                <div className="w-full shadow-xl hover:bg-orange-300 rounded hover:text-white flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img className='w-32 h-32 mt-8' src={img6} alt="" style={{ filter: 'invert(46%) sepia(82%) saturate(383%) hue-rotate(181deg) brightness(91%) contrast(87%)' }} />
                    <h2 className='text-2xl font-semibold mt-4'>advertisement</h2>
                    <p className='text-blue-400 text-4xl font-bold -mt-6 mb-4'>____</p>
                    <p className='p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt. Repellendus adipisci quod quam amet vel blanditiis illo pariatur eum.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;