import ListaProduto from "@/components/produto/ListaProduto";
import produtos from "@/data/constants/produtos";

export default function Home() {
  return (
    <div className="container">
     <ListaProduto produtos={produtos} />
    </div>
  );
}
