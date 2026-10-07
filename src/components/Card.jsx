import { Link } from 'react-router-dom';

function Card({ imagen, alt, etiqueta, marca, modelo, anio, km, precio }) {
  return (
    <li className="vehicle-card">
      <div className="card-img-container">
        <img src={imagen} alt={alt} />
        {etiqueta && (
          <span className={`badge ${etiqueta === 'Precio irrebajable' ? 'badge-red' : 'badge-dark'}`}>
            ↑ {etiqueta}
          </span>
        )}
      </div>
      <div className="card-body">
        <h3>{marca} · {modelo}</h3>
        <p className="specs-text">{anio} · {km}</p>
        <div className="price-section">
          <span className="price-label">Precio de contado</span>
          <span className="price-value">{precio}</span>
        </div>
        <Link to="/contacto" className="btn-consultar">
          Consultar vehículo
        </Link>
      </div>
    </li>
  );
}

export default Card;