import React from 'react'
import './Proyectos.css'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2 className="projects-title">Proyectos</h2>
        <p className="projects-intro">
          Algunos de los proyectos en los que he trabajado, donde combino datos,
          tecnología y análisis con impacto real.
        </p>

        {/* PROJECT 1 */}
        <article className="project-card">
          <div className="project-content">
            <div className="project-text">
          <h3>Página web para docente</h3>
          <p className="project-description">
            Diseño y desarrollo de un sitio web para centralizar artículos,
            videos y enlaces académicos, mejorando la accesibilidad y organización
            del contenido.
          </p>

          <p className="project-role">
            <strong>Mi rol:</strong> diseño de la interfaz, desarrollo frontend y
            estructuración del contenido.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>UX</span>
            <span>Diseño Web</span>
          </div>

          <div className="project-links">
            <a href="https://carloscardonasuarez.github.io/" className="btn secondary">Ver página</a>
          </div>
        </div>
        <div className="project-media">
          <img
            src="./assets/pwcc.png"
            alt="Vista previa página web para docente"
          />
        </div>
          </div>
        </article>
        {/* PROJECT 2 */}
        <article className="project-card">
          <div className="project-content">

            {/* TEXTO */}
            <div className="project-text">
              <h3>Aplicación Reforma ECH</h3>

              <p className="project-description">
                Aplicación informativa diseñada para guiar a estudiantes en la
                transición a una nueva malla curricular en la Escuela de Ciencias Humanas.
              </p>

              <p className="project-role">
                <strong>Mi rol:</strong> modelado de la información y diseño de la
                interfaz visual.
              </p>

              <div className="project-tags">
                <span>UI</span>
                <span>Diseño de Información</span>
                <span>Educación</span>
              </div>
            </div>

            {/* VIDEO */}
            <div className="project-media">
              <video
                src="./assets/v3.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

          </div>
        </article>

        {/* PROJECT 4 */}
        <article className="project-card">
          <div className="project-content">

            <div className="project-text">
              <h3>Mapas y visualización territorial de programas y beneficiarios</h3>

              <p className="project-description">
                Desarrollo de mapas y visualizaciones geográficas para el análisis y seguimiento
                de programas y beneficiarios en una entidad pública.
              </p>

              <p className="project-description">
                Por tratarse de información sensible, los resultados reales no pueden publicarse.
                Se muestran ejemplos con datos simulados para fines demostrativos.
              </p>

              <p className="project-role">
                <strong>Mi rol:</strong> procesamiento y limpieza de datos, análisis geoespacial
                y diseño de visualizaciones cartográficas.
              </p>

              <div className="project-tags">
                <span>Datos</span>
                <span>GIS</span>
                <span>Visualización</span>
                <span>Sector público</span>
              </div>
            </div>

            <div className="project-media">
              <p className="media-caption">
                Mapa demostrativo sobre micro empresas por departamento (no corresponde a información real).
              </p>
              <iframe
                title="Mapa demostrativo"
                src="./assets/mapa_micro.html"
                loading="lazy"
              />
              
            </div>

          </div>
        </article>

        {/* PROJECT 5 */}
        <article className="project-card">
          <div className='project-content'>
            <div className='project-text'>
              <h3>Riego por goteo automatizado con Arduino</h3>
            <p className="project-description">
            Proyecto de automatización desarrollado inicialmente como parte de una clase de
            Arquitectura del Computador. Durante la pandemia, aprendí de manera autónoma a
            trabajar con Arduino y diversos componentes electrónicos para diseñar un sistema
            de riego por goteo automatizado.
          </p>

          <p className="project-description">
            Al año siguiente, el proyecto evolucionó hacia un mini cultivo hidropónico,
            ampliando el sistema y experimentando con nuevas configuraciones. El proceso y
            los resultados fueron documentados en videos publicados en mi canal.
          </p>

          <p className="project-role">
            <strong>Mi rol:</strong> diseño del sistema, programación del microcontrolador,
            integración de sensores y experimentación con distintos componentes.
          </p>

          <div className="project-tags">
            <span>Arduino</span>
            <span>IoT</span>
            <span>Automatización</span>
            <span>Hardware</span>
            <span>Aprendizaje autónomo</span>
          </div>
          <div className='project-links'>
            <a href="https://youtu.be/nzaS8JzzJ5U?si=8m3E4zoD-zOJzARA" className='btn secondary'>Ver video 1</a>
             <a href="https://youtu.be/n5oUKqR1NZw?si=uKboD_xCVabv9zIx" className='btn secondary'>Ver video 2</a>
          </div>
            </div>
            <div className='project-media'>
              <img
              src="./assets/p4.png"
              alt="Ver video"
              />
            </div>
          </div>
          
        </article>


      </div>
    </section>
  )
}

export default Projects
