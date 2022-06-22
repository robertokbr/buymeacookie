import { Flex, FlexProps, HStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ContainerProps extends FlexProps {
  children: ReactElement[];
};  

export function FunderContainer({ children,...props}: ContainerProps) {
  return (
    <Flex {...props} minW="100vw" h="100vh" padding="8" flexWrap="wrap">
      {children}
    </Flex>
  );
}