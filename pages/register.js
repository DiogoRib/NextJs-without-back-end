import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline , MdPersonOutline} from 'react-icons/md';
import { createUser } from './api/hello';


export default function Home() {
  
  const[text , setText] = React.useState('');
  const[email , setEmail] = React.useState('');
  const[password , setPassword] = React.useState('');

  const handleText = (e) => { setText(e.target.value) };
  const handleEmail = (e) => { setEmail(e.target.value) };
  const handlePassword = (e) => { setPassword(e.target.value) };
  
  const Registeracc = () =>{

    if(text === '' || email === '' || password === '')
    {
      alert('Campos não podem estar vazios');
      return;
    }

    var response = createUser(text,email,password);

  }

  
  return ( 
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bd-gray-100">
      <Head>
        <title>Pc Fefal</title>
        <meta name="description" content="Created by Cramn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
              <div className="w-3/5 p-5">
                <div className='text-left font-bold'>
                  <span className='text-blue-500'>PC</span>Fefal
                </div>
                <div className='py-10'>
                  <h2 className='text-3xl font-bold text-blue-500 mb-2'>Crie aqui a sua conta!</h2>
                  <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>
                </div>

                
                <div className='flex flex-col items-center'>
                
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <MdPersonOutline  className='text-gray-400 mr-2' />
                    <input type="text" 
                    name="text" 
                    placeholder='Nome' 
                    onChange={handleText}
                    className='bg-gray-100 outline-none text-sm flex-1' required/> 
                  </div>

                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope  className='text-gray-400 mr-2' />
                    <input type="email" 
                    name="email" 
                    placeholder='Email'
                    onChange={handleEmail}
                    className='bg-gray-100 outline-none text-sm flex-1' required/> 
                  </div>

                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                      <MdLockOutline  className='text-gray-400 mr-2' />
                      <input 
                      type="password" 
                      name="password" 
                      placeholder='Palavra-Passe'   
                      onChange={handlePassword} 
                      className='bg-gray-100 outline-none text-sm flex-1'  required/> 
                  </div>
                </div>
                <button onClick={Registeracc} type='submit' className='border-2 text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white'>Registar</button>
              </div>

              <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className='text-3xl font-bold mb-2'>Bem-vindo</h2>
                <div className='border-2 w-10 border-white inline-block mb-2'></div>
                <p className='mb-10'>Clique em baixo para dar Login!</p>
                <a href='/' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500'>Login</a>
              </div>
        </div>
      </main>
    </div>
  )
}
