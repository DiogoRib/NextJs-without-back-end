const editarcomp = () => {
   
   
   
    return(
        <div id="dynamic">
        Insere aqui o novo nome: <input name="text"  required></input>
        <br></br>
        <br></br>
        Insere aqui o novo stock: <input name="stock" required></input>
        <br></br>
        <br></br>
        Insere aqui o novo Preço: <input name="preco" required></input>
        <br></br>
        <br></br>

        <a  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Guardar
        </a>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <a href='/dashboard' className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                Voltar
            </a>
        </div>
    )

}

export default editarcomp;