import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ModalCustom } from "../ModalCustom/ModalCustom";

interface ConfirmActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  handlerAction: () => void;
  modalTitle?: string;
  children?: React.ReactNode;
}

export const ConfirmActionModal: React.FC<ConfirmActionModalProps> = ({
  isOpen,
  onClose,
  handlerAction,
  modalTitle = "Confirm Action",
  children,
}) => {
  return (
    <ModalCustom
      isOpen={isOpen}
      modalTitle={modalTitle}
      onClose={onClose}
      maxW="350px"
    >
      <Box>
        <Text>Are you sure you want to proceed?</Text>
        {children}
      </Box>
      <Flex mt={10} gap={5}>
        <Button borderRadius={20} w={120} onClick={onClose}>
          Cancel
        </Button>
        <Button
          backgroundColor="#000"
          color="#FFF"
          fontWeight={200}
          borderRadius="25px"
          boxShadow="md"
          transition="transform 0.2s"
          _hover={{
            transform: "scale(1.1)",
          }}
          w={120}
          onClick={handlerAction}
        >
          Confirm
        </Button>
      </Flex>
    </ModalCustom>
  );
};
