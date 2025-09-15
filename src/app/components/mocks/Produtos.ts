import Produto from "@/models/Produto";

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Camiseta cinza",
    preco: 60.90,
    img: "camiseta.jpg",
    descricao: "Material: Algodão",
    categoria: "Camisetas",
  },
  {
    id: 2,
    nome: "Macacão jeans",
    preco: 50.00,
    img: "cachorro.jpg",
    categoria: "Jeans",
  },
  {
    id: 3,
    nome: "Calça jeans azul claro",
    preco: 99.99,
    img: "calca.jpg",
    descricao: "Cor: Azul claro",
    categoria: "Jeans",
  },
  {
    id: 4,
    nome: "Vestido longo marrom",
    preco: 70.00,
    img: "vestido.jpg",
    descricao: "Cor: Marrom",
    categoria: "Vestidos",
  },
  {
    id: 5,
    nome: "Meia Nike branca",
    preco: 45.80,
    img: "meia.jpg",
    descricao: "Cor: Branca",
    categoria: "Acessórios",
  },
];

export default produtos;
