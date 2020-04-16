export const editTask = (editMode, updatedTask) => {
  const users = JSON.parse(window.localStorage.getItem("users"));

  if (editMode !== "admin") {
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
  } else {
    const updatedUsers = users.map((user) => {
      return {
        ...user,
        tasks: user.tasks.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          }
          return task;
        }),
      };
    });

    window.localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
};
