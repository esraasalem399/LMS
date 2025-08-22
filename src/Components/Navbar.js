import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import EdusionBlack from "../Assets/Images/EdusionBlack.png";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);
  const closeNav = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow-sm"
      expanded={expanded}
    >
      <Container className="navBar">
        <Navbar.Brand as={Link} to="/" onClick={closeNav}>
          <img src={EdusionBlack} alt="Edusion Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNav}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home" onClick={closeNav}>
              OnHome
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNav}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" onClick={closeNav}>
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeNav}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
