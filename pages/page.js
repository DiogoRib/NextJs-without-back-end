import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Deletecomponent } from './api/hellov2';
import { Updatecomponent } from './api/hellov2';

export default function PageCard() {
  
  const [comp, setcompon] = useState();
  const [compo, setcompo] = useState();

    useEffect( () => {
      setcompon(JSON.parse(localStorage.getItem('component')));
      //set user using local storage "componente"
      var teste = JSON.parse(localStorage.getItem('component'));
      }, []);
      
      const info = (id) => {
        window.location.href = `/store/${id}`;
  
      }

      const eliminacomp = (id) => {
        Deletecomponent(id);
        window.location.reload();
        alert('Componente Eliminado com sucesso!');
      }

      const updatecomp = (id) => {
        window.location.href =`/editsore/${id}`;
      }

    
  return (
    <div className={styles.container}>
      <Head>
        <title>Gestão</title>
        <meta name="description" content="Gestão dos Produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <a href='/add' class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Criar Componente
      </a>
      
      <br></br>
      <br></br>
      <br></br>

       <section>
            <div>Lista de Componentes</div>

            
            <div id="comp">
                
                <div className="head">Nome</div>
                <div className="head">Stock</div>
                <div className="head">Preço</div>
                <div className="head">Ações</div>
                
                {comp && comp.map( (comp, index) => 
                            {
                              return(
                              <div  key={index}>
                                  <div >{comp.text}</div>
                                  <div>{comp.stock}</div>
                                  <div>{comp.preco}</div>
                                  <div><button className='btninfo' onClick={() => info(comp.id)} >Info</button></div>
                                  <div><button className='btneditar' onClick={() => updatecomp(comp.id)}>Editar</button></div>
                                  <div><button className='btneliminar' onClick={() => eliminacomp(comp.id)}>Eliminar</button></div>
                              </div>                       
                              )})}
              </div>

              
        </section> 
      </main>
    </div>
  )
}