import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline , MdPersonOutline} from 'react-icons/md';
import { loginUser } from './api/hello';


export default function Home()  {

  const[email , setEmail] = React.useState('');
  const[password , setPassword] = React.useState('');


  const handleEmail = (e) => { setEmail(e.target.value) };
  const handlePass = (e) => { setPassword(e.target.value) };

  const handlelogin = () =>{
    var response = loginUser(email,password);
    alert(response.message);
    if(response.status == 1){
      window.location.href = "/dashboard";
    }
  };

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
                  <h2 className='text-3xl font-bold text-blue-500 mb-2'>Entre na tua conta</h2>
                  <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>
                </div>

                
                <div className='flex flex-col items-center'>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                      <FaRegEnvelope  className='text-gray-400 mr-2' />
                      <input 
                      onChange={handleEmail}
                      type="email"
                      name="email" 
                      placeholder='Email' 
                      className='bg-gray-100 outline-none text-sm flex-1' required/> 
                    </div>

                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                      <MdLockOutline  className='text-gray-400 mr-2' />
                      <input 
                       onChange={handlePass}
                      type="password" 
                      name="password" 
                      placeholder='Palavra-Passe' 
                      className='bg-gray-100 outline-none text-sm flex-1' required/> 
                  </div>
                </div>
                

                <button onClick={handlelogin} type='submit' className='border-2 text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white'>Entrar</button>
              </div>

              <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className='text-3xl font-bold mb-2'>Bem-vindo</h2>
                <div className='border-2 w-10 border-white inline-block mb-2'></div>
                <p className='mb-10'>Clique em baixo e venha nos conhecer melhor!</p>
                <a href='/register ' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500'>Registar</a>
              </div>
        </div>
      </main>     
    </div>
  )
}

