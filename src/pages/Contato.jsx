import NavBar from './NavBar';
import Rodape from './footer';
import ContContato from './ConteudoCont';
import "../style.css"; 

function Contato(){
    return(
    <div>
    <NavBar/>  
    <div>
        <div>
          <ContContato/>
        </div>
    <div><Rodape/></div>
    </div>
    </div>
    );
}
export default Contato