import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Contact Us</Heading>
        <Text fontSize="lg">Feel free to reach out for any queries.</Text>
        <Button as={Link} to="/" colorScheme="teal" size="lg">Go Back Home</Button>
      </VStack>
    </Container>
  );
};

export default Contact;