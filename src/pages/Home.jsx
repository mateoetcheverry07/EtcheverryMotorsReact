// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img 
          src={`${import.meta.env.BASE_URL}img/LogoEMM.PNG`} 
          alt="Logo Etcheverry Motors" 
          className="hero-logo" 
        />
        <h1>Bienvenidos a Etcheverry Motors</h1>
        <p>Encontra el usado que buscas, al mejor precio del mercado!</p>
        <Link to="/catalogo" className="btn btn-primary">Ver Modelos</Link>
      </div>
    </section>
  );
}

export default Home;