import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const StatsSection = () => {
  const stats = [
    {
      icon: "fa-solid fa-users",
      count: "15.000+",
      label: "Alumni Terdaftar",
      color: "#2563eb",
    },
    {
      icon: "fa-solid fa-graduation-cap",
      count: "45+",
      label: "Modul & Kelas Pilihan",
      color: "#f43f5e",
    },
    {
      icon: "fa-solid fa-star",
      count: "4.9 / 5.0",
      label: "Kepuasan Siswa",
      color: "#eab308",
    },
    {
      icon: "fa-solid fa-briefcase",
      count: "92%",
      label: "Alumni Siap Kerja",
      color: "#10b981",
    },
  ];

  const tools = [
    { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
    { name: "Figma", icon: "fa-brands fa-figma", color: "#f24e1e" },
    { name: "Flutter", icon: "fa-solid fa-mobile-screen-button", color: "#02569b" },
    { name: "Blender", icon: "fa-solid fa-cube", color: "#f5792a" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952b3" },
    { name: "Illustrator", icon: "fa-solid fa-pen-nib", color: "#ff9a00" },
  ];

  return (
    <section className="stats-section py-5">
      <Container>
        <div className="stats-card-wrap shadow-sm rounded-4 p-4 p-lg-5 bg-white border">
          <Row className="g-4 text-center">
            {stats.map((item, index) => (
              <Col key={index} xs={6} lg={3} className="stat-item">
                <div
                  className="stat-icon-box mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    width: "56px",
                    height: "56px",
                    fontSize: "1.4rem",
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <h3 className="fw-bold text-dark mb-1">{item.count}</h3>
                <p className="text-muted m-0 small fw-medium">{item.label}</p>
              </Col>
            ))}
          </Row>

          <hr className="my-4 my-lg-5 opacity-25" />

          <div className="text-center">
            <p className="text-uppercase fw-semibold text-muted small tracking-wider mb-3">
              Kurikulum Selaras Kebutuhan Industri Terpopuler
            </p>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="tool-badge d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-light border"
                >
                  <i className={tool.icon} style={{ color: tool.color }}></i>
                  <span className="fw-medium text-secondary small">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
