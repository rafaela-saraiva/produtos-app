type Produto = {
  id: number;
  nome: string;
  fotoUrl: string;
  preco: number;
};

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Camiseta cinza",
    fotoUrl: "camiseta.jpg",
    preco: 60.90,
  },
  {
    id: 2,
    nome: "Macacão jeans",
    fotoUrl: "cachorro.jpg",
    preco: 50.00,
  },
  {
    id: 3,
    nome: "Calça jeans azul claro",
    fotoUrl: "calca.jpg",
    preco: 99.99,
  },
  {
    id: 4,
    nome: "Calça jeans",
    fotoUrl: "calca_2.jpg",
    preco: 50.00,
  },
  {
    id: 5,
    nome: "Vestido longo marrom",
    fotoUrl: "vestido.jpg",
    preco: 70.00,
  },
  {
    id: 6,
    nome: "Vestido longo florido verde",
    fotoUrl: "vestido_2.jpg",
    preco: 80.00,
  },
  {
    id: 7,
    nome: "Shorts jeans azul claro",
    fotoUrl: "shorts.jpg",
    preco: 120.99,
  },
  {
    id: 8,
    nome: "Shorts jeans azul escuro",
    fotoUrl: "shorts_2.jpg",
    preco: 120.99,
  },
  {
    id: 9,
    nome: "Bermuda Adidas preta",
    fotoUrl: "bermuda.jpg",
    preco: 110.80,
  },
  {
    id: 10,
    nome: "Meia Nike branca",
    fotoUrl: "meia.jpg",
    preco: 45.80,
  },
];

export default function ProductCard() {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <h2>{produto.nome}</h2>
          <img src={produto.fotoUrl} alt={produto.nome} width={256} />
          <ul>
            <li>R${produto.preco.toFixed(2)}</li>
          </ul>
          <button>Comprar</button>
        </li>
      ))}
    </ul>
  );
}
