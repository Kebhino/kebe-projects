import { Menu, Button } from "@chakra-ui/react";

interface Certyfikat {
  tittle: string;
  urlPDF: string;
}

import { useQueryClient } from "@tanstack/react-query";

const CertificatesMenu = () => {
  const queryClient = useQueryClient(); // Inicjalizuję QueryClient
  const projects = queryClient.getQueryData<Certyfikat[]>(["projects"]); // Pobieram dane z cache

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button borderRadius="xl" colorPalette="teal" variant="solid">
          Certyfikaty
        </Button>
      </Menu.Trigger>
      <Menu.Content
        minWidth="200px"
        zIndex={9999}
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          marginTop: "8px", // ładny odstęp od przycisku
          borderRadius: "8px",
          boxShadow: "md",
          padding: "4px 0",
        }}
      >
        {projects?.map((certyfikat: Certyfikat) => (
          <Menu.Item
            asChild
            value={certyfikat.tittle}
            zIndex="popover"
            style={{ overflow: "visible" }}
          >
            <a href={certyfikat.urlPDF} target="_blank">
              {certyfikat.tittle}
            </a>
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default CertificatesMenu;
