import React, { useState } from "react";
import Profile from "../profile/Profile";
import Task from "./Task";
import { deleteTask } from '../../helpers/deleteTask';
import { Container, Table } from "reactstrap";

const Tasks = (props) => {

  const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
  const users = JSON.parse(window.localStorage.getItem("users"));

  const [tasks, setTasks] = useState(loggedUser.tasks);

  const onTaskDelete = (taskId) => {
    const updatedTasks = deleteTask(loggedUser, users, tasks, taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Profile {...props} />
      <Container>
        <h3>My Tasks</h3>
        {tasks.length === 0 ? (
          <span>You don't have any tasks yet.</span>
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
                <Task key={index} task={task} onTaskDelete={onTaskDelete} />
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default Tasks;
