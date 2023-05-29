import React from 'react';

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
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5>Redes Sociais</h5>
          <ul className="list-unstyled">
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
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