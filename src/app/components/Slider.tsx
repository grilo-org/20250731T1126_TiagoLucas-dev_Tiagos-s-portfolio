// components/Slider.tsx
'use client';

import { ReactNode } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
    images: ReactNode[];
}

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Slider({ images }: SliderProps) {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            // onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="pb-8 ">
                    {image}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
