import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    setJobs(savedJobs);
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Available Jobs</h2>

      <Row>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Col md={4} key={job.id}>
              <Card className="mb-4 shadow">
                <Card.Body>
                  <Card.Title>
                    {job.title}
                  </Card.Title>

                  <Card.Subtitle className="mb-2 text-muted">
                    {job.company}
                  </Card.Subtitle>

                  <p>
                    <strong>Location:</strong>{" "}
                    {job.location}
                  </p>

                  <p>
                    <strong>Salary:</strong>{" "}
                    {job.salary}
                  </p>

                  <Card.Text>
                    {job.description}
                  </Card.Text>

                  <Button variant="success">
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </Row>
    </Container>
  );
}

export default Jobs;