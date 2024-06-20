import { Container, VStack, Heading, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(data);
    localStorage.setItem("events", JSON.stringify(events));
    toast({
      title: "Event created.",
      description: "Your event has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h1" size="2xl">Create Event</Heading>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Event Name</FormLabel>
          <Input id="name" placeholder="Event Name" {...register("name", { required: "Event name is required" })} />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
        </FormControl>
        <FormControl isInvalid={errors.date}>
          <FormLabel htmlFor="date">Event Date</FormLabel>
          <Input id="date" type="date" {...register("date", { required: "Event date is required" })} />
          {errors.date && <Text color="red.500">{errors.date.message}</Text>}
        </FormControl>
        <FormControl isInvalid={errors.location}>
          <FormLabel htmlFor="location">Event Location</FormLabel>
          <Input id="location" placeholder="Event Location" {...register("location", { required: "Event location is required" })} />
          {errors.location && <Text color="red.500">{errors.location.message}</Text>}
        </FormControl>
        <FormControl isInvalid={errors.description}>
          <FormLabel htmlFor="description">Event Description</FormLabel>
          <Textarea id="description" placeholder="Event Description" {...register("description", { required: "Event description is required" })} />
          {errors.description && <Text color="red.500">{errors.description.message}</Text>}
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;