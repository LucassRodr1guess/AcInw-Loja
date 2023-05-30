import Sobre from "./ConteudoProd";
import NavBar from "./NavBar";
import Rodape from "./footer";
import Cards from "./CardProd";

function Produtos(){
    return(
    <div>
        <NavBar/>
        <h1>Produtos</h1>
        <Sobre/>
        <Cards/>
        <Rodape/>
    </div>
    );
}
export default Produtos