import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const FaqPage = () => {
  return (
    <div className="faq-page">
      <div className="faq-header py-5 bg-light border-bottom">
        <Container className="pt-5 mt-4">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-2 fw-semibold mb-2">
                Pusat Bantuan Resmi
              </span>
              <h1 className="fw-bold text-dark mb-3 animate__animated animate__fadeInUp">
                Frequently Asked Questions
              </h1>
              <p className="text-muted lead fs-6 animate__animated animate__fadeInUp">
                Semua jawaban transparan mengenai kurikulum, akses selamanya, e-sertifikat, hingga garansi kepuasan belajar di Skilora.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default FaqPage;
