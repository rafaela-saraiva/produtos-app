export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    fotoUrl: string;
    descricao?: string;
    categoria?: string;
  }
  