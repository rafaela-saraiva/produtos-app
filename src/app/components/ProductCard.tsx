type ProductCardProps = {
    nome: string;
    preco: number;
    descricao?: string;
    img: string;
  };
  
  export default function ProductCard({ nome, preco, descricao, img }: ProductCardProps) {
    return (
      <div className="card">
        <h3>{nome}</h3>
        <img src={img} alt={nome} width={256} />
        <ul>
          <li>R$ {preco !== undefined ? preco.toFixed(2) : "Preço indisponível"}</li>
          {descricao && <li>{descricao}</li>}
        </ul>
        <button>Comprar</button>
      </div>
    );
  }
  
