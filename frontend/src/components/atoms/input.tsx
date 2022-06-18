import { Input as CInput, InputProps } from '@chakra-ui/react';

export default function Input(props: InputProps) {
  return (
    <CInput
      py="12"
      px="4"
      size="lg"
      fontSize="4xl"
      variant="filled"
      bg="gray.900"
      borderRadius="3xl" 
      border="1px"
      transition="0.2s"
      _hover={{ bg: "gray.900", borderColor: "gray.600"  }}
      {...props}
    />
  );
}