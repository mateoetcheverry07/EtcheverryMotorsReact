import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Catalogo.css';

function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('Todas');
  const [precioSeleccionado, setPrecioSeleccionado] = useState('Todos');
  const [kmSeleccionado, setKmSeleccionado] = useState('Todos');
  const [anioSeleccionado, setAnioSeleccionado] = useState('Todos');
  const [paginaActual, setPaginaActual] = useState(1);

/* array autos con ruta git */
  const vehiculos = [
    {
      id: 1,
      marca: "Chevrolet",
      modelo: "S-10 HC AT 4X4",
      anio: 2022,
      kmNum: 57800,
      km: "57.800 km",
      precio: "$34.500.000",
      precioNum: 34500000,
      etiqueta: "Nuevo ingreso",
      imagen: `${import.meta.env.BASE_URL}img/NNs10.jpeg`,
      alt: "Chevrolet S10"
    },
    {
      id: 2,
      marca: "Peugeot",
      modelo: "208 1.6 5P ACTIVE",
      anio: 2020,
      kmNum: 87300,
      km: "87.300 km",
      precio: "$18.900.000",
      precioNum: 18900000,
      etiqueta: "Precio irrebajable",
      imagen: `${import.meta.env.BASE_URL}img/NN208.jpeg`,
      alt: "Peugeot 208"
    },
    {
      id: 3,
      marca: "Volkswagen",
      modelo: "Amarok V6 3.0TD 4X4",
      anio: 2023,
      kmNum: 21500,
      km: "21.500 km",
      precio: "$45.000.000",
      precioNum: 45000000,
      etiqueta: "Nuevo ingreso",
      imagen: `${import.meta.env.BASE_URL}img/NNamarok.jpeg`,
      alt: "Volkswagen Amarok"
    },
    {
      id: 4,
      marca: "Nissan",
      modelo: "ADVANCE CVT",
      anio: 2023,
      kmNum: 42000,
      km: "42.000 km",
      precio: "$25.400.000",
      precioNum: 25400000,
      etiqueta: "Nuevo ingreso",
      imagen: `${import.meta.env.BASE_URL}img/NNkicks.jpeg`,
      alt: "Nissan Kicks"
    },
    {
      id: 5,
      marca: "Jeep",
      modelo: "Renegade SPORT 1.8L",
      anio: 2024,
      kmNum: 26000,
      km: "26.000 km",
      precio: "$28.300.000",
      precioNum: 28300000,
      etiqueta: "Oferta",
      imagen: `${import.meta.env.BASE_URL}img/NNrenegade.jpeg`,
      alt: "Jeep Renegade"
    },
    {
      id: 6,
      marca: "Fiat",
      modelo: "Titano RANCH 2.2",
      anio: 2025,
      kmNum: 13000,
      km: "13.000 km",
      precio: "$38.900.000",
      precioNum: 38900000,
      etiqueta: "Nuevo ingreso",
      imagen: `${import.meta.env.BASE_URL}img/NNtitanio.jpeg`,
      alt: "Fiat Titano"
    },
    {
      id: 7,
      marca: "Peugeot",
      modelo: "208 1.6 Allure Pack",
      anio: 2024,
      kmNum: 34000,
      km: "34.000 km",
      precio: "$21.200.000",
      precioNum: 21200000,
      etiqueta: "Nuevo ingreso",
      imagen: `${import.meta.env.BASE_URL}img/NN208B.jpeg`,
      alt: "Peugeot 208 B"
    },
    {
      id: 8,
      marca: "Volkswagen",
      modelo: "Golf 1.4 Vii Tsi",
      anio: 2021,
      kmNum: 72400,
      km: "72.400 km",
      precio: "$19.800.000",
      precioNum: 19800000,
      etiqueta: "Precio irrebajable",
      imagen: `${import.meta.env.BASE_URL}img/NNgolf.jpeg`,
      alt: "Volkswagen Golf"
    },
    {
      id: 9,
      marca: "Ford",
      modelo: "Eco Sport 1.5 Titanium",
      anio: 2013,
      kmNum: 147200,
      km: "147.200 km",
      precio: "$11.500.000",
      precioNum: 11500000,
      etiqueta: "Oferta",
      imagen: `${import.meta.env.BASE_URL}img/NNecosport.jpeg`,
      alt: "Ford EcoSport"
    }
  ];

  const marcasUnicas = ['Todas', ...new Set(vehiculos.map(v => v.marca))];
  const aniosUnicos = ['Todos', ...new Set(vehiculos.map(v => v.anio))].sort((a, b) => b - a);

/* filtros logica */
  const vehiculosFiltrados = vehiculos.filter(auto => {
    const matchBusqueda = auto.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
                          auto.modelo.toLowerCase().includes(busqueda.toLowerCase());
    
    const matchMarca = marcaSeleccionada === 'Todas' || auto.marca === marcaSeleccionada;
    
    let matchPrecio = true;
    if (precioSeleccionado === 'hasta25') matchPrecio = auto.precioNum <= 25000000;
    if (precioSeleccionado === 'entre25y35') matchPrecio = auto.precioNum > 25000000 && auto.precioNum <= 35000000;
    if (precioSeleccionado === 'mas35') matchPrecio = auto.precioNum > 35000000;

    let matchKm = true;
    if (kmSeleccionado === 'menos30k') matchKm = auto.kmNum < 30000;
    if (kmSeleccionado === 'entre30ky70k') matchKm = auto.kmNum >= 30000 && auto.kmNum <= 70000;
    if (kmSeleccionado === 'mas70k') matchKm = auto.kmNum > 70000;

    let matchAnio = anioSeleccionado === 'Todos' || auto.anio === Number(anioSeleccionado);

    return matchBusqueda && matchMarca && matchPrecio && matchKm && matchAnio;
  });

