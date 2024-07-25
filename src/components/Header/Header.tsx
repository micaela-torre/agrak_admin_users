import { Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  navigation: string;
  buttonTitle: string;
  icon?: any;
}

export const Header = ({ navigation, buttonTitle, icon }: HeaderProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(navigation);
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" my={2} mx={20}>
      <Image
        src="https://agrak.com/wp-content/uploads/2021/11/logo-agrak-default.png"
        alt="logo_agrak"
        w={200}
      />
      <Button
        onClick={handleClick}
        backgroundColor="#000"
        color="#FFF"
        fontWeight={200}
        borderRadius="25px"
        boxShadow="md"
        transition="transform 0.2s"
        rightIcon={icon && icon}
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        {buttonTitle}
      </Button>
    </Flex>
  );
};
