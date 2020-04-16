import { v4 as uuidv4 } from "uuid";

export const addUser = ({ username, password, role }) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const updatedUsers = JSON.stringify([
    { id: uuidv4(), username, password, role, tasks: []},
    ...users,
  ]);
  window.localStorage.setItem("users", updatedUsers);
};
