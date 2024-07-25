import { User } from "../../components/UserList/user.interface";
import { callApi } from "../../services/utilServices";

export const UsersServices = ((callService) => {
  const getUsers = () => {
    return callService({
      url: "/users",
    });
  };

  const getUserById = (id?: string) => {
    return callService({
      url: `/users/${id}`,
    });
  };

  const addUser = (user: User) => {
    return callService({
      url: "/users",
      method: "POST",
      data: user,
    });
  };

  const updateUser = (data: User, id: string) => {
    console.log("llega la data:", data);
    return callService({
      url: `/users/${id}`,
      method: "PUT",
      data,
    });
  };

  const deleteUser = (userId?: string) => {
    return callService({
      url: `/users/${userId}`,
      method: "DELETE",
    });
  };

  return {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
  };
})(callApi);
