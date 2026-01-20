import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO / NAME */}
        <div className="footer-brand">
          <img src="./assets/logo.png" alt="Dana Acosta logo" />
          <p>Dana Acosta</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/dana-acosta-castillo/"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/DanaAcosta"
          >
            GitHub
          </a>

          <a href="https://www.youtube.com/@Dana_IA">
            Youtube
          </a>
        </div>

        {/* COPY */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Dana Acosta · Built with React
        </p>

      </div>
    </footer>
  );
};

export default Footer;
