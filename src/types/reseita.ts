export interface Receita {
  id: string;
  titulo: string;
  categoria: string;
  classificacao: number;
  imgUrl: string;
  preparo: number;
  rendimento: string;
  ingredientes: string[];
  instrucoes: string[];
}
