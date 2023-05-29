import "../App";
import NavBar from "./NavBar";
import Sobre from "./ConteudoProd";
import CarouselFadeExample from "./Carrousel";
import Rodape from "./footer";


function Home() {
  return (
    <div> 
        <NavBar/>
        <CarouselFadeExample/>
        <Sobre/>
        <Rodape/> 
    </div>
  );
}
export default Home;
