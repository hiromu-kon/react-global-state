/* react */
import { useCallback } from "react"
/* @chakra-ui */
import { useToast } from "@chakra-ui/react";

/**
 * Props
 */
type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
}

/**
 * useMessage
 * @returns
 */
export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;

    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true
    });
  }, []);
  return { showMessage }
}
