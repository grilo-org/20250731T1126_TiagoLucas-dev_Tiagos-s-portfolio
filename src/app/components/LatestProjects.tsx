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
    description: string;
    link: string;
}

interface LatestProjectsProps {
    projects: Project[];
}

export default function LatestProjects({ projects }: LatestProjectsProps) {
    return (
        <div
            className="flex flex-wrap justify-center items-stretch gap-6
"
        >
            {projects.map((project, index) => (
                <div key={index} className="pb-8 flex flex-col items-center border-2 rounded-lg overflow-hidden max-w-[31.25rem] ">
                        <a href={project.link} target="_blank">
                            <Image src={project.imageSrc} alt={project.alt} width={500} height={500} className="rounded-t-md hover:scale-[1.1] brightness-125 transition duration-[2s] ease-in-out hover:saturate-[1.2]" />
                        </a>
                        <h4 className="mt-4 font-semibold">{project.title}</h4>
                        <p>{project.description}</p>
                        <p>{project.tag}</p>
                </div>

            ))}
        </div>
    );
}
