import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImg from "../assets/img/logo.svg";

const FooterComponent = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Harap masukkan alamat email yang valid.");
      return;
    }
    setErrorMsg("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="footer pt-5 pb-3">
      <Container>
        <Row className="gy-4 justify-content-between mb-5">
          <Col lg="4" md="6">
            <div className="brand-footer mb-3 d-flex align-items-center">
              <img
                src={LogoImg}
                alt="Skilora Logo"
                width="38"
                height="38"
                className="me-2"
              />
              <h3 className="fw-bold m-0 text-dark">
                Skilora<span className="text-danger">.</span>
              </h3>
            </div>
            <p className="desc text-muted mb-4">
              Platform kursus online terakreditasi untuk menguasai Web Development, UI/UX Design, Flutter Mobile, dan 3D Art berbasis proyek nyata industri demi akselerasi karier digitalmu.
            </p>
            <div className="contact-info d-flex flex-column gap-2 mb-3">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin%20Skilora%2C%20saya%20ingin%20konsultasi%20kelas"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-secondary d-flex align-items-center gap-2 contact-link"
              >
                <i className="fa-brands fa-whatsapp text-success fs-5"></i>
                <span>+62 812-3456-7890 (Konsultasi CS)</span>
              </a>
              <a
                href="mailto:halo@skilora.id"
                className="text-decoration-none text-secondary d-flex align-items-center gap-2 contact-link"
              >
                <i className="fa-regular fa-envelope text-danger fs-5"></i>
                <span>halo@skilora.id</span>
              </a>
              <div className="text-secondary d-flex align-items-center gap-2 small">
                <i className="fa-solid fa-location-dot text-primary fs-5"></i>
                <span>Jakarta Selatan & Bandung, Indonesia</span>
              </div>
            </div>
          </Col>

          <Col lg="2" md="3" xs="6">
            <h5 className="fw-bold text-dark mb-3">Navigasi</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 footer-nav-links">
              <li>
                <Link to="/" className="text-decoration-none text-muted">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-decoration-none text-muted">
                  Katalog Kelas
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className="text-decoration-none text-muted">
                  Kisah Alumni
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-decoration-none text-muted">
                  Pusat Bantuan FAQ
                </Link>
              </li>
              <li>
                <Link to="/syaratketen" className="text-decoration-none text-muted">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="2" md="3" xs="6">
            <h5 className="fw-bold text-dark mb-3">Kategori</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 footer-nav-links">
              <li>
                <Link to="/kelas" className="text-decoration-none text-muted">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-decoration-none text-muted">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-decoration-none text-muted">
                  Mobile Flutter
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-decoration-none text-muted">
                  3D Blender & Grafis
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-decoration-none text-muted">
                  Karier & Portofolio
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="4" md="12">
            <h5 className="fw-bold text-dark mb-2">Dapatkan Promo & Tips Belajar</h5>
            <p className="text-muted small mb-3">
              Bergabunglah dengan 20.000+ subscriber newsletter Skilora untuk mendapatkan e-book gratis dan kode voucher diskon tiap minggu.
            </p>

            <form onSubmit={handleSubscribe} className="newsletter-form mb-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukkan email Anda..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-danger px-3 fw-semibold" type="submit">
                  Langganan
                </button>
              </div>
            </form>

            {errorMsg && (
              <p className="text-danger small mb-2">{errorMsg}</p>
            )}
            {subscribed && (
              <Alert variant="success" className="py-2 px-3 small rounded-3">
                <i className="fa-solid fa-circle-check me-2"></i>
                Voucher diskon telah dikirim ke email Anda!
              </Alert>
            )}

            <div className="social-links-wrap mt-3">
              <span className="small text-muted d-block mb-2">Ikuti Media Sosial Kami:</span>
              <div className="d-flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn btn btn-light border rounded-circle"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-danger"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn btn btn-light border rounded-circle"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube text-danger"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn btn btn-light border rounded-circle"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-primary"></i>
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn btn btn-light border rounded-circle"
                  aria-label="Discord"
                >
                  <i className="fa-brands fa-discord text-primary"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="border-top pt-4 mt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-muted small m-0 text-center text-md-start">
            &copy; {new Date().getFullYear()}{" "}
            <span className="fw-bold text-dark">Skilora Academy</span>. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="d-flex gap-3 small text-muted">
            <Link to="/syaratketen" className="text-muted text-decoration-none">
              Ketentuan Layanan
            </Link>
            <span>•</span>
            <Link to="/faq" className="text-muted text-decoration-none">
              Kebijakan Privasi
            </Link>
            <span>•</span>
            <Link to="/faq" className="text-muted text-decoration-none">
              Pusat Bantuan
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
