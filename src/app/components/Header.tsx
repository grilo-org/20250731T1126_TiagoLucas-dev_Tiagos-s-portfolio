import { List } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';


export default function Header() {

  return(            
          <header
                className="flex items-center justify-between py-6 sticky top-0 z-10 bg-white dark:bg-neutral-800 -mx-10 px-10 border-b border-gray-200
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
      <List size={32} color="black" weight="bold" className="dark:fill-white" />
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
            )
}