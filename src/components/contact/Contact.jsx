import './contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* FOTO */}
        <div className="contact-photo">
          <img
            src="./assets/foto.jpg"
            alt="Dana Acosta"
          />
        </div>

        {/* TEXTO */}
        <div className="contact-content">
          <h2>Contacto</h2>

          <p className="contact-text">
            Si te interesa mi trabajo, quieres colaborar o simplemente conversar
            sobre datos, tecnología y su impacto en la sociedad, estaré encantada
            de escucharte.
          </p>

          <div className="contact-links">
            <a
              href="mailto:danaacosta9@gmail.com"
              className="btn primary"
            >
              Escríbeme
            </a>

            <a
              href="https://www.linkedin.com/in/dana-acosta-castillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/DanaAcosta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
