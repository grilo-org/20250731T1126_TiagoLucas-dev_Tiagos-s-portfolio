'use client';

import { useForm } from 'react-hook-form';


export default function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: string) => console.log(data);
  console.log(errors);

    return (
        <section className="mt-10">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input
                        type="text"
                        placeholder="Nome"
                        {...register('name', {})}
                        className="border p-2 w-full 
                                    placeholder-gray-500 bg-gray-200
                                    "
                    />
                </label>
                <label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        {...register('email', {})}
                        className="border p-2 w-full 
                                    placeholder-gray-500 bg-gray-200
"
                    />
                </label>
                <input
                    className="bg-black text-white py-4 px-12 cursor-pointer
"
                    type="submit"
                    placeholder="Enviar"
                />
            </form>
        </section>
    );
}
