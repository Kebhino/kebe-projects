import {
  Box,
  Button,
  Card,
  HStack,
  Icon,
  Image,
  Menu,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  urlImage: string;
  git?: string;
  urlSite: string;
  id?: string;
}

const ProjectCard = ({
  title,
  description,
  urlImage,
  urlSite,
  git,
  id,
}: ProjectCardProps) => {
  return (
    <Box
      transition="all 0.3s ease"
      borderRadius="3xl"
      _hover={{
        boxShadow: "0 0 2px 1px  rgb(130, 130, 130)",
        transform: "scale(1.01)",
        transition: "all 0.1s ease",
      }}
    >
      <Card.Root
        borderRadius={"3xl"}
        boxShadow="xl"
        colorPalette={"red"}
        height={600}
        size={"lg"}
      >
        <Card.Header>
          <Image src={urlImage} alt={title} borderRadius="3xl" />
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
              {title}
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
            {description}
          </Text>
        </Card.Body>
        <Card.Footer
          justifyContent={"space-between"}
          position="relative"
          overflow="visible"
        >
          {id === "certificates" ? (
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button borderRadius="xl" colorPalette="teal" variant="solid">
                  Certyfikaty
                </Button>
              </Menu.Trigger>
              <Menu.Content
                minWidth="150px"
                style={{
                  position: "absolute",
                  top: "10%",
                  right: 80,
                }}
              >
                <Menu.Item
                  asChild
                  value="1"
                  zIndex="popover" // albo "dropdown" lub konkretnie np. 1000
                  style={{ overflow: "visible" }}
                >
                  <a href="https://kurs-html.com" target="_blank">
                    HTML
                  </a>
                </Menu.Item>
                <Menu.Item asChild value="2">
                  <a href="https://kurs-css.com" target="_blank">
                    CSS
                  </a>
                </Menu.Item>
                <Menu.Item asChild value="3">
                  <a href="https://kurs-react.com" target="_blank">
                    React
                  </a>
                </Menu.Item>
              </Menu.Content>
            </Menu.Root>
          ) : (
            <Button
              id={id}
              borderRadius="xl"
              asChild
              colorPalette="teal"
              variant="solid"
              justifyContent="center"
              _hover={{ transform: "scale(1.1)" }}
              transition="all 0.4s ease"
            >
              <a href={urlSite}>Zobacz</a>
            </Button>
          )}

          <Spacer />

          <Icon
            as={"a"}
            href={git}
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
