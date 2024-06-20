import { Container, Text, VStack, Heading, Button, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Event Management Platform</Heading>
        <Text fontSize="lg">Manage your events efficiently and effortlessly.</Text>
        <Button as={Link} to="/about" colorScheme="teal" size="lg">Learn More</Button>
        {events.map((event, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{event.name}</Heading>
            <Text mt={4}>{event.date}</Text>
            <Text mt={4}>{event.location}</Text>
            <Text mt={4}>{event.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;