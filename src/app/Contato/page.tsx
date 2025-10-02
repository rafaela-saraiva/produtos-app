'use client'
import TextField from "../../components/TextField";
import Image from "next/image";
import './styles.module.css'
import Header from "../../components/Header";
 
export default function Contato() {
 
let nome = "";
let email = "";
let assunto = "";
let mensagem = "";
 
  function botaoEnviarOnClick(){
    alert(`${nome}\n${email}\n${assunto}\n${mensagem}`);
  }
  function handleNomeChange(texto: string){
    nome = texto;
  }
  function handleEmailChange(texto: string){
    email = texto;
  }
  function handleAssuntoChange(texto: string){
    assunto = texto;
  }
  function handleMensagemChange(texto: string){
    mensagem = texto;
  }
 
  return (
    <>
    
    <h1>Contato</h1>
    <form action="" className ="formContato">
      <TextField label="Nome" type="text" onChange={handleNomeChange}/>
      <TextField label="E-mail" type="email" onChange={handleNomeChange}/>
      <TextField label="Assunto" type="text" onChange={handleNomeChange}/>
      <TextField label="Mensagem" type="text" multiline onChange={handleNomeChange}/>
      <button onClick={botaoEnviarOnClick}>Enviar</button>
    </form>
    </>
  );
}