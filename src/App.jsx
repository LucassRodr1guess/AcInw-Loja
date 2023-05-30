import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from "./pages/Home";
import Sobre from "./pages/Produtos";
import Contato from "./pages/Contato";
import SobreNos from "./pages/SobreNos";


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/sobre" element={<Sobre/>}/>
        <Route path = "/Contato" element={<Contato/>}/>
        <Route path = "/SobreNos" element={<SobreNos/>}/>

        

      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
