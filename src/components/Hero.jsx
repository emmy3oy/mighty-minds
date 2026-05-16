import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col md={6}>
            <h1>Find Your Dream Job Today</h1>
            <p>
              Discover thousands of job opportunities from top companies.
            </p>

            <Button variant="primary" size="lg">
              Explore Jobs
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;