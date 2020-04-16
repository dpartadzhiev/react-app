import React, { useState, useEffect } from "react";
import Profile from "../profile/Profile";
import Task from "./Task";
import { Container, Table } from "reactstrap";

import { deleteTask } from "../../helpers/deleteTask";

const UserTasks = (props) => {
  const endpoint = props.match.params.endpoint;
  const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
  const users = JSON.parse(window.localStorage.getItem("users"));

  const [username, setUsername] = useState("");
  const [tasks, setTasks] = useState([]);

  const onTaskDelete = (taskId) => {
    const updatedTasks = deleteTask(loggedUser, users, tasks, taskId);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    users.forEach((user) => {
      if (user.id === endpoint) {
        setUsername(user.username);
        setTasks(user.tasks);
      }
    });
  }, []);

  return (
    <>
      <Profile {...props} />
      <Container>
        <h3>Tasks for user: {username}</h3>
        {tasks.length === 0 ? (
          <span className="text-danger">The are no tasks for this user.</span>
        ) : (
          <Table dark className="mt-3">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <Task key={index} task={task} onTaskDelete={onTaskDelete} mode="admin" />
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default UserTasks;
