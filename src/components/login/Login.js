import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardBody } from "reactstrap";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onFormSubmit = () => {
    const users = JSON.parse(window.localStorage.getItem("users"));

    users.forEach((user) => {
      if (user.username === username && user.password === password) {
        window.localStorage.setItem("loggedUser", JSON.stringify(user));
        props.history.push("/home");
      }
    });
  };

  if (window.localStorage.getItem("loggedUser")) {
    props.history.push("/home");
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-3">
        <Col lg={6}>
          <div className="bg-info px-3 py-3 mb-3">React App - Login</div>
        </Col>
      </Row>
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
                <Button onClick={onFormSubmit}>Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <Col lg={6}>
          <div className="bg-dark px-3 py-3 mb-3 text-white">
            Don't have an account? Click <Link to="/signup">here</Link> to sign up.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
