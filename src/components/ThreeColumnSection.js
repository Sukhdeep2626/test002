// codes by chat gpt and modified by Sukhdeep Singh 
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function ThreeColumnSection() {
  return (
    <Container id="three-column" className="py-5">
      <Row>
        {Array.from({ length: 3 }).map((_, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Column {index + 1}</Card.Title>
                <Card.Text>
                  This is a brief description for column {index + 1}.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ThreeColumnSection;
