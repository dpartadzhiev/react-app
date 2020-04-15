export const makeUserAdmin = (users, userId) => {
  const updatedUsers = users.map((user) => {
    if (user.id === userId) {
      return { ...user, role: "Administrator" };
    }
    return user;
  });

  return updatedUsers;
};
