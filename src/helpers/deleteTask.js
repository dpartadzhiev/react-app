export const deleteTask = (loggedUser, users, tasks, taskId) => {
  const updatedTasks = tasks.filter((task) => {
    if (task.id !== taskId) {
      return true;
    } else {
      return false;
    }
  });

  const updatedUsers = users.map((user) => {
    if (user.id === loggedUser.id) {
      return { ...user, tasks: updatedTasks };
    }

    return user;
  });

  window.localStorage.setItem(
    "loggedUser",
    JSON.stringify({ ...loggedUser, tasks: updatedTasks })
  );
  window.localStorage.setItem("users", JSON.stringify(updatedUsers));

  return updatedTasks;
};
