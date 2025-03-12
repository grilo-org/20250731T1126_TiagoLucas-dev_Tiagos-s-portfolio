'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Grettings() {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
          'Olá 🇧🇷',
          5000,
          'Hello 🇬🇧',
          5000,
          'Ciao 🇮🇹',
          5000,
          '你好 🇨🇳',
          5000,
          'Здравейте 🇧🇬 ',
          5000,
          'Hola 🇪🇸',
          5000,
          'Bonjour 🇫🇷',
          5000,
          'नमस्ते 🇮🇳',
          5000
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
        />
    );
}
