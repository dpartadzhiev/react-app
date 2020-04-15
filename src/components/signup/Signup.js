import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Alert } from "reactstrap";
import { Card, CardBody } from "reactstrap";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onFormSubmit = () => {
    if (!username || !password) {
      setError(true);
    } else {
      if (window.localStorage.getItem("users")) {
        const currentUsers = JSON.parse(window.localStorage.getItem("users"));
        window.localStorage.setItem(
          "users",
          JSON.stringify([
            ...currentUsers,
            { id: uuidv4(), username, password, role: "User", tasks: [] },
          ])
        );
      } else {
        window.localStorage.setItem(
          "users",
          JSON.stringify([
            {
              id: uuidv4(),
              username,
              password,
              role: "Administrator",
              tasks: [],
            },
          ])
        );
      }

      setError(false);
      setUsername("");
      setPassword("");
      setMessage("You have successfully signed up! Feel free to log in!");
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-3">
        <Col lg={6}>
          <div className="bg-info px-3 py-3 mb-3">React App - Sign up</div>
        </Col>
      </Row>
      {error && (
        <Row className="d-flex justify-content-center">
          <Col lg={6}>
            <Alert color="danger">All fields are required!</Alert>
          </Col>
        </Row>
      )}
      {message && (
        <Row className="d-flex justify-content-center">
          <Col lg={6}>
            <Alert color="success">{message}</Alert>
          </Col>
        </Row>
      )}
      <Row className="d-flex justify-content-center">
        <Col lg={6}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Please enter your username"
                    value={username}
                    onChange={onUsernameChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Please enter your password"
                    value={password}
                    onChange={onPasswordChange}
                  />
                </FormGroup>
                <Button onClick={onFormSubmit}>Sign up</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <Col lg={6}>
          <div className="bg-dark px-3 py-3 mb-3 text-white">
            Already have an account? Click <Link to="/">here</Link> to log in.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
