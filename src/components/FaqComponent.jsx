import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <div className="faq py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg="8" className="text-center">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
              Pusat Bantuan & FAQ
            </span>
            <h2 className="fw-bold text-dark animate__animated animate__fadeInUp">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-muted">
              Temukan jawaban cepat seputar sistem belajar, garansi seumur hidup, sertifikasi, hingga mentoring di Skilora.
            </p>
          </Col>
        </Row>

        <Row className="row-cols-lg-2 row-cols-1 g-4 mb-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm rounded-3 border overflow-hidden faq-accordion">
                  <Accordion.Item eventKey={data.eventKey.toString()} className="border-0">
                    <Accordion.Header className="fw-semibold">
                      <span className="pe-2 text-dark">{data.title}</span>
                    </Accordion.Header>
                    <Accordion.Body className="text-muted lh-base">
                      {data.desc}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>

        <Row className="justify-content-center">
          <Col lg="10">
            <div className="help-box p-4 p-md-5 rounded-4 shadow-sm border bg-white d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div>
                <h5 className="fw-bold text-dark mb-1">Masih punya pertanyaan lain?</h5>
                <p className="text-muted m-0 small">
                  Tim konsultan edukasi Skilora siap membantu memilih kelas yang paling cocok dengan target kariermu.
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin%20Skilora%2C%20saya%20butuh%20rekomendasi%20kelas%20yang%20sesuai%20background%20saya"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success px-4 py-2 rounded-pill fw-semibold text-nowrap d-flex align-items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp fs-5"></i>
                <span>Hubungi Admin via WA</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
