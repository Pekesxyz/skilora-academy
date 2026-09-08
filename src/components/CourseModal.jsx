import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";

const CourseModal = ({ show, onHide, course }) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => {
      setEnrolled(false);
      onHide();
    }, 2800);
  };

  const handleClose = () => {
    setEnrolled(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="course-modal">
      <Modal.Header closeButton className="border-0 pb-0">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-primary px-3 py-2 rounded-pill">
            {course.category}
          </span>
          <span className="badge bg-light text-dark border px-2 py-1">
            {course.level}
          </span>
        </div>
      </Modal.Header>

      <Modal.Body className="pt-3 pb-4 px-4">
        {enrolled ? (
          <Alert variant="success" className="rounded-4 p-4 text-center my-4 animate__animated animate__fadeIn">
            <div className="fs-1 mb-3 text-success">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h4 className="fw-bold mb-2">Pendaftaran Berhasil!</h4>
            <p className="mb-0 text-muted">
              Terima kasih telah bergabung di kelas <strong>{course.title}</strong>. Akses materi, grup Discord, dan source code telah dikirimkan ke email Anda. Selamat belajar!
            </p>
          </Alert>
        ) : (
          <div>
            <div className="row g-4 align-items-center mb-4">
              <div className="col-md-5">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-100 rounded-4 shadow-sm object-fit-cover"
                  style={{ maxHeight: "200px" }}
                />
              </div>
              <div className="col-md-7">
                <h4 className="fw-bold text-dark mb-2">{course.title}</h4>
                <p className="text-muted small mb-3">{course.description}</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="text-warning small d-flex gap-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="fw-bold small">{course.rating} / 5.0</span>
                  <span className="text-muted small">
                    • {course.duration || "14 Jam"} ({course.lessons || "30 Video"})
                  </span>
                </div>
              </div>
            </div>

            <h6 className="fw-bold mb-2 text-dark">
              <i className="fa-solid fa-layer-group text-primary me-2"></i>
              Skill yang Akan Dipelajari:
            </h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {course.skills &&
                course.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-medium"
                  >
                    ✓ {skill}
                  </span>
                ))}
            </div>

            <div className="bg-light p-3 rounded-4 mb-4">
              <h6 className="fw-bold mb-3 text-dark">
                <i className="fa-solid fa-gift text-danger me-2"></i>
                Fasilitas & Keuntungan Belajar:
              </h6>
              <div className="row g-2 small text-secondary">
                <div className="col-sm-6">
                  <i className="fa-solid fa-infinity text-success me-2"></i>
                  Akses materi seumur hidup (Lifetime)
                </div>
                <div className="col-sm-6">
                  <i className="fa-solid fa-certificate text-success me-2"></i>
                  E-Sertifikat Kelulusan Resmi berlisensi
                </div>
                <div className="col-sm-6">
                  <i className="fa-solid fa-code text-success me-2"></i>
                  Full Source Code & Aset Latihan Proyek
                </div>
                <div className="col-sm-6">
                  <i className="fa-solid fa-comments text-success me-2"></i>
                  Grup Komunitas Discord & Mentoring Tanya-Jawab
                </div>
                <div className="col-sm-6">
                  <i className="fa-solid fa-shield-halved text-success me-2"></i>
                  Garansi kepuasan 7 hari uang kembali
                </div>
                <div className="col-sm-6">
                  <i className="fa-solid fa-mobile-screen text-success me-2"></i>
                  Dapat diakses di Desktop & Smartphone
                </div>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center pt-2 gap-3">
              <div>
                <span className="text-muted text-decoration-line-through small d-block">
                  Harga Normal: {course.originalPrice || "Rp. 550.000"}
                </span>
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-3 fw-bold text-primary">{course.price}</span>
                  {course.discount && (
                    <span className="badge bg-success small">{course.discount}</span>
                  )}
                </div>
              </div>

              <div className="d-flex gap-2">
                <Button variant="outline-secondary" onClick={handleClose} className="rounded-3 px-3">
                  Tutup
                </Button>
                <Button
                  variant="danger"
                  onClick={handleEnroll}
                  className="rounded-3 px-4 py-2 fw-semibold d-flex align-items-center gap-2"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Daftar Kelas Sekarang</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CourseModal;
