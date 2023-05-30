import "../App";
import NavBar from "./NavBar";
import Sobre from "./ConteudoProd";
import CarouselFadeExample from "./Carrousel";
import Rodape from "./footer";
import Cards from "./CardProd";
import "../style.css"; 


function Home() {
  return (
    <div>
        <NavBar/>
        <CarouselFadeExample/>
      <div className="produtosHome">
        <Sobre/>
        <Cards/>
        <Cards/>
      </div>
       
        <Rodape/> 
    </div> 
  );
}
export default Home;
