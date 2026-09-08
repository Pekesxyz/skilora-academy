import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial-header py-5 bg-light border-bottom">
        <Container className="pt-5 mt-4">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <span className="badge bg-warning bg-opacity-20 text-dark px-3 py-2 rounded-pill fw-semibold mb-2">
                Kisah Nyata Alumni
              </span>
              <h1 className="fw-bold text-dark mb-3 animate__animated animate__fadeInUp">
                Cerita Sukses Siswa Skilora
              </h1>
              <p className="text-muted lead fs-6 animate__animated animate__fadeInUp">
                Lihat bagaimana para siswa kami bertransformasi dari pemula tanpa dasar hingga sukses berkarier di industri teknologi, agensi desain, dan pasar freelance global.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 pt-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="text-warning fs-5">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="text-start">
                    <span className="fw-bold d-block lh-1">4.9 / 5.0</span>
                    <span className="small text-muted">Rating Kursus</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="text-primary fs-5">
                    <i className="fa-solid fa-user-check"></i>
                  </div>
                  <div className="text-start">
                    <span className="fw-bold d-block lh-1">15.000+</span>
                    <span className="small text-muted">Siswa Lulus</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="text-success fs-5">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="text-start">
                    <span className="fw-bold d-block lh-1">100%</span>
                    <span className="small text-muted">Ulasan Terverifikasi</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimonial-content-section py-5">
        <Container>
          <Row className="g-4">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} md="6" lg="4">
                  <div
                    className="testimonial-card-page p-4 rounded-4 border bg-white h-100 d-flex flex-column justify-content-between shadow-sm"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="text-warning small d-flex gap-1">
                          {[...Array(data.rating || 5)].map((_, idx) => (
                            <i key={idx} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                        <i className="fa-solid fa-quote-right text-muted opacity-25 fs-4"></i>
                      </div>

                      {data.courseTitle && (
                        <div className="mb-2">
                          <span className="badge bg-light text-secondary border small">
                            {data.courseTitle}
                          </span>
                        </div>
                      )}

                      <p className="testimonial-text text-secondary small lh-lg mb-4">
                        "{data.desc}"
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-3 pt-3 border-top mt-auto">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="rounded-circle object-fit-cover"
                        style={{ width: "52px", height: "52px" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-bold text-dark">{data.name}</h6>
                        <p className="mb-0 text-muted small">{data.role}</p>
                        {data.company && (
                          <span className="badge bg-primary bg-opacity-10 text-primary small py-1 px-2 mt-1">
                            {data.company}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
