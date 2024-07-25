// @ts-nocheck
import { useState } from "react";
import CustomTable from "../CustomTable/CustomTable";
import { getColumnsUsers } from "./columns";
import { Flex, Spinner } from "@chakra-ui/react";
import { User } from "./user.interface";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models/routes";
import { useDeleteUser, useUsers } from "../../services/queries/user.queries";
import { ConfirmActionModal } from "../ConfirmActionModal/ConfirmActionModal";
import useToastNotification from "../../hooks/useToastNotification";

export const UserList = () => {
  const { showToast } = useToastNotification();
  const navigate = useNavigate();
  const { isLoading, data: users, error } = useUsers();
  const deleteUser = useDeleteUser();
  const [configModalDelete, setConfigModalDelete] = useState({
    isOpen: false,
    idUser: "",
  });

  const handleClickRow = (cell: User, action: string) => {
    if (action === "delete") {
      setConfigModalDelete({
        ...setConfigModalDelete,
        isOpen: true,
        idUser: cell?.id,
      });
    }
    if (action === "edit") {
      navigate(`${PublicRoutes.UPDATE_USER}/${cell.id}`);
    }
    if (action === "show") {
      navigate(`${PublicRoutes.USER_DETAILS}/${cell.id}`);
    }
  };

  const handlerCloseModal = () => {
    setConfigModalDelete({
      ...setConfigModalDelete,
      isOpen: false,
    });
  };

  if (isLoading) {
    <Flex flex={1}>
      <Spinner />
    </Flex>;
  }

  if (error) {
    showToast({ title: "Error loading user details", status: "error" });
  }
  const handleDeleteUser = (id) => {
    deleteUser.mutate(configModalDelete.idUser, {
      onSuccess: () => {
        showToast({ title: "User successfully deleted!", status: "success" });
      },
      onError: () => {
        showToast({
          title: "Error",
          description: "Could not delete user. Try again.",
          status: "error",
        });
      },
    });
    handlerCloseModal();
  };
  return (
    <div>
      <CustomTable
        data={users || []}
        columns={getColumnsUsers({ handleClickRow })}
      />
      <ConfirmActionModal
        isOpen={configModalDelete.isOpen}
        onClose={handlerCloseModal}
        handlerAction={() => handleDeleteUser(configModalDelete.idUser)}
      />
    </div>
  );
};
