'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

interface Project {
    imageSrc: string;
    alt: string;
    title: string;
    tag: string;
}

interface LatestProjectsProps {
    projects: Project[];
}

export default function LatestProjects({ projects }: LatestProjectsProps) {
    return (
        <Swiper
            slidesPerView={1}
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
            // className="flex w-full max-w-[600px]" // Exemplo de classe Tailwind p/ limitar a largura
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index} className="pb-8 flex flex-col items-center justify-center">
                    <Image src={project.imageSrc} alt={project.alt} width={125} height={125} />
                    <h4 className="mt-4 font-semibold">{project.title}</h4>
                    <p>{project.tag}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
