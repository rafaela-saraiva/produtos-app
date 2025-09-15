import Produto from "@/models/Produto";
import ProductCard from "./ProductCard";

interface ProductListProps {
  produtos: Produto[];
  titulo: string;
}

export default function ProductList({ produtos, titulo }: ProductListProps) {
  return (
    <section>
      <h2>{titulo}</h2>
      <ul>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            {...produto}
          />
        ))}
      </ul>
    </section>
  );
}
