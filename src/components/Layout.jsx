import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
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
        {isDarkMode ? '🌙' : '☀️'}            
      </button>
      
      <main>
        {children}
      </main>

      {!isHome && <Footer />}
    </div>
  );
}

export default Layout;