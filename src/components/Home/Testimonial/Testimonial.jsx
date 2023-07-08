import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonial.css'
import { useEffect, useState } from 'react';

const Testimonial = () => {
    const [testimonials, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('./fake-testimonial.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTestimonial(data);
            })
    }, [])
    return (
        <>
            <h2 className='text-3xl text-slate-600 font-bold text-center'>What My Clients Says</h2>
            <p className='text-center text-slate-400 mt-2'>My Clients send us bunch of smiles with my services and we love them </p>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    testimonials.map((testimonial, index) =>
                        <SwiperSlide key={index}>
                            <div className="card w-11/12 md:w-10/12 mx-auto bg-base-100 shadow-2xl my-12">
                                <div className="card-body">
                                    <div className="avatar flex justify-center my-4">
                                        <div className="w-48 rounded-full ">
                                            <img src={testimonial.photoURL} />
                                        </div>
                                    </div>
                                    <h2 className="text-center text-xl font-bold">{testimonial.name}</h2>
                                    <p>{testimonial.address}</p>
                                    <p>{testimonial.testimonial}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
};

export default Testimonial;
