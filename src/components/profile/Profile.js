import React from "react";
import { Link } from "react-router-dom";

import { Button, Container } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";

const Profile = (props) => {
  const user = JSON.parse(window.localStorage.getItem("loggedUser"));

  const Logout = () => {
    window.localStorage.removeItem("loggedUser");
    props.history.push("/");
  };

  return (
    <Container>
      <div className="mt-3 mb-3">
        <div className="bg-info px-3 py-3 d-inline-block">
          Hello, {user.username}
        </div>
        <div className="bg-info px-3 py-3 d-inline-block ml-1">
          Role: {user.role}
        </div>
        <Button onClick={Logout} className="ml-1">
          Logout
        </Button>
      </div>

      <Nav pills>
        <NavItem>
          <NavLink tag={Link} to="/home" active>
            Home
          </NavLink>
        </NavItem>
        <NavItem className="ml-1">
          <NavLink tag={Link} to="/tasks" active>
            My Tasks
          </NavLink>
        </NavItem>
        <NavItem className="ml-1">
          <NavLink tag={Link} to="/tasks/add" active>
            Add Task
          </NavLink>
        </NavItem>
        {user.role === "Administrator" && (
          <>
            <NavItem className="ml-1">
              <NavLink tag={Link} to="/users/add" active>
                Add User
              </NavLink>
            </NavItem>
            <NavItem className="ml-1">
              <NavLink tag={Link} to="/users" active>
                View all users
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
      <hr />
    </Container>
  );
};

export default Profile;
