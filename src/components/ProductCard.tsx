type ProductCardProps = {
    nome: string;
    preco: number;
    descricao?: string;
    fotoUrl: string;
  };
  
  export default function ProductCard({ nome, preco, descricao, fotoUrl }: ProductCardProps) {
    return (
      <div className="card">
        <h3>{nome}</h3>
        <img src={fotoUrl} alt={nome} width={256} />
        <ul>
          <li>R$ {preco !== undefined ? preco: "Preço indisponível"}</li>
          {descricao && <li>{descricao}</li>}
        </ul>
        <button>Comprar</button>
      </div>
    );
  }
  
