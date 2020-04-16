import React, { useState, useEffect } from "react";

import Profile from "../profile/Profile";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Alert } from "reactstrap";
import { Card, CardBody } from "reactstrap";

import { addTask } from "../../helpers/addTask";
import { editTask } from "../../helpers/editTask";

const AddTask = (props) => {
  const endpoint = props.match.params.endpoint;
  const editMode = props.match.params.mode;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [mode, setMode] = useState("add");
  const [message, setMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onTimeChange = (event) => {
    setTime(event.target.value);
  };

  const onStatusChange = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    if (endpoint) {
      setMode("edit");

      if (editMode !== "admin") {
        const user = JSON.parse(window.localStorage.getItem("loggedUser"));
        user.tasks.forEach((task) => {
          if (task.id === endpoint) {
            setTitle(task.title);
            setDescription(task.description);
            setTime(task.time);
            setStatus(task.status);
          }
        });
      } else {
        const users = JSON.parse(window.localStorage.getItem("users"));
        users.forEach((user) => {
          user.tasks.forEach((task) => {
            if (task.id === endpoint) {
              setTitle(task.title);
              setDescription(task.description);
              setTime(task.time);
              setStatus(task.status);
            }
          });
        });
      }
    }
  }, []);

  const onFormSubmit = () => {
    if (mode === "add") {
      addTask({ title, description, time, status });
      setMessage("The task was successfully added!");
      setTitle("");
      setDescription("");
      setTime("");
      setStatus("");
    }

    if (mode === "edit") {
      editTask(editMode, { id: endpoint, title, description, time, status });
      setMessage("The task was successfully edited!");
    }
  };

  return (
    <Container>
      <Profile {...props} />

      <Row className="d-flex justify-content-center mt-3">
        <Col lg={6}>
          <div className="bg-info px-3 py-3 mb-3">
            React App - {mode === "add" ? "Add Task" : `Edit Task`}
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
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Please enter title"
                    value={title}
                    onChange={onTitleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    value={description}
                    onChange={onDescriptionChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="time">Time in hours</Label>
                  <Input
                    type="text"
                    name="time"
                    id="time"
                    placeholder="Please enter time"
                    value={time}
                    onChange={onTimeChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Input
                    type="select"
                    name="status"
                    id="status"
                    value={status}
                    onChange={onStatusChange}
                  >
                    <option>Select status</option>
                    <option value="Pending">Pending</option>
                    <option value="Finished">Finished</option>
                  </Input>
                </FormGroup>
                <Button onClick={onFormSubmit}>
                  {mode === "add" ? "Add Task" : `Edit Task`}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTask;
