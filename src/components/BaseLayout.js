import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const BaseLayout = ({ children }) => (
  <Box width="100%" minH="100vh">
    <Flex width="100%" height="100%" justifyContent="center" fontFamily="body">
      <Box maxW="600px" w="100%" h="100%" minH="100vh" bg="white">
        {children}
      </Box>
    </Flex>
  </Box>
);
