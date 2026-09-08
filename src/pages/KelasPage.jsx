import { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqComponent from "../components/FaqComponent";
import CourseCard from "../components/CourseCard";
import CourseModal from "../components/CourseModal";

const KelasPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    "Semua",
    "Web Development",
    "UI/UX Design",
    "Mobile Development",
    "Design Grafis",
    "3D & Animasi",
  ];

  const filteredCourses = useMemo(() => {
    return semuaKelas.filter((kelas) => {
      const matchCategory =
        selectedCategory === "Semua" || kelas.category === selectedCategory;
      const matchQuery =
        kelas.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kelas.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (kelas.skills &&
          kelas.skills.some((s) =>
            s.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchCategory && matchQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="kelas-page">
      <div className="kelas-header-banner py-5 bg-light border-bottom">
        <Container className="pt-5 mt-4">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-semibold mb-2">
                Katalog Lengkap
              </span>
              <h1 className="fw-bold text-dark mb-3 animate__animated animate__fadeInUp">
                Jelajahi Semua Kelas Digital
              </h1>
              <p className="text-muted lead fs-6 animate__animated animate__fadeInUp">
                Tingkatkan daya saing dan portofolio Anda dengan kurikulum berbasis proyek nyata. Dipandu langkah demi langkah oleh mentor praktisi industri.
              </p>

              {/* Search Bar */}
              <div className="search-box-wrap mx-auto mt-4 position-relative" style={{ maxWidth: "600px" }}>
                <div className="input-group input-group-lg shadow-sm rounded-pill overflow-hidden border">
                  <span className="input-group-text bg-white border-0 ps-4 text-muted">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none ps-2 fs-6"
                    placeholder="Cari kelas, misal: Figma, Flutter, Bootstrap, 3D..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="btn btn-white border-0 text-muted pe-3"
                      type="button"
                      onClick={() => setSearchQuery("")}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
              </div>

              {/* Category Pills */}
              <div className="category-pills-wrap d-flex flex-wrap justify-content-center gap-2 mt-4">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className={`btn btn-sm rounded-pill px-3 py-2 fw-medium transition-all ${
                      selectedCategory === cat
                        ? "btn-danger text-white shadow-sm"
                        : "btn-outline-secondary bg-white text-secondary"
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="kelas-content-section py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="text-muted m-0 small">
              Menampilkan <strong>{filteredCourses.length}</strong> kelas pilihan
              {selectedCategory !== "Semua" && ` kategori "${selectedCategory}"`}
              {searchQuery && ` untuk pencarian "${searchQuery}"`}
            </p>
            {(selectedCategory !== "Semua" || searchQuery) && (
              <button
                className="btn btn-link text-danger p-0 text-decoration-none small fw-semibold"
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSearchQuery("");
                }}
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredCourses.length > 0 ? (
            <Row className="g-4">
              {filteredCourses.map((kelas) => (
                <Col key={kelas.id} md="6" lg="4">
                  <CourseCard
                    kelas={kelas}
                    onSelectCourse={handleSelectCourse}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="empty-state text-center py-5 my-5">
              <div className="fs-1 text-muted mb-3 opacity-50">
                <i className="fa-solid fa-file-circle-question"></i>
              </div>
              <h4 className="fw-bold text-dark">Kelas Tidak Ditemukan</h4>
              <p className="text-muted small">
                Maaf, tidak ada kelas yang cocok dengan kata kunci "{searchQuery}". Coba gunakan kata kunci lain atau reset filter kategori.
              </p>
              <button
                className="btn btn-outline-danger rounded-pill px-4 mt-2"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
              >
                Tampilkan Semua Kelas
              </button>
            </div>
          )}
        </Container>
      </div>

      {/* Faq Section */}
      <FaqComponent />

      {/* Course Modal */}
      <CourseModal
        show={showModal}
        onHide={handleCloseModal}
        course={selectedCourse}
      />
    </div>
  );
};

export default KelasPage;
