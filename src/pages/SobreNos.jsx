import NavBar from './NavBar';
import Rodape from './footer';
import SobreNosCont from './SobreNosCont';

function SobreNos(){
    return(
        <div> 
        <NavBar/> 
            <div>
                <SobreNosCont/>
            </div>
            <div>
                <Rodape/>
            </div>

        </div>
    );
}
export default SobreNos;