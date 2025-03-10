import Image from 'next/image';
import { List } from '@phosphor-icons/react/dist/ssr';
import Slider from './components/Slider';
import LatestProjects from './components/LatestProjects';

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
            imageSrc: '/python.svg',
            alt: 'Python',
            title: 'Projeto Python',
            tag: 'Backend'
        },
        {
            imageSrc: '/javascript.svg',
            alt: 'JavaScript',
            title: 'Projeto JS',
            tag: 'Frontend'
        },
        {
            imageSrc: '/nextjs-icon.svg',
            alt: 'Next.js',
            title: 'Projeto Next.js',
            tag: 'Fullstack'
        },
        {
            imageSrc: '/react.svg',
            alt: 'React',
            title: 'Projeto React',
            tag: 'Frontend'
        },
        {
            imageSrc: '/tailwindCss.svg',
            alt: 'Tailwind CSS',
            title: 'Projeto Tailwind',
            tag: 'CSS'
        },
        {
            imageSrc: '/styled-components.svg',
            alt: 'Styled Components',
            title: 'Projeto Styled',
            tag: 'CSS-in-JS'
        }
    ];

    return (
        <div className="mr-10 ml-10">
            <header className="flex items-center justify-between mt-6 mb-6">
                <h2 className="text-xl font-semibold">
                    <a href="/">Tiago Lucas.dev</a>
                </h2>

                <menu>
                    <List size={32} color="black" weight="bold" />
                </menu>

                <nav className="hidden">
                    <menu className="flex">
                        <li>Sobre</li>
                        <li>Experiencia</li>
                        <li>Contato</li>
                    </menu>
                </nav>
            </header>

            <main>
                <div className="flex flex-col mb-[4.5rem] items-start">
                    <div className="font-semibold mb-6">React | Vite | Next</div>
                    <h1 className="text-3xl font-semibold italic mb-6">&lt; Desenvolvedor /&gt;</h1>
                    <p className="text-base mb-12">Sempre na busca de novos conhecimentos e melhorar cada vez mais, utilizando as melhores práticas e métodos no desenvolvimento. Prazer... Tiago Lucas 👋</p>

                    <button className="bg-black pt-4 pr-12 pb-4 pl-12 text-white">Contato</button>
                </div>

                <Image src="/globe.svg" alt="Picture of the author" width={250} height={500} className="m-0" />

                <div className="text-base mt-12">
                    {/* Carrossel com alguns ícones (Slider) */}
                    <section className="flex">
                        <Slider images={sliderImages} />
                    </section>
                </div>

                <div className="text-base mt-12 mb-12">
                    <section className="flex items-center flex-col">
                        <h2 className="text-3xl font-semibold">Sobre mim</h2>
                        <div className="mt-20 mb-28">
                            <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />
                        </div>
                        <div className="bg-gray-200 p-4 text-center">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="flex items-center flex-col">
                        <h2 className="text-3xl font-semibold">Últimos projetos</h2>

                        {/* Carrossel de projetos (LatestProjects) */}
                        <div
                            className="mt-6 w-full flex justify-center items-center
"
                        >
                            <LatestProjects projects={latestProjects} />
                        </div>
                    </section>
                </div>

                <div className="mt-12">
                    <h2>Experiências Profissionais</h2>

                    <section className="mb-8">
                        <p>
                            Desenvolvimento Front-End de uma plataforma Low-Code utilizando BPMN.IO.
                            <br />
                            Criação de páginas web usando ReactJs e Next em micro-frontends.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <Image src="/python.svg" alt="Picture of the author" width={50} height={50} />
                            <div>
                                <h3>Xerox</h3>
                                <span>Desenvolvedor</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <p>
                            Desenvolvimento Front-End de uma plataforma Low-Code utilizando BPMN.IO.
                            <br />
                            Criação de páginas web usando ReactJs e Next em micro-frontends.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <Image src="/python.svg" alt="Picture of the author" width={50} height={50} />
                            <div>
                                <h3>Xerox</h3>
                                <span>Desenvolvedor</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-12">
                    <section>
                        <h2>Vamos trabalhar juntos!</h2>
                        <p>
                            Olá, eu sou o Tiago 👋
                            <br />
                            Entre em contato comigo e vamos bater um papo.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <Image src="/social/github.svg" alt="Github" width={35} height={35} />
                            <Image src="/social/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
                            <Image src="/social/gmail.svg" alt="Gmail" width={35} height={35} />
                            <Image src="/social/linkedin.svg" alt="LinkedIn" width={35} height={35} />
                        </div>
                    </section>

                    <section className="mt-6">
                        <form className="flex flex-col gap-4">
                            <label>
                                <input type="text" placeholder="Nome" className="border p-2 w-full" />
                            </label>
                            <label>
                                <input type="email" placeholder="E-mail" className="border p-2 w-full" />
                            </label>
                            <button className="bg-black text-white py-2">Enviar</button>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
}
