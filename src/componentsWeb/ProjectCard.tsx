import {
  Box,
  Button,
  Card,
  GridItem,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import CertificateImage from "./CertificatesImage";
import { useColorMode } from "@/components/ui/color-mode";

// import { SiHtml5 } from "react-icons/si";

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
  const { colorMode } = useColorMode();

  return (
    <GridItem>
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
          size={"lg"}
          zIndex={"tooltip"}
        >
          <Card.Header>
            {id !== "certificat" ? (
              <Link
                href={urlSite}
                target="_blank"
                focusRing={"none"}
                padding={0}
              >
                <Image
                  src={urlImage}
                  alt={title}
                  borderRadius="3xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            ) : (
              <CertificateImage src={urlImage} alt={title} />
            )}
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
              {id === "certificat" ? null : (
                // (<Icon as={SiHtml5} color="#E34F26" boxSize={5} />)
                <>
                  <Icon as={FaReact} color="#61DAFB" boxSize={5} />

                  <Icon
                    as={SiTypescript}
                    color="#3178C6"
                    boxSize={5}
                    borderRadius={2}
                  />
                </>
              )}
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
            <Button
              id={id}
              borderRadius="xl"
              asChild
              colorPalette={id === "certificat" ? "red" : "teal"}
              variant="solid"
              justifyContent="center"
              _hover={{ transform: "scale(1.1)" }}
              transition="all 0.4s ease"
            >
              <a href={id === "certificates" ? "/certificates" : urlSite}>
                {id === "certificat" ? "PDF" : "Zobacz"}
              </a>
            </Button>

            <Spacer />
            {id === "certificat" ? null : (
              <Link
                href={git}
                target="_blank"
                aria-label={`Zobacz projekt ${title} na GitHub`}
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s ease"
              >
                <Icon
                  as={FaGithub}
                  boxSize={10}
                  color={colorMode === "light" ? "black" : "white"}
                />
              </Link>
            )}
          </Card.Footer>
        </Card.Root>
      </Box>
    </GridItem>
  );
};

export default ProjectCard;
