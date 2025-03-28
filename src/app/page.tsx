import { List } from '@phosphor-icons/react/dist/ssr';

import Image from 'next/image';
import Link from 'next/link';
import Form from './components/Form';
import Techs from './components/Techs';
import Slider from './components/Slider';
import CustomCursor from './components/CustomCursor';
import TypeAnimations from './components/TypeAnimations';
import ThemeSwitch from './components/ThemeSwitch';
import LatestProjects from './components/LatestProjects';
import LatestProjectsSlider from './components/LatestProjectsSlider';


export default function Home() {
    const sliderImages = [
        <Image src="/python.svg" alt="Python" width={125} height={125} key="1" />,
        <Image src="/javascript.svg" alt="JavaScript" width={125} height={125} key="2" />,
        <Image src="/nextjs-icon.svg" alt="Next.js" width={125} height={125} key="3" />,
        <Image src="/react.svg" alt="React" width={125} height={125} key="4" />,
        <Image src="/tailwindCss.svg" alt="Tailwind CSS" width={125} height={125} key="5" />,
        <Image src="/styled-components.svg" alt="Styled Components" width={125} height={125} key="6" />
    ];

    const latestProjects = [
        {
            imageSrc: '/RocketNotes.png',
            alt: 'RocketNotes',
            title: 'RocketNotes',
            tag: 'React.js · Styled-components · Axios · Vite · Netlify',
            description: 'Descrição',
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
            <div className="hidden md:flex">
                <CustomCursor />
            </div>

            <header
                className="flex items-center justify-between py-6 sticky top-0 z-10 bg-white dark:bg-neutral-800 -ml-10 -mr-10 pl-10 pr-10
"
            >
                <h2
                    className="text-xl font-medium hoverable dark:text-white
"
                >
                    <Link href="/">Tiago Lucas.dev</Link>
                </h2>

                <menu className="flex items-center md:hidden gap-6">
                    <div className="">
                        <ThemeSwitch />
                    </div>
                    <List size={32} color="black" weight="bold" className="dark:fill-white"/>
                </menu>

                <nav className="hidden md:block">
                    <menu className="flex gap-6 font-semibold items-center dark:text-white">
                        <li className="cursor-none hoverable">
                            <Link href="#sobre-mim">Sobre mim</Link>
                        </li>
                        <li className="cursor-none hoverable">
                            <Link href="#ultimos-projetos">Últimos projetos</Link>
                        </li>
                        <li className="cursor-none hoverable">
                            <Link href="#experiencia">Experiencia</Link>
                        </li>
                        <li className="cursor-none hoverable">
                            <Link href="#contato">Contato</Link>
                        </li>
                        <div className="hoverable">
                            <ThemeSwitch />
                        </div>
                    </menu>
                </nav>
            </header>

            <main>
                <div
                    className="md:flex justify-between md:h-[26rem]
"
                >
                    <div className="flex flex-col mb-[4.5rem] items-start md:w-xl justify-between dark:text-white">
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

                            <Link href="#contato" className="bg-black pt-4 pr-12 pb-4 pl-12 text-white hoverable dark:text-black dark:bg-white">
                                Contato
                            </Link>
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
                    {/* Carrossel com alguns ícones (Slider) Mobile*/}
                    <section className="flex justify-center dark:bg-gray-300 -ml-8 -mr-10 md:hidden">
                        <Slider images={sliderImages} />
                    </section>
                    <section className="justify-center hidden md:flex dark:bg-gray-300 md:-mx-10">
                        <Techs images={sliderImages} />
                    </section>
                </div>

                <div className="text-base my-12 md: mt-24 flex justify-center">
                    <section
                        className="flex items-center flex-col w-[37.5rem]
"
                    >
                        <h2 className="text-3xl font-semibold scroll-mt-24 dark:text-white" id="sobre-mim">
                            Sobre mim
                        </h2>
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
                        <div className="bg-gray-300 p-4 text-center rounded-lg">
                            <p>
                                Sou o Tiago, desenvolvedor de software especializado em soluções web e automação de processos, com domínio em React, HTML, CSS, JavaScript e Python. <br /> <br />
                                Atuei na CPTM automatizando processos críticos e na Xerox Corporation desenvolvendo micro-frontends com React e Next.js. Busco desafios que impulsionem minhas habilidades e gerem impacto positivo.
                            </p>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="flex items-center flex-col">
                        <h2 className="text-3xl font-semibold mb-6 scroll-mt-24 dark:text-white" id="ultimos-projetos">
                            Últimos projetos
                        </h2>

                        {/* Carrossel de projetos (LatestProjects) */}
                        <div
                            className="w-full flex justify-center items-center rounded-lg md:hidden
"
                        >
                            <LatestProjectsSlider projects={latestProjects} />
                        </div>
                        <div className="hidden md:flex dark:text-white">
                            <LatestProjects projects={latestProjects} />
                        </div>
                    </section>
                </div>

                <div className="mt-12 flex items-center flex-col ">
                    <h2
                        className="text-xl
 font-semibold mb-2 md:mb-4 scroll-mt-24 dark:text-white"
                        id="experiencia"
                    >
                        Experiências Profissionais
                    </h2>

                    <div className="md:flex gap-12">
                        <section
                            className="p-4 bg-gray-300 rounded-lg mb-4 flex-col md:flex justify-between

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
                            <div className="flex items-center gap-2 mt-6 ">
                                <div className="hoverable">
                                    <Link href="https://www.cptm.sp.gov.br/">
                                        <Image src="/CPTM_(Logo).png" alt="CPTM - Companhia Paulista de Trens Metropolitanos" width={50} height={50} />
                                    </Link>
                                </div>
                                <div>
                                    <h3 className="font-semibold">CPTM</h3>
                                    <span>Aluno Aprendiz</span>
                                </div>
                            </div>
                        </section>

                        <section
                            className="p-4 bg-gray-300 rounded-lg mb-4 flex-col md:flex justify-between

"
                        >
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
                            <div className="flex items-center gap-2 mt-6 ">
                                <div className="hoverable">
                                    <Link href="https://www.xerox.com/pt-br">
                                        <Image src="/Xerox_logo.svg" alt="Xerox Corporation" width={50} height={50} />
                                    </Link>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Xerox Corporation</h3>
                                    <span>Desenvolvedor</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mt-10 flex flex-col items-center md:w-2/6 dark:bg-gray-300 rounded-lg ">
                        <section className="w-72 flex items-center flex-col gap-6 md:items-center scroll-mt-24 md:pt-6" id="contato">
                            <h2 className="text-xl font-semibold mt-6">Vamos trabalhar juntos!</h2>
                            <p className="text-center">
                                Olá, eu sou o Tiago 👋
                                <br />
                                Entre em contato comigo e vamos bater um papo.
                            </p>
                            <div
                                className="flex gap-6
 mt-2 md:gap-8"
                            >
                                <div className="hoverable">
                                    <Link href="https://github.com/TiagoLucas-dev" target="_blank">
                                        <Image src="/social/github.svg" alt="Github" width={35} height={35} />
                                    </Link>
                                </div>
                                <div className="hoverable">
                                    <Link href="https://wa.me/5511964775051" target="_blank">
                                        <Image src="/social/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
                                    </Link>
                                </div>
                                <div className="hoverable">
                                    <Link href="mailto:titi020604@gmail.com">
                                        <Image src="/social/gmail.svg" alt="Gmail" width={35} height={35} />
                                    </Link>
                                </div>
                                <div className="hoverable">
                                    <Link href="https://www.linkedin.com/in/tiagolucasdasilva/" target="blank">
                                        <Image src="/social/linkedin.svg" alt="LinkedIn" width={35} height={35} />
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <Form />
                    </div>
                </div>
            </main>
        </div>
    );
}
