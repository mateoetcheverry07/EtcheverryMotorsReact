import { useState } from 'react';
import '../assets/styles/Galeria.css';

function Galeria() {
  const fotos = [
    {
      id: 1,
      url: `${import.meta.env.BASE_URL}img/99agenciaagencia.jpg`,
      descripcion: 'Nuestras oficinas y salón de ventas',
      categoria: 'Instalaciones'
    },
    {
      id: 2,
      url: `${import.meta.env.BASE_URL}img/99galeriacliente.jpg`,
      descripcion: 'Entrega de un 0km a cliente feliz',
      categoria: 'Entregas'
    },
    {
      id: 3,
      url: `${import.meta.env.BASE_URL}img/99galeriataller.jpg`,
      descripcion: 'Sector de chapa y pintura profesional',
      categoria: 'Taller'
    },
    {
      id: 4,
      url: `${import.meta.env.BASE_URL}img/99agenciaagencia2.jpg`,
      descripcion: 'Sala de espera y atención personalizada',
      categoria: 'Instalaciones'
    },
    {
      id: 5,
      url: `${import.meta.env.BASE_URL}img/99galeriacliente2.jpg`,
      descripcion: 'Firma de documentación y entrega de llaves',
      categoria: 'Entregas'
    },
    {
      id: 6,
      url: `${import.meta.env.BASE_URL}img/99galeriataller2.jpg`,
      descripcion: 'Revisión técnica vehicular en taller',
      categoria: 'Taller'
    }
  ];

  const [filtro, setFiltro] = useState('Todas');

  const fotosFiltradas = fotos.filter(foto =>
    filtro === 'Todas' ? true : foto.categoria === filtro
  );

  return (
    <section className="galeria-fotos-container">
      <div className="galeria-fotos-header">
        <h2>Galería de Imágenes</h2>
        <p>Conocé nuestras instalaciones, el equipo y a nuestros clientes.</p>

        <div className="filtros-fotos">
          <button
            className={filtro === 'Todas' ? 'btn-foto activo' : 'btn-foto'}
            onClick={() => setFiltro('Todas')}
          >
            Todas
          </button>
          <button
            className={filtro === 'Instalaciones' ? 'btn-foto activo' : 'btn-foto'}
            onClick={() => setFiltro('Instalaciones')}
          >
            Instalaciones
          </button>
          <button
            className={filtro === 'Entregas' ? 'btn-foto activo' : 'btn-foto'}
            onClick={() => setFiltro('Entregas')}
          >
            Entregas
          </button>
          <button
            className={filtro === 'Taller' ? 'btn-foto activo' : 'btn-foto'}
            onClick={() => setFiltro('Taller')}
          >
            Taller
          </button>
        </div>
      </div>

      <div className="fotos-grid">
        {fotosFiltradas.map((foto) => (
          <div key={foto.id} className="foto-item">
            <img src={foto.url} alt={foto.descripcion} loading="lazy" />
            <div className="foto-overlay">
              <span>{foto.descripcion}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;