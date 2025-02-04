The Original code is taken from chatgpt and Sukhdeep Singh has modified it 

footer.js
function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      © 2025 Your Name. All rights reserved.
    </footer>
  );
}

export default Footer;


HeroSection.css


  .hero-text {
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
  
  .hero-text h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .hero-text p {
    font-size: 1.5rem;
  }

  HeroSection.js
  function HeroSection() {
  return (
    <div id="hero" className="hero-section">
      <div className="hero-text">
        <h1>Welcome to My Page</h1>
        <p>Let,s do it.</p>
      </div>
    </div>
  );
}

export default HeroSection;

Navbar.js
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Sukhdeep's Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#hero">Hero Section</Nav.Link>
              <Nav.Link href="#three-column">Three-Column Section</Nav.Link>
              <Button variant="primary" className="ms-2" onClick={handleShow}>
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>© 2025 Sukhdeep's Project. All rights reserved.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomNavbar;
