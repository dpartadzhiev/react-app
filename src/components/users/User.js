import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const User = ({ user, makeAdmin, onUserDelete }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.role}</td>
      <td>View tasks</td>
      <td>
        <Link to={`/users/edit/${user.id}`}>
          <Button>Edit</Button>
        </Link>
        <Button className="ml-1" onClick={onUserDelete.bind(this, user.id)}>
          Delete
        </Button>
        {user.role === "User" && (
          <Button className="ml-1" onClick={makeAdmin.bind(this, user.id)}>
            Make admin
          </Button>
        )}
      </td>
    </tr>
  );
};

export default User;
