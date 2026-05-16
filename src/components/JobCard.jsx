import { Container, Row, Col, Button } from "react-bootstrap";
import "./JobCards.css";
import { useNavigate } from "react-router-dom";

export default function JobCards() {
  const navigate = useNavigate();
  return (
    <div className="jobcards-wrapper">
      <Container>
        <Row className="g-4 align-items-stretch">

          {/* Job Seekers Card */}
          <Col md={6}>
            <div className="job-card dark-card">
              <span className="card-number">01</span>

              <span className="card-label">
                Job Seekers
              </span>

              <h2 className="card-heading">
                Land the role
                <span className="card-italic">
                  you deserve
                </span>
              </h2>

              <p className="card-description">
                Create a profile, browse thousands of jobs daily,
                and apply in seconds. Your first 3 connections
                are completely free.
              </p>

             <Button
              className="card-btn dark-btn"
              onClick={() => navigate("/register")}
            >
              Start for free →
            </Button>
            </div>
          </Col>

          {/* Employers Card */}
          <Col md={6}>
            <div className="job-card green-card">
              <span className="card-number">02</span>

              <span className="card-label">
                Employers
              </span>

              <h2 className="card-heading">
                Hire the best,
                <span className="card-italic">
                  faster
                </span>
              </h2>

              <p className="card-description">
                Post a job for just $10 and get matched with
                pre-qualified candidates within 24 hours.
                Quality over quantity.
              </p>

              <Button className="card-btn green-btn">
                Post a job — $10 →
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}