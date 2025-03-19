import { List } from '@phosphor-icons/react/dist/ssr';

import Image from 'next/image';
import Form from './components/Form';
import Techs from './components/Techs';
import Slider from './components/Slider';
import TypeAnimations from './components/TypeAnimations';
import LatestProjects from './components/LatestProjects';
import LatestProjectsSlider from './components/LatestProjectsSlider';

export default function Home() {
    const sliderImages = [
        <Image src="/python.svg" alt="Python" width={125} height={125} />,
        <Image src="/javascript.svg" alt="JavaScript" width={125} height={125} />,
        <Image src="/nextjs-icon.svg" alt="Next.js" width={125} height={125} />,
        <Image src="/react.svg" alt="React" width={125} height={125} />,
        <Image src="/tailwindCss.svg" alt="Tailwind CSS" width={125} height={125} />,
        <Image src="/styled-components.svg" alt="Styled Components" width={125} height={125} />
    ];

    const latestProjects = [
        {
            imageSrc: '/RocketNotes.png',
            alt: 'RocketNotes',
            title: 'RocketNotes',
            tag: 'React.js · Styled-components · Axios · Vite · Netlify',
            description: "Descrição",
            link: 'https://rocketnotes-makeyournotes.netlify.app/'
        },
        {
            imageSrc: '/FocusTimerV2.png',
            alt: 'FocusTimerV2',
            title: 'FocusTimerV2',
            tag: 'React.js · Styled-components · Axios · Vite · Netlify',
            description: 'Descrição',
            link: 'https://tiagolucas-dev.github.io/FocusTimerV2/'
        },
        {
            imageSrc: '/Ignite_Timer.png',
            alt: 'Ignite Timer',
            title: 'Ignite Timer',
            tag: 'React.js · Styled-components · Axios · Vite · Netlify',
            description: 'Descrição',
            link: 'https://ignite-timer01.netlify.app/'
        },
        {
            imageSrc: '/SpaceCream.png',
            alt: 'SpaceCream',
            title: 'SpaceCream',
            tag: 'React.js · Styled-components · Axios · Vite · Netlify',
            description: 'Descrição',
            link: 'https://tiagolucas-dev.github.io/Space-Cream/'
        }
    ];

    return (
        <div className=" mx-7  md:mx-10 mb-24">
            <header
                className="flex items-center justify-between py-6 sticky top-0 z-10 bg-white
"
            >
                <h2 className="text-xl font-medium">
                    <a href="/">Tiago Lucas.dev</a>
                </h2>

                <menu className="block md:hidden">
                    <List size={32} color="black" weight="bold" />
                </menu>

                <nav className="hidden md:block">
                    <menu className="flex gap-6 font-semibold">
                        <li className="cursor-pointer">Sobre mim</li>
                        <li className="cursor-pointer">Últimos projetos</li>
                        <li className="cursor-pointer">Experiencia</li>
                        <li className="cursor-pointer">Contato</li>
                    </menu>
                </nav>
            </header>

            <main>
                <div
                    className="md:flex justify-between md:h-[26rem]
"
                >
                    <div className="flex flex-col mb-[4.5rem] items-start md:w-xl justify-between">
                        <div
                            className=" md:w-3/4 mt-4                         

"
                        >
                            <div className="font-semibold mb-6 text-2xl  md:text-3xl">
                                Olá, pode me chamar de Tiago Lucas <span className="font-bold text-orange-500">:)</span>
                            </div>
                            <h1
                                className="text-3xl font-semibold italic mb-6 md:text-6xl
"
                            >
                                &lt; <TypeAnimations /> /&gt;
                            </h1>
                            <p className="text-base mb-12">Sempre na busca de novos conhecimentos e melhorar cada vez mais, utilizando as melhores práticas e métodos no desenvolvimento. Prazer... Tiago Lucas 👋</p>

                            <button className="bg-black pt-4 pr-12 pb-4 pl-12 text-white">Contato</button>
                        </div>
                    </div>

                    <div className="flex justify-center md:mr-12 md:items-center">
                        <Image
                            src="/perfil.jpg"
                            alt="Picture of the author"
                            width={640}
                            height={480}
                            className="m-0 rounded-lg transition duration-400 ease-in-out border-2 border-orange-500
                            "
                        />
                    </div>
                </div>

                <div className="text-base mt-12">
                    {/* Carrossel com alguns ícones (Slider) */}
                    <section className="flex justify-center md:hidden">
                        <Slider images={sliderImages} />
                    </section>
                    <section className="justify-center hidden md:flex">
                        <Techs images={sliderImages} />
                    </section>
                </div>

                <div className="text-base my-12 md: mt-24 flex justify-center">
                    <section
                        className="flex items-center flex-col w-[37.5rem]
"
                    >
                        <h2 className="text-3xl font-semibold">Sobre mim</h2>
                        <div className="my-10 ">
                            <Image
                                src="/perfilImage.jpg"
                                alt="Picture of the author"
                                width={600}
                                height={300}
                                className="m-0 rounded-lg transition duration-400 ease-in-out border-2 border-orange-500
                             "
                            />
                        </div>
                        <div className="bg-gray-200 p-4 text-center rounded-lg">
                            <p>
                                Sou o Tiago, desenvolvedor de software especializado em soluções web e automação de processos, com domínio em React, HTML, CSS, JavaScript e Python. <br /> <br />
                                Atuei na CPTM automatizando processos críticos e na Xerox Corporation desenvolvendo micro-frontends com React e Next.js. Busco desafios que impulsionem minhas habilidades e gerem impacto positivo.
                            </p>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="flex items-center flex-col">
                        <h2 className="text-3xl font-semibold mb-6 ">Últimos projetos</h2>

                        {/* Carrossel de projetos (LatestProjects) */}
                        <div
                            className="w-full flex justify-center items-center rounded-lg md:hidden
"
                        >
                            <LatestProjectsSlider projects={latestProjects} />

                        </div>
                        <div className="hidden md:flex ">
                            <LatestProjects projects={latestProjects} />
                        </div>
                    </section>
                </div>

                <div className="mt-12 flex items-center flex-col ">
                    <h2
                        className="text-xl
 font-semibold mb-2"
                    >
                        Experiências Profissionais
                    </h2>

                    <section
                        className="p-4 bg-gray-200 rounded-lg mb-4
"
                    >
                        <ul
                            className="w-60 flex items-start flex-col gap-4
"
                        >
                            <li className="">
                                <span className="font-bold">.</span> Automatização do processo de cadastro de documentos através da criação de um RPA, aumentando eficiência operacional.
                            </li>

                            <li className="">
                                <span className="font-bold">.</span> Liderança no desenvolvimento de um sistema para filtragem e verificação de documentos, impactando mais de 10 mil registros.
                            </li>
                        </ul>
                        <div className="flex items-center gap-2 mt-6">
                            <Image src="/CPTM_(Logo).png" alt="CPTM - Companhia Paulista de Trens Metropolitanos" width={50} height={50} />
                            <div>
                                <h3 className="font-semibold">CPTM</h3>
                                <span>Aluno Aprendiz</span>
                            </div>
                        </div>
                    </section>

                    <section className="p-4 bg-gray-200 rounded-lg mb-4 ">
                        <ul
                            className="w-60 flex items-start flex-col gap-4
"
                        >
                            <li>
                                <span className="font-bold text-xl">.</span> Desenvolvimento Front-End de uma plataforma Low-Code utilizando BPMN.IO.
                            </li>

                            <li>
                                <span className="font-bold text-xl">.</span> Criação de páginas web usando ReactJs e Next em micro-frontends.
                            </li>
                        </ul>
                        <div className="flex items-center gap-2 mt-6">
                            <Image src="/Xerox_logo.svg" alt="Xerox Corporation" width={50} height={50} />
                            <div>
                                <h3 className="font-semibold">Xerox Corporation</h3>
                                <span>Desenvolvedor</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-10">
                    <section className="w-72 flex items-start flex-col gap-6">
                        <h2 className="text-xl font-semibold">Vamos trabalhar juntos!</h2>
                        <p>
                            Olá, eu sou o Tiago 👋
                            <br />
                            Entre em contato comigo e vamos bater um papo.
                        </p>
                        <div className="flex gap-6 mt-2">
                            <a href="https://github.com/TiagoLucas-dev" target="_blank">
                                <Image src="/social/github.svg" alt="Github" width={35} height={35} />
                            </a>
                            <a href="https://wa.me/5511964775051" target="_blank">
                                <Image src="/social/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
                            </a>
                            <a href="mailto:titi020604@gmail.com">
                                <Image src="/social/gmail.svg" alt="Gmail" width={35} height={35} />
                            </a>
                            <a href="https://www.linkedin.com/in/tiagolucasdasilva/" target="blank">
                                <Image src="/social/linkedin.svg" alt="LinkedIn" width={35} height={35} />
                            </a>
                        </div>
                    </section>

                    <Form />
                </div>
            </main>
        </div>
    );
}
