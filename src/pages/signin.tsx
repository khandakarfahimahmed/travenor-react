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
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function Signin() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <ChevronLeftIcon
        m={5}
        mt={9}
        rounded="50%"
        bgColor={"gray.50"}
        cursor={"pointer"}
        w={"6vw"}
        h={"6vw"}
      />

      <Box
        display={"flex"}
        // h="100dvh"
        w="100vw"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box textAlign={"center"}>
          <Text mt={20} fontSize="3xl">
            Sign in now
          </Text>
          <Text mt={4}>Please sign in to continue our app</Text>
          <Input w={"sm"} mt={10} placeholder="large size" size="lg" />
          <InputGroup size="md">
            <Input
              mt={4}
              pr="4.5rem"
              w={"sm"}
              size="lg"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              id="password"
              name="password"
            />
            console.log("password");
            <InputRightElement h={"full"} width="3.9rem">
              <Icon
                mt={3}
                opacity={0.7}
                cursor={"pointer"}
                onClick={handleClick}
                as={show ? FaEyeSlash : FaEye}
              />
            </InputRightElement>
          </InputGroup>
          <Text mt={3} fontSize="sm" textAlign={"end"}>
            Forget Password?
          </Text>
          <Button
            mt={10}
            h={"3.5rem"}
            borderRadius={"2xl"}
            w={"sm"}
            colorScheme="teal"
            size="md"
            bg={"#24baec"}
            fontWeight={"normal"}
            _hover={{ bg: "#158cb4" }}
            _focus={{ outline: "none" }}
          >
            Sign in
          </Button>
          <Text
            display={"flex"}
            fontSize="sm"
            justifyContent={"center"}
            gap={3}
            mt={10}
          >
            Don't have an account?
            <Text color={"#ff7029"}>
              <a href="/signup">Sign up</a>
            </Text>
          </Text>
          <Text mt={4} fontSize="sm">
            Or connect
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
