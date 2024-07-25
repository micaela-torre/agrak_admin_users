import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastNotificationProps {
  title: string;
  description?: string;
  status: ToastType;
  duration?: number;
  isClosable?: boolean;
}

const useToastNotification = () => {
  const toast = useToast();

  const showToast = useCallback(
    ({
      title,
      description,
      status,
      duration = 3000,
      isClosable = true,
    }: ToastNotificationProps) => {
      toast({
        title,
        description,
        status,
        duration,
        isClosable,
        position: "bottom-right",
      });
    },
    [toast]
  );

  return { showToast };
};

export default useToastNotification;
