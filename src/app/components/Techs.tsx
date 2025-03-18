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


export default function Techs({ images }: SliderProps) {
    return (
            <div className="flex gap-20 items-center justify-center">
                        {images.map((image, index) => (
                        <div key={index} className="">
                            {image}
                        </div>
                    ))}
            </div>
        
    );
}
