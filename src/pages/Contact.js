import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"


function Contact() {
  return (
      <Container>
        <Row>
          <Col xs="auto">
            <h4>Contact Me</h4>
          </Col>
        </Row>
      <Form>
        <Form.Group controlId="formContact">
          <Col xs="auto">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Label>Send me a direct message</Form.Label>
            <Form.Control type="textarea" placeholder="Hello. Send me a message" />
            <Button as="submit" variant="primary" value="Submit">Submit</Button>{' '}
          </Col>
          </Form.Group>
    
      </Form>
      </Container>
  );
}

export default Contact;