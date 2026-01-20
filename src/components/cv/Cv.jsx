import './cv.css';

const Cv = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <h2 className="experience-title">Experiencia</h2>
        {/* MINCIT */}
        <div className="experience-item">
          <h3>Ministerio de Comercio, Industria y Turismo (MINCIT)</h3>
          <p className="experience-meta">
            Análisis de datos y apoyo técnico · 2025
          </p>

          <p>
            Trabaje en análisis, procesamiento y visualización de datos para el
            seguimiento de programas y beneficiarios en el sector público.
            Desarrollo de mapas, dashboards y herramientas de apoyo a la toma de
            decisiones, con especial atención al manejo de la información.
          </p>
        </div>

        {/* INVESTIGACIÓN */}
        <div className="experience-item">
          <h3>Investigación académica</h3>
          <p className="experience-meta">
            Matemáticas aplicadas, ciencia de datos y tecnología · 2022 – presente
          </p>

          <p>
            Participación en proyectos de investigación enfocados en modelado,
            análisis de datos y reflexión sobre el impacto social y ético de la
            tecnología, integrando enfoques interdisciplinarios.
          </p>
        </div>
        <div className="experience-image">
              <img src="./assets/cv.png" alt="Experiencia profesional" />
            </div>
      </div>
    

    </section>
  );
};

export default Cv;
