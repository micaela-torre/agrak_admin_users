import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box
      w="100%"
      p={1}
      minH="100vh"
      backgroundImage={`url("https://i.postimg.cc/vBb4F2rm/pexels-eberhardgross-691668.jpg")`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {children}
    </Box>
  );
};