/* paginacion */
  const itemsPorPagina = 6;
  const totalPaginas = Math.ceil(vehiculosFiltrados.length / itemsPorPagina) || 1;
  
  const paginaValida = paginaActual > totalPaginas ? 1 : paginaActual;
  const indiceUltimoItem = paginaValida * itemsPorPagina;
  const indicePrimerItem = indiceUltimoItem - itemsPorPagina;
  const vehiculosPaginados = vehiculosFiltrados.slice(indicePrimerItem, indiceUltimoItem);

  const resetearPagina = () => setPaginaActual(1);

  return (
    <main className="catalogo-page">
      <div className="catalog-container">
        
        {/* Panel lateral de filtros */}
        <aside className="filters-sidebar">
          <h3>Filtrar búsqueda</h3>
          
          <div className="filter-group">
            <label htmlFor="filtro-precio">Precio</label>
            <select 
              id="filtro-precio"
              value={precioSeleccionado} 
              onChange={(e) => { setPrecioSeleccionado(e.target.value); resetearPagina(); }} 
              className="filter-select"
            >
              <option value="Todos">Todos los precios</option>
              <option value="hasta25">Hasta $25.000.000</option>
              <option value="entre25y35">$25.000.000 - $35.000.000</option>
              <option value="mas35">Más de $35.000.000</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filtro-marca">Marca</label>
            <select 
              id="filtro-marca"
              value={marcaSeleccionada} 
              onChange={(e) => { setMarcaSeleccionada(e.target.value); resetearPagina(); }} 
              className="filter-select"
            >
              {marcasUnicas.map((marca, index) => (
                <option key={index} value={marca}>
                  {marca === 'Todas' ? 'Todas las marcas' : marca}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filtro-km">Kilometraje</label>
            <select 
              id="filtro-km"
              value={kmSeleccionado} 
              onChange={(e) => { setKmSeleccionado(e.target.value); resetearPagina(); }} 
              className="filter-select"
            >
              <option value="Todos">Cualquier kilometraje</option>
              <option value="menos30k">Menos de 30.000 km</option>
              <option value="entre30ky70k">30.000 km - 70.000 km</option>
              <option value="mas70k">Más de 70.000 km</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filtro-anio">Año</label>
            <select 
              id="filtro-anio"
              value={anioSeleccionado} 
              onChange={(e) => { setAnioSeleccionado(e.target.value); resetearPagina(); }} 
              className="filter-select"
            >
              {aniosUnicos.map((anio, index) => (
                <option key={index} value={anio}>
                  {anio === 'Todos' ? 'Todos los años' : anio}
                </option>
              ))}
            </select>
          </div>
        </aside>

        <section className="catalog-content">
          <div className="catalog-header-top">
            <h1>Autos Usados</h1>
            <div className="search-bar-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Buscá por versión, marca o modelo..." 
                value={busqueda}
                onChange={(e) => { setBusqueda(e.target.value); resetearPagina(); }}
              />
            </div>
          </div>

          <div className="results-info">
            <span>{vehiculosFiltrados.length} Resultados encontrados</span>
          </div>

          {vehiculosPaginados.length === 0 ? (
            <div className="no-results">
              <p>No se encontraron vehículos que coincidan con tu búsqueda o filtros.</p>
            </div>
          ) : (
            <ul className="vehicle-grid">
              {vehiculosPaginados.map((auto) => (
                <li key={auto.id} className="vehicle-card">
                  <div className="card-img-container">
                    <img src={auto.imagen} alt={auto.alt} />
                    {auto.etiqueta && (
                      <span className={`badge ${auto.etiqueta === 'Precio irrebajable' ? 'badge-red' : 'badge-dark'}`}>
                        ↑ {auto.etiqueta}
                      </span>
                    )}
                  </div>
                  
                  <div className="card-body">
                    <h3>{auto.marca} · {auto.modelo}</h3>
                    <p className="specs-text">{auto.anio} · {auto.km}</p>
                    
                    <div className="price-section">
                      <span className="price-label">Precio de contado</span>
                      <span className="price-value">{auto.precio}</span>
                    </div>

                    <Link to="/contacto" className="btn-consultar">
                      Consultar vehículo
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {totalPaginas > 1 && (
            <div className="pagination-container">
              <button 
                onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))} 
                disabled={paginaValida === 1}
                className="btn-page"
              >
                Anterior
              </button>
              <span className="page-indicator">Página {paginaValida} de {totalPaginas}</span>
              <button 
                onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))} 
                disabled={paginaValida === totalPaginas}
                className="btn-page"
              >
                Siguiente
              </button>
            </div>
          )}

        </section>

      </div>
    </main>
  );
}

export default Catalogo;