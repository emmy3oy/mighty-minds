// src/pages/Contact.jsx

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container className="text-center">
          <h1 className="fw-bold">Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out with questions,
            feedback, or partnership inquiries.
          </p>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="my-5">
        <Row>
          {/* Contact Form */}
          <Col md={7}>
            <Card className="shadow border-0">
              <Card.Body>
                <h3 className="mb-4">Send a Message</h3>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter subject"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Type your message..."
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col md={5}>
            <Card className="shadow border-0 mb-3">
              <Card.Body>
                <h4>Email</h4>
                <p>support@mightyminds.com</p>
              </Card.Body>
            </Card>

            <Card className="shadow border-0 mb-3">
              <Card.Body>
                <h4>Phone</h4>
                <p>+234 800 123 4567</p>
              </Card.Body>
            </Card>

            <Card className="shadow border-0">
              <Card.Body>
                <h4>Address</h4>
                <p>Lagos, Nigeria</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Location Section */}
      <div className="bg-light py-5">
        <Container className="text-center">
          <h2>Visit Us</h2>
          <p className="text-muted">
            We are available Monday - Friday, 9:00 AM - 5:00 PM.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Contact;