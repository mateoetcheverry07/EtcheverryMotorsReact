import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';


function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>Etcheverry Motors</h2>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li><Link to="/vende">Vende tu vehículo!</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;