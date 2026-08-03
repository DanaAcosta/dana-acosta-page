import './cv.css';

const Cv = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <h2 className="experience-title">Experiencia</h2>

        {/* GLOBANT - GUT */}
        <div className="experience-item">
          <h3>Globant - GUT</h3>
          <p className="experience-meta">
            Data Analyst & Martech Trainee · Bogotá · Abril 2026 – Presente
          </p>

          <p>
            Apoyo en proyectos de análisis de datos y marketing technology (MarTech),
            participando en la recopilación, transformación y visualización de datos
            para la generación de insights. Colaboración en la creación de dashboards,
            automatización de procesos y análisis de métricas para apoyar la toma de
            decisiones de negocio.
          </p>
        </div>

        {/* MINCIT */}
        <div className="experience-item">
          <h3>Ministerio de Comercio, Industria y Turismo (MINCIT)</h3>
          <p className="experience-meta">
            Análisis de datos y apoyo técnico · 2025
          </p>

          <p>
            Trabajé en análisis, procesamiento y visualización de datos para el
            seguimiento de programas y beneficiarios en el sector público.
            Desarrollé mapas, dashboards y herramientas de apoyo para la toma de
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
