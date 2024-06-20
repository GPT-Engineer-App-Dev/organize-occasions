import { Container, Text, VStack, Heading, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Index = () => {
  const [events, setEvents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onSubmit = (data) => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({ ...data, eventId: selectedEvent.id });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    toast({
      title: "Booking confirmed.",
      description: "Your ticket has been booked successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

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
          <Button colorScheme="teal" size="sm" onClick={() => { setSelectedEvent(event); onOpen(); }}>Book Ticket</Button>
          </Box>
        ))}
      </VStack>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Ticket for {selectedEvent?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input id="name" placeholder="Your Name" {...register("name", { required: "Name is required" })} />
                {errors.name && <Text color="red.500">{errors.name.message}</Text>}
              </FormControl>
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
                {errors.email && <Text color="red.500">{errors.email.message}</Text>}
              </FormControl>
              <FormControl isInvalid={errors.quantity}>
                <FormLabel htmlFor="quantity">Ticket Quantity</FormLabel>
                <Input id="quantity" type="number" placeholder="Ticket Quantity" {...register("quantity", { required: "Quantity is required", min: 1 })} />
                {errors.quantity && <Text color="red.500">{errors.quantity.message}</Text>}
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">Book Ticket</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;