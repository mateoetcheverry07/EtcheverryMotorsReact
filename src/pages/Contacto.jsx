import '../assets/styles/Contacto.css';

function Contacto() {
  return (
    <main className="contacto-page">
      <div className="contacto-overlay">
        <section className="contacto-container">
          <div className="contacto-header">
            <h2>Contacto y Ubicación</h2>
            <p>Ponete en contacto con nosotros o visitanos en nuestro local exclusivo.</p>
          </div>
          
          <div className="redes-centradas">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contacto-card-link" title="Ubicación">
              <div className="icon-box">
                <img src="https://api.iconify.design/mdi:map-marker.svg?color=%232563eb" alt="Ubicación" />
              </div>
              <span>Nuestra Sede</span>
            </a>

            <a href="tel:012345678" className="contacto-card-link" title="Teléfono">
              <div className="icon-box">
                <img src="https://api.iconify.design/mdi:phone.svg?color=%232563eb" alt="Teléfono" />
              </div>
              <span>Llamanos</span>
            </a>

            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="contacto-card-link whatsapp-card" title="WhatsApp">
              <div className="icon-box">
                <img src="https://api.iconify.design/mdi:whatsapp.svg?color=%2325d366" alt="WhatsApp" />
              </div>
              <span>WhatsApp</span>
            </a>

            <a href="mailto:contacto@etcheverrymotors.com" className="contacto-card-link" title="Email">
              <div className="icon-box">
                <img src="https://api.iconify.design/mdi:email.svg?color=%232563eb" alt="Email" />
              </div>
              <span>Contactanos</span>
            </a>
          </div>

          <div className="desplegables-container">
            <h3>Información Adicional</h3>
            
            <details className="item-desplegable">
              <summary>Horarios de Atención</summary>
              <p>Lunes a Viernes de 09:00 a 19:00 hs. Sábados de 09:00 a 14:00 hs.</p>
            </details>

            <details className="item-desplegable">
              <summary>Formas de Pago</summary>
              <p>Aceptamos efectivo, transferencias bancarias, financiación propia y permutas por tu usado.</p>
            </details>

            <details className="item-desplegable">
              <summary>Requisitos para financiar</summary>
              <p>DNI, comprobante de ingresos (recibo de sueldo o monotributo) y servicios a tu nombre.</p>
            </details>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contacto;