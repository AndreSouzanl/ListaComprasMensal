"use client";
import Produto from "@/data/model/produto";


export interface ListaProdutosProps{
  produtos: Produto[];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ListaProduto(props: ListaProdutosProps){
function rederizarItensLista(){
  const lista = [];

  for(let i = 0; i< props.produtos.length; i++){
    const produto = props.produtos[i];
    lista.push(
      <div key={produto.id}>
        <p>{produto.nome}</p>
        <p>{produto.quantidade} ({produto.unidade})</p>
       
      </div>
    )
  }
  return lista
}

  return(
    <div className="flex flex-col gap-5">{rederizarItensLista()}</div>
  )
}

