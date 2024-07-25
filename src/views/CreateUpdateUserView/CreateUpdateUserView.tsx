// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { BiSolidUserDetail, BiTrash } from "react-icons/bi";
import {
  useDeleteUser,
  useHandlerMutationUser,
  useUserById,
} from "../../services/queries/user.queries";
import { PublicRoutes } from "../../models/routes";
import useToastNotification from "../../hooks/useToastNotification";
import { ConfirmActionModal } from "../../components/ConfirmActionModal/ConfirmActionModal";

interface UserFormData {
  first_name: string;
  avatar?: string;
  second_name: string;
  email: string;
  id?: string;
}

const CreateUpdateUserView: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToastNotification();
  const { id } = useParams<{ id: string }>();
  const { isLoading, data, error } = useUserById(id || "");
  const mutation = useHandlerMutationUser(id);
  const deleteUser = useDeleteUser(id);
  const [configModal, setConfigModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>();

  useEffect(() => {
    if (data) {
      setValue("first_name", data.first_name);
      setValue("second_name", data.second_name);
      setValue("email", data.email);
      setValue("avatar", data.avatar);
    }
  }, [data, setValue]);

  const onSubmit = (data: UserFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        showToast({ title: "User successfully saved!", status: "success" });
        navigate(PublicRoutes.HOME);
      },
      onError: () => {
        showToast({
          title: "Error",
          description: "Could not save user. Try again.",
          status: "error",
        });
      },
    });
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) {
    showToast({
      title: "Error",
      description: "Error loading user data",
      status: "error",
    });
  }
  const handleDeleteUser = (id) => {
    deleteUser.mutate(id, {
      onSuccess: () => {
        showToast({ title: "User successfully deleted!", status: "success" });
        navigate(PublicRoutes.HOME);
      },
      onError: () => {
        showToast({
          title: "Error",
          description: "Could not delete user. Try again.",
          status: "error",
        });
      },
    });
    setConfigModal((prev) => !prev);
  };
  return (
    <Container>
      <Header
        buttonTitle="Show users list"
        icon={<BiSolidUserDetail />}
        navigation={PublicRoutes.HOME}
      />
      <Box
        backgroundColor="rgba(0, 0, 0, 0.7)"
        w="50%"
        p={5}
        color="#fff"
        borderRadius="10px"
        mx="auto"
        mt={5}
      >
        <Text fontWeight={600} mb={5} textTransform="uppercase">
          {id ? "Update user data" : "Enter new user"}
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="first_name"
            label="First Name"
            error={errors.first_name}
            register={register("first_name", {
              required: "This field is required",
            })}
          />
          <FormInput
            id="second_name"
            label="Second Name"
            error={errors.second_name}
            register={register("second_name", {
              required: "This field is required",
            })}
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            error={errors.email}
            register={register("email", { required: "This field is required" })}
          />
          <FormInput
            id="avatar"
            label="Avatar URL"
            type="url"
            register={register("avatar")}
          />
          {id && (
            <Button
              backgroundColor="red.500"
              color="#FFF"
              onClick={() => setConfigModal(true)}
              mt={5}
              borderRadius="25px"
              boxShadow="md"
              transition="transform 0.2s"
              rightIcon={<BiTrash />}
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              Delete user
            </Button>
          )}
          <Button
            type="submit"
            mt={5}
            backgroundColor="#000"
            color="#FFF"
            size="lg"
            width="full"
          >
            {id ? "Save changes" : "Add User"}
          </Button>
        </form>
      </Box>
      <ConfirmActionModal
        isOpen={configModal}
        onClose={() => setConfigModal((prev) => !prev)}
        handlerAction={() => handleDeleteUser(id)}
      />
    </Container>
  );
};

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  error?: any;
  register: any;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = "text",
  error,
  register,
}) => (
  <FormControl id={id} isInvalid={!!error} mb={2}>
    <FormLabel>{label} *</FormLabel>
    <Input type={type} {...register} />
    {error && <Text color="red.500">{error.message}</Text>}
  </FormControl>
);

export default CreateUpdateUserView;
