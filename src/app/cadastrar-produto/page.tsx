'use client' 

import TextField from "@/components/TextField"; // 
import './style.module.css' 


export default function ProdutoForm() {
  
  let nome = "";
  let preco = "";
  let descricao = "";
  

  // função p quando o usuario "Salvar Produto"
  function botaoEnviarOnClick(){
    alert(`${nome}\n${preco}\n${descricao}`);
  }
  function handleNomeChange(texto: string){
    nome = texto;
  }
  function handleEmailChange(texto: string){
    preco = texto;
  }
  function handleAssuntoChange(texto: string){
    descricao = texto;
  }
  
 

  // Retorno JSX (o que será renderizado na tela)
 return (
     <>
     
     <h1>Cadastrar</h1>
     <form action="" className ="formContato">
       <TextField label="Nome" type="text" onChange={handleNomeChange}/>
       <TextField label="Preço" type="text" onChange={handleNomeChange}/>
       <TextField label="Descrição" type="text" onChange={handleNomeChange}/>
       
       <button onClick={botaoEnviarOnClick}>Enviar</button>
     </form>
     </>
  );
  
}
