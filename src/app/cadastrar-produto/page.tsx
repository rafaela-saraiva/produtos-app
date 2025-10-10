'use client' 

import TextField from "@/components/TextField"; // 
import './style.module.css' 
import axios, { AxiosResponse } from "axios";


export default function ProdutoForm() {
  
  let nome = "";
  let preco = "";
  let fotoUrl = "";
  
  function sucesso(response: AxiosResponse) {
      alert("Cadastrado com sucesso!")
    }
  
    function falha(){
      alert("FALHOU!");
    }
    
    function todoCaso(){
      /*setIsLoading(false);*/
    }

  // função p quando o usuario "Salvar Produto"
  function botaoEnviarOnClick(){
    // setIsLoading(true)
    axios.post("https://produtos-server.onrender.com/api/produtos", {
      nome: nome,
      preco: preco,
      fotoUrl: fotoUrl
    })
    .then(sucesso)
    .catch(falha)
    .finally(todoCaso);
  }
  function handleNomeChange(texto: string){
    nome = texto;
  }
  function handleEmailChange(texto: string){
    preco = texto;
  }
  function handleFotoChange(texto: string){
    fotoUrl = texto;
  }
  
 

  // Retorno JSX (o que será renderizado na tela)
 return (
     <>
     
     <h1>Cadastrar</h1>
     <form action="" className ="formContato">
       <TextField label="Nome" type="text" onChange={handleNomeChange}/>
       <TextField label="Preço" type="text" onChange={handleEmailChange}/>
       <TextField label="Foto" type="text" onChange={handleFotoChange}/>
       
       <button type="button" onClick={botaoEnviarOnClick}>Enviar</button>
     </form>
     </>
  );
  
}
