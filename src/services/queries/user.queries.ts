import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { UsersServices } from "../../views/services/user.services";
import { User } from "../../components/UserList/user.interface";

export const useUsers = () => {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: () => UsersServices.getUsers(),
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => UsersServices.deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUsers"] });
    },
  });
};

export const useUserById = (id?: string) => {
  return useQuery({
    queryKey: ["getUserById", id],
    queryFn: () => UsersServices.getUserById(id),
    enabled: !!id,
  });
};

export const useHandlerMutationUser = (id?: string) => {
  return useMutation({
    mutationFn: (dataUser: User) => {
      if (id) {
        return UsersServices.updateUser(dataUser, id);
      } else {
        return UsersServices.addUser(dataUser);
      }
    },
  });
};
