import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Start() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      display={"flex"}
      // h="100dvh"
      w="100vw"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box textAlign={"center"}>
        <Text fontSize="2xl">Sign in now</Text>
        <Text>Please sign in to continue our app</Text>
        <Input w={"sm"} placeholder="large size" size="lg" />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            w={"sm"}
            size="lg"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement h={"full"} width="3.9rem">
            <Icon
              opacity={0.7}
              cursor={"pointer"}
              onClick={handleClick}
              as={show ? FaEyeSlash : FaEye}
            />
          </InputRightElement>
        </InputGroup>
        <Text fontSize="sm" textAlign={"end"}>
          Forget Password?
        </Text>
        <Button
          mt={4}
          h={"3.5rem"}
          borderRadius={"2xl"}
          w={"sm"}
          colorScheme="teal"
          size="md"
          bg={"#0d6efd"}
          fontWeight={"normal"}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
}
