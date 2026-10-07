import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Vende from './pages/Vende';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/vende" element={<Vende />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;