export const editUser = ({ endpoint, username, password, role }) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const updatedUsers = users.map((user) => {
    if (user.id === endpoint) {
      return {
        ...user,
        username,
        password,
        role,
      };
    }
    return user;
  });

  window.localStorage.setItem("users", JSON.stringify(updatedUsers));
};
