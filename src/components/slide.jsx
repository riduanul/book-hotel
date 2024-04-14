import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import image1 from '../assets/images/image-24.png';


function slide() {
    const swiper = useSwiper();
  return (
    <div className='text-center mb-8 '>
    <Swiper
   spaceBetween={50}
   slidesPerView={1}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
 >
   <SwiperSlide>
     <img src={image1} alt='slide-image' className='w-full h-screen' />
     <div className="absolute top-[30%] left-[100px] text-gray-800 ">
       <h1 className=' text-xl md:text-5xl font-semibold md:leading-normal'>Available New Hotel</h1>
       <h4 className=' text-xl md:text-4xl font-semibold md:leading-loose'>Enjoy Your Holiday</h4>
       <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded leading-loose '>Book Your Hotel</button>
     </div>
   </SwiperSlide>
   <SwiperSlide>
   <img src={image1} alt='slide-image' className='w-full h-screen' />
   <div className="absolute top-[30%] left-[100px] text-gray-800 ">
       <h1 className='text-xl md:text-5xl font-semibold md:leading-normal'>Available New Hotel</h1>
       <h4 className='text-xl md:text-4xl font-semibold md:leading-loose'>Enjoy Your Holiday</h4>
       <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded leading-loose '>Book Your Hotel</button>
     </div>
   </SwiperSlide>
   <SwiperSlide>
   <img src={image1} alt='slide-image' className='w-full h-screen' />
   <div className="absolute top-[30%] left-[100px] text-gray-800 ">
       <h1 className='text-xl md:text-5xl font-semibold md:leading-normal'>Available New Hotel</h1>
       <h4 className='text-xl md:text-4xl font-semibold md:leading-loose'>Enjoy Your Holiday</h4>
       <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded leading-loose '>Book Your Hotel</button>
     </div>
   </SwiperSlide>

 </Swiper>
 </div>
  )
}

export default slide