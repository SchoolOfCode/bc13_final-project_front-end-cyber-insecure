import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true });
    } catch {
      setError("Incorrect email or password");
    }
    setLoading(false);
  }

  return [
    <div className="login-component">
      <div className="title-container">
        <h1> deVault </h1>
        <p>
          Polish your Portfolio. Cultivate your CV. Organize and optimize your
          job search through. All in one place.
        </p>
      </div>
      <div className="login-container">
        <Card id="card">
          <Card.Body>
            <h2 className="text-center mb-4"> Log in</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>

              <Button disabled={loading} id="login-button" className="mt-4 w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>,
    <div className="login-second-section-container">
      <div className="login-second-section-header">
        <h1>Job Tracker Tool</h1>
        <p>Our tracker tool will help you stay on top of your applications.</p>
      </div>
      <div className="login-second-section-main">
        <div className="second-ex">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
          <p>Create your job application and edit it in real time!</p>
        </div>
        <div className="second-ex">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
          <p>Make notes on how you did in your application! </p>
        </div>
        <div className="second-ex">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
          <p>Check key information on the jobs you have applied to!</p>
        </div>
      </div>
    </div>,
    <div className="login-third-section-container">
      <div className="login-third-section-header">
        <h1>Interview Prep</h1>
        <p>
          Key tips and examples of how to best answer the most difficult and
          annoying interview questions!
        </p>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg"
        alt=""
      />
    </div>,
    <div className="login-fourth-section-container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
      <div className="login-fourth-section-header">
      <h1>Perfect your Portfolio</h1>
      <p>
        Use our portfolio tool to optimize yours to meet the requirements for
        each job you are applying for!
      </p>
      </div>
    </div>,
  ];
}
