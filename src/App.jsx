import { useState } from 'react';import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Vende from './pages/Vende';
import Contacto from './pages/Contacto';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar />

      <button className="modo-oscuro-btn" onClick={toggleDarkMode}>
{isDarkMode ? '🌙 ' : '☀️'}      </button>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/vende" element={<Vende />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      
      {!isHome && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;