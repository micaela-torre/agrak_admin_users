import { ReactNode } from 'react';

export interface ModalProps {
  modalTitle?: string | ReactNode;
  isOpen: boolean;
  onClose: () => void;
  buttonTitle?: string;
  onHandlerAction?: () => void;
  children?: ReactNode;
  maxW?: string;
  isDisabled?: boolean;
}
