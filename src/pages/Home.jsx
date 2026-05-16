import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import '../App.css';
import JobCards from "../components/JobCard";
import SuccessStories from "../components/SucessStories";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">



      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            {/* Left Content */}
            <Col lg={6}>
              <div className="hero-badge">
                ● 2,400+ jobs added this week
              </div>

              <h1 className="hero-title">
                Find work <br />
                <span>you actually</span> <br />
                want to do.
              </h1>

              <p className="hero-text">
                Mighty Minds connects ambitious people with companies
                building the future. Smart matching. No noise.
              </p>

              {/* Search Box
              <div className="search-box">
                <Form.Control
                  type="text"
                  placeholder="Search jobs..."
                  className="search-input"
                />

                <Button className="search-btn">
                  Search
                </Button>
              </div> */}

              {/* Buttons */}
              <div className="hero-buttons mt-4">
                <Button
                  as={Link}
                  to="/jobs"
                  variant="primary"
                >
                  Find Your Next Job
                </Button>

                <Button
                  variant="outline-light"
                  className="hire-btn"
                >
                  I'm hiring
                </Button>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
      <JobCards />
      <section className="cta-section">
        <Container className="text-center">
          <SuccessStories />
        </Container>
      </section>  

    </div>
  );
};

export default HomePage;