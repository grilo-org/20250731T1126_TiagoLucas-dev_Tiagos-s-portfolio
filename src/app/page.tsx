import Image from 'next/image';
import { List } from "@phosphor-icons/react/dist/ssr";


export default function Home() {
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
                    <menu className="flex 

">
                        <li>Sobre</li>
                        <li>Experiencia</li>
                        <li>Contato</li>
                    </menu>
                </nav>
            </header>

            <main>
                <div>
                    <div className="mb-[4.5rem]">
                        <div className="font-semibold mb-6">React | Vite | Next</div>

                        <h1 className="text-3xl font-semibold italic mb-6 ">&lt; Desenvolvedor /&gt;</h1>

                        <p className="text-base mb-12
">Sempre na busca de novos conhecimentos e melhorar cada vez mais, utilizando as melhores práticas e metodos no desenvolvimento. Prazer... Tiago Lucas 👋</p>

                        <button className="bg-black pt-4 pr-12 pb-4 pl-12 text-white 

">Contato</button>
                    </div>
                    <Image src="/globe.svg" alt="Picture of the author" width={250} height={500} />
                </div>

                <div className="text-base mt-12">
                    <section>
                        <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />
                        <Image src="/javascript.svg" alt="Picture of the author" width={100} height={100} />
                        <Image src="/nextjs-icon.svg" alt="Picture of the author" width={125} height={125} />
                        <Image src="/react.svg" alt="Picture of the author" width={100} height={100} />
                        <Image src="/styled-components.svg" alt="Picture of the author" width={100} height={100} />
                    </section>
                </div>

                <div>
                    <section>
                        <h2>Sobre mim</h2>
                        <p>Lorem Ipsum</p>
                    </section>
                    <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />
                </div>

                <div>
                    <h2>Ultimos projetos</h2>

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

                    <div>
                        <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />

                        <div>
                            <h4>Titulo</h4>
                            <p>Tags</p>
                        </div>
                    </div>
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
