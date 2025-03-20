// components/Slider.tsx
'use client';

import { ReactNode } from 'react';


interface SliderProps {
    images: ReactNode[];
}



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
