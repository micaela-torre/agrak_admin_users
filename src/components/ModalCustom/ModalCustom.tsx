import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Portal } from '@chakra-ui/react';
import { ModalProps } from './IModal';

export const ModalCustom = ({
  modalTitle,
  buttonTitle,
  isOpen,
  onHandlerAction,
  onClose,
  children,
  maxW,
  isDisabled,
}: ModalProps) => {
  return (
    <Portal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={maxW || "60%"} borderRadius={20}>
          <ModalHeader fontSize="16px" fontWeight="bold" color="#575756">
            {modalTitle}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{children}</ModalBody>
          {onHandlerAction && (
            <ModalFooter>
              <Button
                isDisabled={isDisabled}
                borderRadius={20}
                backgroundColor="#45AC34"
                w={120}
                onClick={onHandlerAction}
                colorScheme="blue"
                mr={3}
              >
                {buttonTitle}
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </Portal>
  );
};
