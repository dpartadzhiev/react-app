import React, { useState, useEffect } from "react";
import Profile from "../profile/Profile";
import User from './User';

import { Table, Container } from "reactstrap";

import { deleteUser } from '../../helpers/deleteUser';
import { makeUserAdmin } from '../../helpers/makeUserAdmin';

const Users = (props) => {
  const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem("users")));

  const makeAdmin = (userId) => {
    const updatedUsers = makeUserAdmin(users, userId);
    setUsers(updatedUsers);
  }

  const onUserDelete = (userId) => {
    const updatedUsers = deleteUser(users, userId);
    setUsers(updatedUsers);
  }

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users))
  }, [users]);

  return (
    <>
      <Profile {...props} />
      <Container>
        <Table dark>
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User key={index} user={user} makeAdmin={makeAdmin} onUserDelete={onUserDelete} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Users;