import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página de Inicio (Home)</h1>
      <nav>
        <Link to="/about">Ir a Sobre Nosotros</Link>
      </nav>
    </div>
  );
}

export default Home;