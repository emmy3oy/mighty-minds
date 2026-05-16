// src/pages/About.jsx

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold">About Mighty Minds Job Portal</h1>
              <p className="mt-3">
                Connecting talented individuals with great opportunities.
                Our platform helps job seekers discover their next career move
                while assisting employers in finding the right talent.
              </p>

              <Button
                  as={Link}
                  to="/jobs"
                  variant="primary"
                >
                  Explore Jobs
                </Button>
            </Col>

            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="About"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mission Section */}
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h2>Our Mission</h2>
            <p className="text-muted">
              We aim to simplify the hiring process by creating a platform
              where employers and job seekers can connect efficiently and
              confidently.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Features */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body className="text-center">
                <h4>Find Jobs</h4>
                <p>
                  Browse thousands of opportunities from various industries.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body className="text-center">
                <h4>Easy Applications</h4>
                <p>
                  Apply quickly and track your applications seamlessly.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body className="text-center">
                <h4>Career Growth</h4>
                <p>
                  Build your future with opportunities tailored to your skills.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CTA */}
      <div className="bg-light py-5">
        <Container className="text-center">
          <h2>Ready to Start Your Journey?</h2>
          <p className="text-muted">
            Discover opportunities and take the next step in your career.
          </p>

          <Button
              as={Link}
              to="/jobs"
              variant="primary"
            >
              Explore Jobs
            </Button>
        </Container>
      </div>
    </div>
  );
}

export default About;