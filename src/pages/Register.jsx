import { Container, Form, Button } from "react-bootstrap";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      <Container className="register-container">

        <div className="register-card">

          <h2 className="register-title">
            Create Your <span>Account</span>
          </h2>

          <p className="register-text">
            Join Mighty Minds and start exploring opportunities.
          </p>

          <Form>

            <Form.Group className="mb-3">
              <Form.Label className="register-label">
                Full Name
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter your full name"
                className="register-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="register-label">
                Email
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="register-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="register-label">
                Password
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Create a password"
                className="register-input"
              />
            </Form.Group>

            <Button className="register-btn w-100">
              Create Account
            </Button>

          </Form>

        </div>

      </Container>
    </div>
  );
}

export default Register;