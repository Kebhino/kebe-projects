import { Button, Card, Image, Text } from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <Card.Root borderRadius={"lg"} boxShadow="md" overflow="hidden">
      {/* Card Header with Image */}
      <Card.Header>
        <Image
          src="https://snakegame-assets.s3.eu-north-1.amazonaws.com/snakeimg.png"
          alt="Placeholder Image"
          borderRadius="md"
        />
      </Card.Header>
      <Card.Body>
        <Text fontSize="lg" fontWeight="bold">
          Snake Game - React TS
        </Text>
        <Text fontSize="sm" color="gray.500">
          Gra przeglądarkowa napisana w React i TypeScript. Gra polega na
          zbieraniu jabłek i unikaniu przeszkód. Gra kończy się, gdy wąż uderzy
          w siebie
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button colorScheme="blue">Action</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
