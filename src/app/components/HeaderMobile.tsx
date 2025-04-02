'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex flex-1 flex-col sticky top-0 z-10 bg-white dark:bg-neutral-800 border-b border-gray-200 p-4 -mx-10 px-10 ">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium dark:text-white hoverable">
                    <Link href="/">Tiago Lucas.dev</Link>
                </h2>
                <div className="flex items-center gap-8">
                    <ThemeSwitch />
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="focus:outline-none">
                        {menuOpen ? <X size={32} className="dark:fill-white" /> : <List size={32} className="dark:fill-white" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="mt-4 overflow-hidden">
                        <ul className="flex flex-col gap-4 font-semibold dark:text-white">
                            <li className="hoverable">
                                <Link href="#sobre-mim" onClick={() => setMenuOpen(false)}>
                                    Sobre mim
                                </Link>
                            </li>
                            <li className="hoverable">
                                <Link href="#ultimos-projetos" onClick={() => setMenuOpen(false)}>
                                    Últimos projetos
                                </Link>
                            </li>
                            <li className="hoverable">
                                <Link href="#experiencia" onClick={() => setMenuOpen(false)}>
                                    Experiência
                                </Link>
                            </li>
                            <li className="hoverable">
                                <Link href="#contato" onClick={() => setMenuOpen(false)}>
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
