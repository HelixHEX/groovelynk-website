import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export const useLightGray = () => {
  return useColorModeValue("#F2F2F2", "#656565");
};

export const useDarkGray = () => {
  return useColorModeValue("#656565", "#F2F2F2");
};

export const useLightBlue = () => {
  return useColorModeValue("#6096FD", "#213150");
}

export const useTextColor = () => {
  return useColorModeValue('#656565' ,'#F2F2F2')
}

export const useButtonColor = () => {
  return useColorModeValue('white', '#6096FD')
}