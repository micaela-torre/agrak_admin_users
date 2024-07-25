import { Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  label: string;
}
export const TooltipCustom = ({ children, label }: TooltipProps) => {
  return (
    <Tooltip
      hasArrow
      label={label}
      bg="#575756"
      color="white"
      fontSize="12px"
      borderRadius="5px"
      p={1}
    >
      {children}
    </Tooltip>
  );
};
