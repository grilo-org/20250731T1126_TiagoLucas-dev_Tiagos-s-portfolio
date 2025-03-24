'use client';

import { useForm } from 'react-hook-form';

interface FormData {
    name: string;
    email: string;
}

export default function Form() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const { name, email } = data;
        const subject = encodeURIComponent('Contato pelo site');
        const body = encodeURIComponent(`Olá,\n\nMeu nome é ${name} e gostaria de entrar em contato. Seguem meus dados:\n\nNome: ${name}\nEmail: ${email}\n\nAguardo seu retorno.\n\nObrigado!`);
        window.location.href = `mailto:titi020604@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="mt-10 md: w-full">
            <form className="flex flex-col gap-6 px-6" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input type="text" placeholder="Nome" {...register('name', { required: 'O nome é obrigatório' })} className="border p-2 w-full placeholder-gray-500 bg-gray-200" />
                </label>
                <label>
                    <input type="email" placeholder="E-mail" {...register('email', { required: 'O email é obrigatório' })} className="border p-2 w-full placeholder-gray-500 bg-gray-200" />
                </label>
                <input className="bg-black text-white py-4 px-12 cursor-none hoverable dark:bg-white dark:text-black dark:rounded-t-lg" type="submit" value="Enviar" />
            </form>
        </section>
    );
}
