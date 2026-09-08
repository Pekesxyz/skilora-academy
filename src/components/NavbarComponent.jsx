import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink, useNavigate } from "react-router-dom";
import LogoImg from "../assets/img/logo.svg";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    if (window.scrollY > 15) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  const handleLinkClick = () => {
    setNavExpanded(false);
  };

  return (
    <div className="navbar-wrapper">
      <Navbar
        expand="lg"
        expanded={navExpanded}
        onToggle={(expanded) => setNavExpanded(expanded)}
        className={`fixed-top ${changeColor ? "color-active" : ""}`}
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            onClick={handleLinkClick}
            className="fs-3 fw-bold d-flex align-items-center brand-logo"
          >
            <img
              src={LogoImg}
              alt="Skilora Logo"
              width="36"
              height="36"
              className="me-2"
            />
            <span>
              Skilora<span className="text-danger">.</span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 shadow-none p-2"
          >
            <i className={`fa-solid ${navExpanded ? "fa-xmark" : "fa-bars-staggered"} fs-4 text-dark`}></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center my-3 my-lg-0 gap-1 gap-lg-2">
              {navLinks.map((link) => {
                return (
                  <div className="nav-item-wrap" key={link.id}>
                    <NavLink
                      to={link.path === "" ? "/" : `/${link.path}`}
                      className={({ isActive, isPending }) =>
                        `nav-link-custom ${
                          isPending ? "pending" : isActive ? "active" : ""
                        }`
                      }
                      onClick={handleLinkClick}
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center d-flex flex-column flex-lg-row gap-2 justify-content-center align-items-center">
              <button
                className="btn btn-danger px-4 py-2 rounded-pill fw-semibold shadow-sm btn-cta-nav"
                onClick={() => {
                  handleLinkClick();
                  navigate("/kelas");
                }}
              >
                Mulai Belajar
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
