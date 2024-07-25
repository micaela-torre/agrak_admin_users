import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { PublicRoutes } from "../../models/routes";
import { TextPageNotFound } from "../../constants/generalText";
import { Container } from "../../components/Container/Container";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Flex
        alignSelf="center"
        direction="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(0, 0, 0, 0.7)"
        w="50%"
        p={5}
        color="#fff"
        borderRadius="10px"
        m="auto"
      >
        <Box>
          <Text fontSize={30} fontWeight="bold">
            {TextPageNotFound.title}
          </Text>
          <Text>{TextPageNotFound.subTitle}</Text>
        </Box>
        <Button
          w={300}
          onClick={() => navigate(PublicRoutes.HOME)}
          sx={{ marginTop: "25px" }}
        >
          {TextPageNotFound.labelButton}
        </Button>
      </Flex>
    </Container>
  );
};
export default PageNotFound;
