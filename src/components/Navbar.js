// codes by chat gpt and modified by Sukhdeep Singh 
import React, { useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";

function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
