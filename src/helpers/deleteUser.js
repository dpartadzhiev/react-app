export const deleteUser = (users, userId) => {
  const updatedUsers = users.filter((user) => {
    if (user.id !== userId) {
      return true;
    } else {
      return false;
    }
  });

  return updatedUsers;
};
