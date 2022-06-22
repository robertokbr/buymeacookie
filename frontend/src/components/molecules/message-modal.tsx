import { 
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Icon,
  Flex,
} from "@chakra-ui/react"
import { cloneElement } from "react"
import { GiCookie } from "react-icons/gi"

export function MessageaModal({ 
  children, 
  message,
  cookies
}) {
  const { onOpen } = useDisclosure()

  return (
    <Popover >
      <PopoverTrigger>
      { cloneElement(children, { onClick: onOpen }) }
      </PopoverTrigger>
      <PopoverContent bg="gray.800" borderColor="gray.800">
        <PopoverArrow bg="gray.800" borderColor="gray.800"  />
        <PopoverCloseButton />
        <PopoverHeader borderColor="gray.800">
          <Flex align="center">
            {cookies}
            <Icon ml="2" as={GiCookie} color="gray.50" boxSize="4" opacity="0.5"/>
          </Flex>
        </PopoverHeader>
        <PopoverBody>{message}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}