import React from "react";
import { Box, Container, Heading, Text, VStack, Image, Flex, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          About Us
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Learn more about our mission, vision, and the people behind the company.
        </Text>
        <Divider my={5} />
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around">
          <Box maxW="sm" mb={{ base: 5, md: 0 }}>
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtfGVufDB8fHx8MTcxMDAzNTA0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Team" />
            <Heading as="h3" size="md" my={2} textAlign="center">
              Our Team
            </Heading>
            <Text textAlign="justify">Our team is composed of dedicated professionals who are passionate about delivering top-notch services and innovative solutions.</Text>
          </Box>
          <Box maxW="sm">
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1427348693976-99e4aca06bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXNpb258ZW58MHx8fHwxNzEwMDM1MDQxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Vision" />
            <Heading as="h3" size="md" my={2} textAlign="center">
              Our Vision
            </Heading>
            <Text textAlign="justify">We strive to be the leading company in our industry, setting standards for excellence and integrity.</Text>
          </Box>
          <Box maxW="sm">
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaXNzaW9ufGVufDB8fHx8MTcxMDAzNTA0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Mission" />
            <Heading as="h3" size="md" my={2} textAlign="center">
              Our Mission
            </Heading>
            <Text textAlign="justify">Our mission is to empower our clients by providing exceptional services and building long-lasting relationships.</Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
