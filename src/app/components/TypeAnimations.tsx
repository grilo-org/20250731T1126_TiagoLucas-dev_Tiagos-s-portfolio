'use client';

import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimations() {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'We produce Luiz for Mice',
                2500, // wait 1s before replacing "Mice" with "Hamsters"
                'We produce Thiago for Hamsters',
                2500,
                'We produce Mustafah for Guinea Pigs',
                2500,
                'We produce Leandro for Chinchillas',
                2500
                // React | Vite | Next
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
    );
}
