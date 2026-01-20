import './publications.css';

const Publications = () => {
  return (
    <section className="publications" id="publications">
      <div className="publications-container">

        <h2 className="publications-title">Publicaciones</h2>

        {/* PUBLICATION 1 */}
        <div className="publication-item">
          <div className="publication-header">
            <p className="publication-title">
              Unequal impacts of AI on Colombia’s labor market: an analysis of AI exposure, wages, and job dynamics
            </p>

          </div>

          <p className="publication-meta">
            2025
          </p>

          <p className="publication-desc">
            Documento de trabajo que analiza los impactos diferenciales de la inteligencia
            artificial en el mercado laboral colombiano, considerando exposición a IA,
            salarios y dinámicas ocupacionales.
          </p>

          <div className="publication-tags">
            <span>IA</span>
            <span>Mercado laboral</span>
            <span>Política pública</span>
          </div>

          <a
            href="https://ideas.repec.org/p/col/000092/021368.html"
            className="publication-link"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Análisis empírico del impacto de la IA en empleo y salarios en Colombia"
          >
            Ver publicación
          </a>
        </div>

        {/* PUBLICATION 2 */}
        <div className="publication-item">
          <div className="publication-header">
            <p className="publication-title">
              Exploring NAO Robot Errors in Collaborative Work
            </p>
          </div>

          <p className="publication-meta">
            2023 · IEEE BioCAS
          </p>

          <p className="publication-desc">
            Estudio experimental sobre errores de robots NAO en tareas colaborativas,
            evaluando identificación, análisis y resolución de fallos en interacción humano-robot.
          </p>

          <div className="publication-tags">
            <span>Robótica</span>
            <span>Interacción humano-robot</span>
          </div>

          <a
            href="https://doi.org/10.1109/ColBioCAS59270.2023.10281011"
            className="publication-link"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Artículo presentado en IEEE BioCAS sobre errores en robots colaborativos"
          >
            Ver en IEEE Xplore
          </a>
        </div>

      </div>
    </section>
  );
};

export default Publications;
