import Image from "next/image";

export default function Home() {
  return (
      <div>
          <header>
              <h2>
                  <a href="/">Tiago Lucas.dev</a>
              </h2>

              <nav>
                  <menu>
                      <ul>Sobre</ul>
                      <ul>Experiencia</ul>
                      <ul>Contato</ul>
                  </menu>
              </nav>
          </header>

          <main>
              <div>
                  <div>
                      <div>React | Vite | Next</div>

                      <h1>&lt; Desenvolvedor /&gt;</h1>

                      <p>Sempre na busca de novos conhecimentos e melhorar cada vez mais, utilizando as melhores práticas e metodos no desenvolvimento. Prazer... Tiago Lucas 👋</p>

                      <button>Contato</button>
                  </div>
                  <Image src="/globe.svg" alt="Picture of the author" width={250} height={500} />
              </div>

          <div>
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
              <Image src="/python.svg" alt="Picture of the author" width={100} height={100} />
              <h2>Desenvolvimento Web</h2>
            </section>
        </div>

          </main>
      </div>
  );
}
