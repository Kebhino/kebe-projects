import { Menu, Button, Box } from "@chakra-ui/react";

interface Certyfikat {
  tittle: string;
  urlPDF: string;
}

import { useQueryClient } from "@tanstack/react-query";

const CertificatesMenu = () => {
  const queryClient = useQueryClient(); // Inicjalizuję QueryClient
  const projects = queryClient.getQueryData<Certyfikat[]>(["certificates"]); // Pobieram dane z cache

  return (
    <Box position="relative" display="inline-block">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button borderRadius="xl" colorPalette="teal" variant="solid">
            Certyfikaty
          </Button>
        </Menu.Trigger>
        <Menu.Content
          position="absolute"
          top="100%"
          left={0}
          minWidth="200px"
          mt="2"
          borderRadius="md"
          boxShadow="md"
          p="1"
          zIndex={"popover"}
          border={"1px solid white"}
        >
          {projects?.map((certyfikat: Certyfikat, index) => (
            <Menu.Item
              asChild
              value={certyfikat.tittle}
              style={{ overflow: "visible" }}
              key={index}
            >
              <a href={certyfikat.urlPDF} target="_blank">
                {certyfikat.tittle}
              </a>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Root>
    </Box>
  );
};

export default CertificatesMenu;
