import React from "react";

const CourseCard = ({ kelas, onSelectCourse }) => {
  return (
    <div
      className="course-card shadow-sm rounded-4 h-100 d-flex flex-column bg-white overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={kelas.delay || "100"}
    >
      <div className="course-card-image-wrap position-relative">
        <img
          src={kelas.image}
          alt={kelas.title}
          className="w-100 object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 m-3 d-flex gap-2">
          {kelas.badge && (
            <span
              className={`badge rounded-pill px-3 py-2 fw-semibold ${
                kelas.badge === "Best Seller"
                  ? "bg-danger text-white"
                  : kelas.badge === "Trending"
                  ? "bg-warning text-dark"
                  : "bg-primary text-white"
              }`}
            >
              {kelas.badge}
            </span>
          )}
          <span className="badge rounded-pill bg-dark bg-opacity-75 text-white px-3 py-2 fw-medium">
            {kelas.category}
          </span>
        </div>
        {kelas.discount && (
          <div className="position-absolute bottom-0 end-0 m-2">
            <span className="badge bg-success bg-opacity-90 px-2 py-1 rounded-2">
              {kelas.discount}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 d-flex flex-column flex-grow-1">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="text-muted small d-flex align-items-center gap-1">
            <i className="fa-regular fa-clock text-primary"></i>
            {kelas.duration}
          </span>
          <span className="badge bg-light text-secondary border px-2 py-1">
            {kelas.level}
          </span>
        </div>

        <h5 className="course-title fw-bold mb-3 text-dark flex-grow-1">
          {kelas.title}
        </h5>

        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="text-warning small d-flex gap-1">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="fw-bold small text-dark">{kelas.rating}</span>
          <span className="text-muted small">
            ({kelas.reviews ? kelas.reviews.toLocaleString() : "1.2k"} murid)
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
          <div>
            {kelas.originalPrice && (
              <span className="text-muted text-decoration-line-through small d-block">
                {kelas.originalPrice}
              </span>
            )}
            <span className="fs-5 fw-bold text-primary">{kelas.price}</span>
          </div>
          <button
            className="btn btn-danger px-3 py-2 rounded-3 fw-semibold d-flex align-items-center gap-2 btn-buy-course"
            onClick={() => onSelectCourse(kelas)}
          >
            <span>{kelas.buy || "Beli Kelas"}</span>
            <i className="fa-solid fa-arrow-right small"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
