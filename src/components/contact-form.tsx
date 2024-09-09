"use client";

import { GoPaperclip } from 'react-icons/go';
import { Input } from '../components/form/input';
import { TextArea } from '../components/form/text-area';
import { ChangeEvent, useState } from 'react';

export const ContactForm = () => {
    const [names, setNames] = useState('');
    const [lastNames, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nivelAcademico, setNivelAcademico] = useState('');
    const [puesto, setPuesto] = useState('');

  return (
    <form action="" className='flex flex-col z-10 w-full'>
        <div className='flex flex-row flex-wrap w-full justify-center items-center'>
            <Input label='Nombres' type='text' placeholder='Nombres' onChange={(e: ChangeEvent<HTMLInputElement>) => setNames(e.target.value)} value={names} name='Nombres' />
            <Input label='Apellidos' type='text' placeholder='Apellidos' onChange={(e: ChangeEvent<HTMLInputElement>) => setLast(e.target.value)} value={lastNames} name='Apellidos' />
        </div>
        <Input label='Correo electronico' type='email' placeholder='Correo' onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} name='Correo' />
        <Input label='Telefono' type='number' placeholder='Telefono' onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} value={phone} name='Telefono' />
        <TextArea label='Nivel Academico' type='text' placeholder='Nivel academico o grado universitario...' onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNivelAcademico(e.target.value)} value={nivelAcademico} name='Nivel Academico' />
        <TextArea label='Puesto' type='text' placeholder='Puesto al que aplica...' onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPuesto(e.target.value)} value={puesto} name='puesto' />
        
        <div className='flex flex-row items-end justify-end'>
          <button 
              className="text-red-700 text-[14px] mx-2 my-6 h-14  bg-transparent border-2 border-red-700 hover:bg-red-700 hover:text-white focus:outline-none font-medium rounded-[15px] px-10 py-2 outline-none">
                  Enviar
          </button>
          <button 
              className="text-red-700 text-[14px] mx-2 my-6 h-14 bg-transparent border-2 border-red-700 hover:bg-red-700 hover:text-white focus:outline-none font-medium rounded-[15px] px-10 py-2 outline-none">
                  <GoPaperclip className='inline-block' size={24} />
                  Adjuntar CV
          </button>
        </div>
    </form>
  )
}

