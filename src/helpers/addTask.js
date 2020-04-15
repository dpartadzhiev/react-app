import { v4 as uuidv4 } from "uuid";

export const addTask = (newTask) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

  const updatedUsers = users.map((user) => {
    if (user.id === loggedUser.id) {
      return {
        ...user,
        tasks: [{ id: uuidv4(), ...newTask }, ...user.tasks],
      };
    }
    return user;
  });

  window.localStorage.setItem("users", JSON.stringify(updatedUsers));
  window.localStorage.setItem(
    "loggedUser",
    JSON.stringify({
      ...loggedUser,
      tasks: [{ id: uuidv4(), ...newTask }, ...loggedUser.tasks],
    })
  );
};
