import { Box, Flex, Link as ChakraLink, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex alignItems="center">
        <ChakraLink as={Link} to="/" color="white" fontSize="xl" fontWeight="bold">Event Management</ChakraLink>
        <Spacer />
        <Button as={Link} to="/about" colorScheme="teal" variant="ghost" color="white">About</Button>
        <Button as={Link} to="/contact" colorScheme="teal" variant="ghost" color="white">Contact</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;