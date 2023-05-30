import React from 'react';
import imagens from '../assets/Instagram.svg'
import imagensF from '../assets/Facebook.svg'
import imagensT from '../assets/Twitter.svg'


function Rodape() { 
  return (
    <footer className="bg-dark text-light">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <h5>Informações The Wave</h5>
          <p>Endereço da Loja</p>
          <p>Telefone: (123) 456-7890</p>
          <p>Email: info@thewave.com</p>
        </div>
        <div className="col-lg-4">
          <h5>Links Úteis</h5>
          <ul className="list-unstyled">
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/sobre">Produtos</a></li>
            <li><a href="/Contato">Contato</a></li>
            <li><a href="/sobrenos">Sobre Nós</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5>Redes Sociais</h5>
          <ul className="list-unstyled">
            <img src={imagens} alt="" /><br />
            <img src={imagensF} alt="" /><br/>
            <img src={imagensT} alt="" />
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-dark text-light text-center py-3">
      &copy; {new Date().getFullYear()} The Wave. Todos os direitos reservados.
    </div>
  </footer>
  );
}

export default Rodape;