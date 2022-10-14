import { useColorModeValue } from "@chakra-ui/react";

export const useLightGray = () => {
  return useColorModeValue("#F2F2F2", "#F2F2F2");
};

export const useDarkGray = () => {
  return useColorModeValue("#656565", "#656565");
};

export const useLightBlue = () => {
  return useColorModeValue("#6096FD", "#6096FD");
}