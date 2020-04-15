export const editTask = (updatedTask) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

  const updatedTasks = loggedUser.tasks.map((task) => {
    if (task.id === updatedTask.id) {
      return updatedTask;
    }
    return task;
  });

  const updatedUsers = users.map((user) => {
    if (user.id === loggedUser.id) {
      return {
        ...user,
        tasks: updatedTasks,
      };
    }
    return user;
  });

  window.localStorage.setItem("users", JSON.stringify(updatedUsers));
  window.localStorage.setItem(
    "loggedUser",
    JSON.stringify({
      ...loggedUser,
      tasks: updatedTasks,
    })
  );
};
