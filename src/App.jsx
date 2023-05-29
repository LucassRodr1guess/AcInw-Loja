import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from "./pages/Home";
import Sobre from "./pages/Produtos";
import Contato from "./pages/Contato";


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/sobre" element={<Sobre/>}/>
        <Route path = "/Contato" element={<Contato/>}/>
        

      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
