import React, { useState, useEffect } from "react";
import Profile from "../profile/Profile";

import { Container, Row, Col } from "reactstrap";
import { Button, Alert, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardBody } from "reactstrap";

import { addUser } from "../../helpers/addUser";
import { editUser } from "../../helpers/editUser";

const UserForm = (props) => {
  const endpoint = props.match.params.endpoint;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [mode, setMode] = useState("add");
  const [message, setMessage] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onRoleChange = (event) => {
    setRole(event.target.value);
  };

  useEffect(() => {
    if (endpoint) {
      setMode("edit");
      const users = JSON.parse(window.localStorage.getItem("users"));
      users.forEach((user) => {
        if (user.id === endpoint) {
          setUsername(user.username);
          setPassword(user.password);
          setRole(user.role);
        }
      });
    }
  }, []);

  const onFormSubmit = () => {
    if (mode === "add") {
      addUser({ username, password, role });
      setMessage("The user was added successufully!");
      setUsername("");
      setPassword("");
      setRole("");
    }

    if(mode === "edit"){
      editUser({endpoint, username, password, role});
      setMessage("The user was edited successufully!");
    }
  };

  return (
    <>
      <Profile {...props} />
      <Container>
        <Row className="d-flex justify-content-center mt-3">
          <Col lg={6}>
            <div className="bg-info px-3 py-3 mb-3">
              React App - {mode === "add" ? "Add User" : `Edit User`}
            </div>
          </Col>
        </Row>
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
                      type={mode === "add" ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="Please enter your password"
                      value={password}
                      onChange={onPasswordChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="role">Select role</Label>
                    <Input
                      type="select"
                      name="role"
                      id="role"
                      value={role}
                      onChange={onRoleChange}
                    >
                      <option>Select role</option>
                      <option value="User">User</option>
                      <option value="Administrator">Administrator</option>
                    </Input>
                  </FormGroup>
                  <Button onClick={onFormSubmit}>
                    {mode === "add" ? "Add User" : `Edit User`}
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserForm;
