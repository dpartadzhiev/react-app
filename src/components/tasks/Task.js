import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Task = ({ task, onTaskDelete, mode }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.time}</td>
      <td>{task.status}</td>
      <td>
        <Link
          to={
            mode !== "admin"
              ? `/tasks/edit/${task.id}`
              : `/tasks/edit/${task.id}/mode/admin`
          }
        >
          <Button>Edit</Button>
        </Link>
        <Button className="ml-1" onClick={onTaskDelete.bind(this, task.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Task;
