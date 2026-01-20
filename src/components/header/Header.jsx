import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="hero" id='hero'>
      <div className="hero-container">
        <h1>Dana Acosta Castillo</h1>

        <h2>
          Científica de Datos e <br />
          Investigadora
        </h2>

        <p>
          Analizo datos, construyo soluciones tecnológicas y pienso la
          tecnología con impacto social.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn secondary">
            Ver proyectos
          </a>

          <a href="assets/cv_dana_acosta_2026.pdf" download className="btn secondary">
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
