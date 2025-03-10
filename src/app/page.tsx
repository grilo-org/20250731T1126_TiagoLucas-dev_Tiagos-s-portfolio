import Image from 'next/image';
import { List } from '@phosphor-icons/react/dist/ssr';
import Slider from './components/Slider';

export default function Home() {
    const sliderImages = [
        <Image src="/python.svg" alt="Python" width={125} height={125} />,
        <Image src="/javascript.svg" alt="JavaScript" width={125} height={125} />,
        <Image src="/nextjs-icon.svg" alt="Next.js" width={125} height={125} />,
        <Image src="/react.svg" alt="React" width={125} height={125} />,
        <Image src="/tailwindCss.svg" alt="React" width={125} height={125} />,
        <Image src="/python.svg" alt="Python" width={125} height={125} />,
        <Image src="/styled-components.svg" alt="Styled Components" width={125} height={125} />
    ];

    const lastProjects = [

    ]

    return (
        <div className=" mr-10  ml-10 ">
            <header className="flex items-center justify-between  mt-6  mb-6">
                <h2
                    className="text-xl font-semibold
"
                >
                    <a href="/">Tiago Lucas.dev</a>
                </h2>

                <menu>
                    <List size={32} color="black" weight="bold" />
                </menu>

                <nav className="hidden">
                    <menu
                        className="flex 

"
                    >
                        <li>Sobre</li>
                        <li>Experiencia</li>
                        <li>Contato</li>
                    </menu>
                </nav>
            </header>

            <main>
                <div>
                    <div
                        className="flex 
 flex-col mb-[4.5rem] items-start"
                    >
                        <div className="font-semibold mb-6">React | Vite | Next</div>

                        <h1 className="text-3xl font-semibold italic mb-6 ">&lt; Desenvolvedor /&gt;</h1>

                        <p
                            className="text-base mb-12
"
                        >
                            Sempre na busca de novos conhecimentos e melhorar cada vez mais, utilizando as melhores práticas e métodos no desenvolvimento. Prazer... Tiago Lucas 👋
                        </p>

                        <button
                            className="bg-black pt-4 pr-12 pb-4 pl-12 text-white 

"
                        >
                            Contato
                        </button>
                    </div>
                    <Image src="/globe.svg" alt="Picture of the author" width={250} height={500} className="m-0" />
                </div>

                <div className="text-base mt-12">
                    <section className="flex ">
                        <Slider images={sliderImages} />
                    </section>
                </div>

                <div className="text-base mt-12 mb-12">
                    <section
                        className=" flex items-center
 flex-col
"
                    >
                        <h2
                            className="text-3xl 

 font-semibold"
                        >
                            Sobre mim
                        </h2>

                        <div className="mt-20 mb-28">
                            <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />
                        </div>

                        <div
                            className="bg-gray-200
"
                        >
                            <p className="pl-4 pr-4 text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </section>
                </div>

                <div>
                    <section
                        className=" flex items-center
 flex-col
"
                    >
                        <h2
                            className="text-3xl 
 font-semibold"
                        >
                            Últimos projetos
                        </h2>

                        <div>
                            <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />

                            <div>
                                <h4
                                    className="font-semibold
 "
                                >
                                    Titulo
                                </h4>
                                <p>Tags</p>
                            </div>
                        </div>

                        <div>
                            <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />

                            <div>
                                <h4>Titulo</h4>
                                <p>Tags</p>
                            </div>
                        </div>

                        <div>
                            <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />

                            <div>
                                <h4>Titulo</h4>
                                <p>Tags</p>
                            </div>
                        </div>

                        <div>
                            <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />

                            <div>
                                <h4>Titulo</h4>
                                <p>Tags</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <h2>Experiencias Profissionais</h2>

                    <section>
                        <p>
                            Desenvolvimento Front-End de uma plataforma Low-Code utilizando BPMN.IO.
                            <br />
                            <br />
                            Criação de paginas web utilizando ReactJs e Next utilizando a arquitetura de micro-frontends.
                        </p>
                        <div>
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
                            <br />
                            Criação de paginas web utilizando ReactJs e Next utilizando a arquitetura de micro-frontends.
                        </p>
                        <div>
                            <Image src="/python.svg" alt="Picture of the author" width={50} height={50} />
                            <div>
                                <h3>Xerox</h3>
                                <span>Desenvolvedor</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section>
                        <h2>Vamos trabalhar juntos!</h2>

                        <p>
                            Olá, eu sou o Tiago 👋
                            <br /> Entre em contato comigo e vamos bater um papo.
                        </p>

                        <div>
                            <Image src="/social/github.svg" alt="Picture of the author" width={35} height={35} />
                            <Image src="/social/whatsapp.svg" alt="Picture of the author" width={35} height={35} />
                            <Image src="/social/gmail.svg" alt="Picture of the author" width={35} height={35} />
                            <Image src="/social/linkedin.svg" alt="Picture of the author" width={35} height={35} />
                        </div>
                    </section>

                    <section>
                        <form>
                            <label>
                                <input type="text" placeholder="Nome" />
                            </label>
                            <label>
                                <input type="text" placeholder="E-mail" />
                            </label>

                            <button>Enviar</button>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
}
