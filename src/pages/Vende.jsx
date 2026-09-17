import { useState } from 'react';
import '../assets/styles/Vende.css';

function Vende() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    marca: '',
    modelo: '',
    anio: '2023',
    kilometros: '',
    vtv: 'si',
    motivo: 'tasacion'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--- DATOS DEL VEHÍCULO ENVIADOS PARA TASACIÓN ---");
    console.log(formData);
    alert("¡Solicitud enviada con éxito! Los datos fueron mostrados en la consola del navegador.");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      marca: '',
      modelo: '',
      anio: '2023',
      kilometros: '',
      vtv: 'si',
      motivo: 'tasacion'
    });
  };

  return (
    <main className="vende-page">
      <div className="vende-card">
        <h2>Vende tu vehículo al mejor precio</h2>
        <p className="vende-subtitle">
          Completá el formulario con los datos de tu usado y un asesor se comunicará con vos a la brevedad.
        </p>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="quick-form-row">
            <div className="form-group-inline">
              <label htmlFor="anio">Año</label>
              <select id="anio" name="anio" value={formData.anio} onChange={handleChange}>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            <div className="form-group-inline">
              <label htmlFor="marca">Marca</label>
              <input
                type="text"
                id="marca"
                name="marca"
                placeholder="Ej: Volkswagen"
                value={formData.marca}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-inline">
              <label htmlFor="modelo">Modelo</label>
              <input
                type="text"
                id="modelo"
                name="modelo"
                placeholder="Ej: Amarok"
                value={formData.modelo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="extended-form-grid">
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellido</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="kilometros">Kilómetros</label>
              <input
                type="number"
                id="kilometros"
                name="kilometros"
                placeholder="Ej: 45000"
                value={formData.kilometros}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-secondary">
            <div className="form-group">
              <label className="label-vtv">¿Cuenta con VTV al día?</label>
              <div className="radio-group">
                <input
                  type="radio"
                  id="vtv_si"
                  name="vtv"
                  value="si"
                  checked={formData.vtv === 'si'}
                  onChange={handleChange}
                />
                <label htmlFor="vtv_si">Sí</label>
                <input
                  type="radio"
                  id="vtv_no"
                  name="vtv"
                  value="no"
                  checked={formData.vtv === 'no'}
                  onChange={handleChange}
                />
                <label htmlFor="vtv_no">No</label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="motivo">Motivo de contacto</label>
              <select
                id="motivo"
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
              >
                <option value="tasacion">Quiero tasar mi usado</option>
                <option value="consignacion">Dejar en consignación</option>
                <option value="permuta">Parte de pago por otro</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Enviar Solicitud</button>
            <button type="reset" className="btn btn-secondary">Limpiar</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Vende;