import {
  Box,
  Button,
  Card,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <Box
      transition="all 0.3s ease"
      _hover={{ boxShadow: "xl", transform: "scale(1.01)" }}
    >
      <Card.Root borderRadius={"lg"} boxShadow="md" overflow="hidden">
        {/* Card Header with Image */}
        <Card.Header>
          <Image
            src="https://snakegame-assets.s3.eu-north-1.amazonaws.com/snakeimg.png"
            alt="Snake Image"
            borderRadius="lg"
          />
        </Card.Header>
        <Card.Body>
          <HStack
            justifyContent={"space-between"}
            marginBottom={2}
            alignItems={"center"}
          >
            <Text
              marginY={2}
              fontSize="lg"
              fontWeight="bold"
              textAlign={"center"}
              marginBottom={2}
            >
              Snake Game - React TS
            </Text>
            <Spacer />
            <Icon as={FaReact} color="#61DAFB" boxSize={5} />

            <Icon
              as={SiTypescript}
              color="#3178C6"
              boxSize={5}
              borderRadius={2}
            />
          </HStack>

          <Text fontSize="sm" color="gray.500">
            Gra przeglądarkowa napisana w React i TypeScript. Gra polega na
            zbieraniu jabłek i unikaniu przeszkód. Gra kończy się, gdy wąż
            uderzy w siebie
          </Text>
        </Card.Body>
        <Card.Footer justifyContent={"space-between"}>
          <Button
            asChild
            colorPalette="teal"
            variant="solid"
            justifyContent={"center"}
            _hover={{ transform: "scale(1.1)" }}
            transition="all 0.4s ease"
          >
            <a href="https://master.d34pw4ymgqrj1v.amplifyapp.com/">Zobacz</a>
          </Button>
          <Spacer />

          <Icon
            as={"a"}
            href="https://github.com/Kebhino/snake-game"
            _hover={{ transform: "scale(1.1)" }}
            transition="all 0.2s ease"
          >
            <FaGithub size={40} />
          </Icon>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
};

export default ProjectCard;
