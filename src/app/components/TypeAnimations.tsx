'use client';

import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimations() {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Desenvolvedor',
                2500,
                'Desenvolvedor Web',
                2500,
                'Desenvolvedor React',
                2500,
                'Desenvolvedor Javascript',
                2500,
                'Desenvolvedor Typescript ',
                2500,
                'Desenvolvedor Next',
                2500
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
        />
    );
}
