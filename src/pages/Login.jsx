import { Container, Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      {/* Overlay */}
      <div className="login-overlay"></div>

      {/* Login Section */}
      <Container className="login-container">

        <div className="login-card">

          <div className="login-top">
            <span className="login-badge">Welcome Back</span>

            <h1 className="login-title">
              Sign in to <span>Mighty Minds</span>
            </h1>

            <p className="login-text">
              Access opportunities, connect with companies,
              and continue building your future.
            </p>
          </div>

          <Form>

            <Form.Group className="mb-4" controlId="email">
              <Form.Label className="login-label">
                Email Address
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="login-input"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label className="login-label">
                Password
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter your password"
                className="login-input"
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-4">

              <Form.Check
                type="checkbox"
                label="Remember me"
                className="remember-check"
              />

              <a href="#" className="forgot-password">
                Forgot Password?
              </a>

            </div>

            <Button className="login-btn w-100">
              Login
            </Button>

          </Form>

        </div>

      </Container>
    </div>
  );
}

export default Login;