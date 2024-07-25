// @ts-nocheck
import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  Text,
} from "@chakra-ui/react";
import { Container } from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { PublicRoutes } from "../../models/routes";
import { BiSolidUserDetail } from "react-icons/bi";
import UserDetails from "./components/UserDetails/UserDetails";
import { useUserById } from "../../services/queries/user.queries";
import useToastNotification from "../../hooks/useToastNotification";

const DetailsUserView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: user, error } = useUserById(id || "");
  const { showToast } = useToastNotification();
  if (!id) {
    return (
      <Container>
        <Alert status="error">
          <AlertIcon />
          No user ID provided.
        </Alert>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" flex={1}>
        <Spinner />
      </Flex>
    );
  }

  if (error) {
    showToast({ title: "Error loading user details", status: "error" });
  }

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
          User information
        </Text>
        <Flex gap={5} alignItems="center">
          <Avatar size="xxl" maxW={200} src={user?.avatar} />
          <Box>{user && <UserDetails data={user} />}</Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default DetailsUserView;
