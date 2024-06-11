import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Contacts.css'; 

function Contacts() {
  return (
    <Container className="contacts-container mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4">Contact Information</Card.Title>
          <Row className="mb-3">
            <Col>
              <p>This educational project was made as part of the React Front-End course by Gamma Intelligence OÜ. Project mentor: Rasim Mehtijev</p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="font-weight-bold">Author:</Col>
            <Col md={8}>Maksim Šmeljov</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="font-weight-bold">E-mail:</Col>
            <Col md={8}><a href="mailto:mshmeljov@gmail.com">mshmeljov@gmail.com</a></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="font-weight-bold">GitHub:</Col>
            <Col md={8}><a href="https://github.com/mshmeljov" target="_blank" rel="noopener noreferrer">https://github.com/mshmeljov</a></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="font-weight-bold">Phone:</Col>
            <Col md={8}><a href="tel:+37255590469">+372 555 90 469</a></Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contacts;
