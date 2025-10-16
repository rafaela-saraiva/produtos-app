'use client'
import { useEffect, useState } from "react";
import Produto from "../models/Produto";
import Header from "../components/Header";
import produtos from "../components/mocks/Produtos";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import "./page.css";
import axios, { AxiosResponse } from 'axios';
import Loading from "../components/Loading";



export default function Home() {
  
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] =useState(true);

  function sucesso(response: AxiosResponse) {
    setProdutos(response.data);
    console.log(response.data);
  }

  function falha(){
    alert("FALHOU!");
  }
  
  function todoCaso(){
    setIsLoading(false);
  }


  function loadProdutos(){
  axios.get("https://produtos-server.onrender.com/api/produtos")
  .then(sucesso)
  .catch(falha)
  .finally(todoCaso);
  }

  
  
  function mapear(produto:Produto){
    return(
      <ProductCard
      key={produto.id}
      nome={produto.nome}
      fotoUrl={produto.fotoUrl}
      preco={produto.preco}
      descricao={produto.descricao}
      />
 
    )
  }

  useEffect(loadProdutos, []);

  return (
    <>
      
       {(isLoading) && (<Loading/>)}
      <h1>Loja de roupa</h1>
      <h2>Venha ver!</h2>

      {/* Agora só lista os produtos vindos do mock */}
      <ProductList produtos={produtos} titulo={""} />

       {/* Camisetas 
      <section className="camisetas">
        <h2>Camisetas</h2>

        <h2>Camiseta cinza</h2>
        <img src="camiseta.jpg" alt="Camiseta cinza" width={256} />
        <ul>
          <li>R$60,90</li>
          <li>Material: Algodão</li>
        </ul>
        <button>Comprar</button>
      </section>
      
        
      
      <section className="jeans">
        <h2>Jeans</h2>

        <h2>Macacão jeans</h2>
        <img src="cachorro.jpg" alt="Macacão jeans" width={256} />
        <ul>
          <li>R$50,00</li>
        </ul>
        <button>Comprar</button>

        <h2>Calça jeans</h2>
        <img src="calca.jpg" alt="Calça jeans azul claro" width={256} />
        <ul>
          <li>R$99,99</li>
          <li>Cor: Azul claro</li>
        </ul>
        <button>Comprar</button>

        <h2>Calça jeans</h2>
        <img src="calca_2.jpg" alt="Calça jeans" width={256} />
        <ul>
          <li>R$50,00</li>
        </ul>
        <button>Comprar</button>
      </section>

      
      <section className="vestidos">
        <h2>Vestidos</h2>

        <h2>Vestido longo</h2>
        <img src="vestido.jpg" alt="Vestido longo marrom" width={256} />
        <ul>
          <li>R$70,00</li>
          <li>Cor: Marrom</li>
        </ul>
        <button>Comprar</button>

        <h2>Vestido longo florido</h2>
        <img src="vestido_2.jpg" alt="Vestido longo florido verde" width={256} />
        <ul>
          <li>R$80,00</li>
          <li>Cor: Verde</li>
        </ul>
        <button>Comprar</button>
      </section>

      
      <section className="shorts">
        <h2>Shorts</h2>

        <h2>Shorts jeans</h2>
        <img src="shorts.jpg" alt="Shorts jeans azul claro" width={256} />
        <ul>
          <li>R$120,99</li>
          <li>Cor: Azul claro</li>
        </ul>
        <button>Comprar</button>

        <h2>Shorts jeans</h2>
        <img src="shorts_2.jpg" alt="Shorts jeans azul escuro" width={256} />
        <ul>
          <li>R$120,99</li>
          <li>Cor: Azul escuro</li>
        </ul>
        <button>Comprar</button>
      </section>

      
      <section className="bermudas">
        <h2>Bermudas</h2>

        <h2>Bermuda Adidas</h2>
        <img src="bermuda.jpg" alt="Bermuda Adidas preta" width={256} />
        <ul>
          <li>R$110,80</li>
          <li>Cor: Preto</li>
        </ul>
        <button>Comprar</button>
      </section>

      <section className="acessorios">
        <h2>Acessórios</h2>

        <h2>Meia Nike</h2>
        <img src="meia.jpg" alt="Meia Nike branca" width={256} />
        <ul>
          <li>R$45,80</li>
          <li>Cor: Branca</li>
        </ul>
        <button>Comprar</button>
      </section>
      */}
    </>
  );
}

