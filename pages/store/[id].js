import { useState, useEffect } from "react";


const Details = () =>
{
    const [eu, setEu] = useState();

      useEffect( (id) => {
        setEu(JSON.parse(localStorage.getItem("component")));
        //set user using local storage "users"
        var teste = JSON.parse(localStorage.getItem("component"));
 
    }, []);

    return(
        
        <div id="dynamic">
        <h2>Nome: {eu && eu.text}</h2>
        <br></br>
        <br></br>
        <h2>Stock: {eu&& eu.stock}</h2>
        <br></br>
        <br></br>
        <h2>Preço: {eu && eu.preco}</h2>
        <br></br>
        <br></br>

        <a href='/dashboard' className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                Voltar
            </a>
        </div>
    );
}

export default Details;