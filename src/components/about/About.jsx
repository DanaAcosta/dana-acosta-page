import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* COLUMNA TEXTO */}
        <div className="about-content">

          <p className="about-quote">
            La tecnología no es neutral: por eso me interesa cómo la diseñamos, analizamos y usamos.
          </p>

          <div className="about-text">
            <p>
              ¡Hola! Un gusto, soy <strong>Dana Acosta</strong> y este es mi portafolio:
              un espacio donde comparto quién soy y hacia dónde voy.
            </p>

            <p>
              Soy profesional en <strong>Matemáticas Aplicadas y Ciencias de la Computación</strong>,
              graduada en 2023, y próximamente profesional en <strong>Filosofía</strong>.
              Tengo experiencia en análisis, modelado y visualización de datos, trabajando con
              información para apoyar la toma de decisiones.
            </p>

            <p>
              Me interesa especialmente la <strong>intersección entre datos, tecnología y sociedad</strong>,
              con énfasis en el impacto público, la ética en la tecnología y el uso responsable
              de la información.
            </p>
          </div>

          <div className="about-motivation">
            <h3>Lo que me mueve</h3>
            <ul>
              <li>Ética tecnológica y robótica</li>
              <li>Uso de datos para políticas públicas</li>
              <li>STEMinism</li>
              <li>Ciencia como herramienta de equidad</li>
            </ul>
          </div>

          <div className="about-skills">
            <h3>Habilidades</h3>

            <div className="skills-group">
              <span className="skill">Python</span>
              <span className="skill">R</span>
              <span className="skill">SQL</span>
              <span className="skill">Power BI</span>
            </div>

            <div className="skills-group">
              <span className="skill">Optimización</span>
              <span className="skill">Estadística</span>
              <span className="skill">Modelos matemáticos</span>
            </div>

            <div className="skills-group">
              <span className="skill">IA</span>
              <span className="skill">Visión por Computadora</span>
              <span className="skill">Chatbots</span>
              <span className="skill">Realidad Virtual</span>
              <span className="skill">Arduino</span>
            </div>

            <div className="skills-group">
              <span className="skill">Comunicación</span>
              <span className="skill">Liderazgo</span>
              <span className="skill">Trabajo interdisciplinar</span>
            </div>
          </div>

          <p className="about-human">
            Fuera del código, disfruto leer, bordar, experimentar con impresión 3D
            y perderme en la música.
          </p>

        </div>

        {/* COLUMNA IMAGEN */}
        <div className="about-image">
          <img src="./assets/About.png" alt="Dana Acosta" />
        </div>

      </div>
    </section>
  )
}

export default About
