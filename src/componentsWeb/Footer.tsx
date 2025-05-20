import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box mt={10} borderRadius={"3xl"}>
      <Container maxW="container.lg">
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm">
            © {new Date().getFullYear()} KeBe Projects. Wszelkie prawa
            zastrzeżone.
          </Text>

          <Stack direction="row" gap={3}>
            <Link href="https://github.com">
              <IconButton
                aria-label="GitHub"
                variant="ghost"
                colorScheme="gray"
              >
                <FaGithub />
              </IconButton>
            </Link>
            <Link href="https://linkedin.com">
              <IconButton
                aria-label="LinkedIn"
                variant="ghost"
                colorScheme="gray"
              >
                <FaLinkedin />
              </IconButton>
            </Link>
            <Link href="https://twitter.com">
              <IconButton
                aria-label="Twitter"
                variant="ghost"
                colorScheme="gray"
              >
                <FaTwitter />
              </IconButton>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
