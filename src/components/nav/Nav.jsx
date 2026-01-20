import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">

        {/* LOGO */}
        <li className="nav-logo">
          <a href="#hero">
            <img src="./assets/logo.png" alt="Dana Acosta logo" />
          </a>
        </li>

        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#publications">Publicaciones</a></li>
        <li><a href="#contact">Contáctame</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
