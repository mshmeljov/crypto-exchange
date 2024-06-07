import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg"> 
      <Modal.Header closeButton>
        <Modal.Title>Contact Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="mb-3">
            <Col>
              <p>This educational project was made as part of the React Front-End course by Gamma Inteligence OÜ. Project mentor: Rasim Mehtijev</p>
            </Col>
          </Row>
          <Row>
            <Col><strong>Author:</strong></Col>
            <Col>Maksim Šmeljov</Col>
          </Row>
          <Row>
            <Col><strong>E-mail:</strong></Col>
            <Col><a href="mailto:mshmeljov@gmail.com">mshmeljov@gmail.com</a></Col>
          </Row>
          <Row>
            <Col><strong>GitHub:</strong></Col>
            <Col><a href="https://github.com/mshmeljov" target="_blank" rel="noopener noreferrer">https://github.com/mshmeljov</a></Col>
          </Row>
          <Row>
            <Col><strong>Phone:</strong></Col>
            <Col><a href="tel:+37255590469">+372 555 90 469</a></Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactModal;
