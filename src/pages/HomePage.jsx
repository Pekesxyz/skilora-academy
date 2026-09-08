import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";
import CourseCard from "../components/CourseCard";
import CourseModal from "../components/CourseModal";
import StatsSection from "../components/StatsSection";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const HomePage = () => {
  let navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const features = [
    {
      icon: "fa-solid fa-laptop-code",
      title: "Project-Based Learning",
      desc: "Belajar lewat praktik studi kasus aplikasi riil yang siap dijadikan aset portofolio profesional Anda.",
      color: "primary",
    },
    {
      icon: "fa-solid fa-comments-dollar",
      title: "Investasi Sekali Seumur Hidup",
      desc: "Tanpa biaya langganan bulanan. Akses seluruh video, aset materi, dan update modul selamanya.",
      color: "danger",
    },
    {
      icon: "fa-solid fa-people-group",
      title: "Komunitas & Tanya Mentor",
      desc: "Terhubung di Discord dengan ribuan alumni dan mentor industri untuk konsultasi kendala belajar.",
      color: "warning",
    },
    {
      icon: "fa-solid fa-certificate",
      title: "Sertifikat Kelulusan Resmi",
      desc: "Dapatkan e-sertifikat terverifikasi ber-ID unik yang dapat disematkan langsung di LinkedIn dan CV.",
      color: "success",
    },
  ];

  return (
    <div className="homepage">
      {/* ================= HERO SECTION ================= */}
      <header className="w-100 min-vh-100 d-flex align-items-center position-relative overflow-hidden hero-section">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5 pt-4">
            <Col lg="6" className="pe-lg-4">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-75 border shadow-sm mb-3 animate__animated animate__fadeInDown">
                <span className="badge bg-danger rounded-pill px-2 py-1">Baru</span>
                <span className="small fw-semibold text-dark">
                  Platform Belajar Skill Digital Terdepan
                </span>
              </div>

              <h1 className="mb-3 animate__animated animate__fadeInUp hero-title">
                Kuasai Skill Digital, <br />
                <span className="hero-highlight">Wujudkan Karya &</span> <br />
                Karier Impianmu!
              </h1>

              <p className="mb-4 animate__animated animate__fadeInUp hero-desc">
                Akselerasi keahlian coding, UI/UX design, Flutter mobile, dan 3D modelling dari dasar bersama kurikulum standar industri serta pendampingan mentor praktisi.
              </p>

              <div className="d-flex flex-wrap gap-3 animate__animated animate__fadeInUp">
                <button
                  className="btn btn-danger btn-lg rounded-pill px-4 fw-semibold shadow-sm hero-btn-main"
                  onClick={() => navigate("/kelas")}
                >
                  <i className="fa-solid fa-compass me-2"></i>
                  Jelajahi Kelas
                </button>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Skilora%2C%20saya%20ingin%20konsultasi%20jalur%20belajar%20yang%20cocok"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4 fw-semibold hero-btn-secondary"
                >
                  <i className="fa-brands fa-whatsapp text-success me-2"></i>
                  Konsultasi Gratis
                </a>
              </div>

              <div className="mt-4 pt-2 d-flex align-items-center gap-3 animate__animated animate__fadeInUp">
                <div className="d-flex -space-x-2">
                  <span className="avatar-pill bg-primary text-white">4.9★</span>
                </div>
                <div className="small text-muted">
                  Dipercaya oleh <strong className="text-dark">15.000+</strong> murid & profesional di seluruh Indonesia.
                </div>
              </div>
            </Col>

            <Col lg="6" className="pt-lg-0 pt-5 text-center position-relative">
              <div className="hero-img-wrapper animate__animated animate__fadeInUp">
                <img
                  src={HeroImage}
                  alt="Belajar skill digital bersama Skilora"
                  className="img-fluid hero-main-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* ================= STATS SECTION ================= */}
      <StatsSection />

      {/* ================= KENAPA MEMILIH KAMI ================= */}
      <section className="features-section py-5 bg-white">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg="8">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-semibold mb-2">
                Keunggulan Belajar
              </span>
              <h2 className="fw-bold text-dark">
                Mengapa Ribuan Siswa Memilih Skilora?
              </h2>
              <p className="text-muted">
                Kami merancang pengalaman belajar yang praktis, fleksibel, dan terbukti membantu percepatan karier Anda.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {features.map((item, index) => (
              <Col key={index} md="6" lg="3" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-card p-4 rounded-4 border bg-light h-100 d-flex flex-column">
                  <div
                    className={`feature-icon-box mb-3 rounded-3 d-flex align-items-center justify-content-center bg-${item.color} bg-opacity-10 text-${item.color}`}
                    style={{ width: "50px", height: "50px", fontSize: "1.3rem" }}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                  <p className="text-muted small m-0 lh-base">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= KELAS TERBARU / POPULER ================= */}
      <section className="kelas-section py-5">
        <Container>
          <Row className="justify-content-between align-items-end mb-5">
            <Col lg="7">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
                Katalog Pilihan
              </span>
              <h2 className="fw-bold text-dark">Kelas Terpopuler Saat Ini</h2>
              <p className="text-muted m-0">
                Pilihan kurikulum terfavorit yang paling banyak diambil untuk membangun portofolio dan karier.
              </p>
            </Col>
            <Col lg="4" className="text-lg-end mt-3 mt-lg-0">
              <button
                className="btn btn-outline-danger rounded-pill px-4 py-2 fw-semibold"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua Kelas ({kelasTerbaru.length}+)
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </Col>
          </Row>

          <Row className="g-4">
            {kelasTerbaru.map((kelas) => (
              <Col key={kelas.id} md="6" lg="4">
                <CourseCard kelas={kelas} onSelectCourse={handleSelectCourse} />
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col className="text-center">
              <button
                className="btn btn-danger rounded-pill btn-lg px-5 py-3 fw-semibold shadow"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/kelas")}
              >
                Jelajahi Seluruh Kelas
                <i className="fa-solid fa-chevron-right ms-2"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="testimonial-section py-5 bg-white">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg="8">
              <span className="badge bg-warning bg-opacity-15 text-warning px-3 py-2 rounded-pill fw-semibold mb-2">
                Kisah Sukses
              </span>
              <h2 className="fw-bold text-dark">Apa Kata Para Alumni?</h2>
              <p className="text-muted">
                Dengarkan langsung ulasan tulus dari siswa yang telah berhasil switch career, merilis aplikasi, dan meraih klien freelance impian.
              </p>
            </Col>
          </Row>

          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper testimonial-swiper pb-5"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="h-auto">
                    <div className="testimonial-card p-4 rounded-4 border bg-light h-100 d-flex flex-column justify-content-between shadow-sm">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="text-warning small d-flex gap-1">
                            {[...Array(data.rating || 5)].map((_, idx) => (
                              <i key={idx} className="fa-solid fa-star"></i>
                            ))}
                          </div>
                          <i className="fa-solid fa-quote-right text-muted opacity-25 fs-4"></i>
                        </div>
                        <p className="testimonial-quote text-secondary small lh-lg mb-4">
                          "{data.desc}"
                        </p>
                      </div>

                      <div className="d-flex align-items-center gap-3 pt-3 border-top">
                        <img
                          src={data.image}
                          alt={data.name}
                          className="rounded-circle object-fit-cover testimonial-avatar"
                          style={{ width: "50px", height: "50px" }}
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </section>

      {/* ================= FAQ COMPONENT ================= */}
      <FaqComponent />

      {/* ================= MODAL DETAIL KURSUS ================= */}
      <CourseModal
        show={showModal}
        onHide={handleCloseModal}
        course={selectedCourse}
      />
    </div>
  );
};

export default HomePage;
