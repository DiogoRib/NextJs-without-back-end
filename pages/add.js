import React from 'react';
import Head from 'next/head';
import { createcomponent } from './api/hellov2';

export default function add(){
    
    const[text , setText] = React.useState('');
    const[stock , setStock] = React.useState('');
    const[preco , setPreco] = React.useState('');

    const handleText = (e) => { setText(e.target.value) };
    const handleStock = (e) => { setStock(e.target.value) };
    const handlePreco = (e) => { setPreco(e.target.value) };
    
    const Registercomponent = () =>{

        if(text === '' || stock === '' || preco === '')
        {
        alert('Campos não podem estar vazios');
        return;
        }
        else
        {
            
            var response = createcomponent(text,stock,preco);
            alert('O componente foi criado!');   
        }
    } 
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bd-gray-100">
        <Head>
        <title>Pc Fefal</title>
        <meta name="description" content="Created by Cramn" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl text-3xl flex max-w-4xl font-bold underlined">
                <div className="w-5/5 p-5">
                <div className='text-left font-bold'>
                    <span className='text-blue-500'>PC</span>Fefal
                </div>
                <div className='py-10'>
                    <h2 className='text-3xl font-bold text-blue-500 mb-2'>Registe aqui o Produto!</h2>
                    <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>
                </div>

                
                <div className='flex flex-col items-center'>
                
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    
                    <input type="text" 
                    name="text" 
                    placeholder='Nome' 
                    onChange={handleText}
                    className='bg-gray-100 outline-none text-sm flex-1' required/> 
                    </div>

                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    
                    <input type="text" 
                    name="stock" 
                    placeholder='Stock'
                    onChange={handleStock}
                    className='bg-gray-100 outline-none text-sm flex-1' required/> 
                    </div>

                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <input 
                        type="text" 
                        name="preco" 
                        placeholder='Preço'   
                        onChange={handlePreco} 
                        className='bg-gray-100 outline-none text-sm flex-1' required/> 
                    </div>
                </div>
                <button onClick={Registercomponent} type='submit' className='border-2 text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white'>Registar</button>
                </div>

            </div>
            </main>
            <a href='/dashboard' className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                Voltar
            </a>
            </div>    
    )
}

