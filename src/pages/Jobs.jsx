import { Container, Row, Col } from 'react-bootstrap';
import JobCard from '../components/JobCard';
// import SearchBar from '../components/SearchBar';
// import jobs from '../data/jobs';

function Jobs() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Available Jobs</h2>

      {/* <SearchBar /> */}

      <Row>
        {jobs.map(job => (
          <Col md={4} key={job.id}>
            <JobCard job={job} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Jobs;