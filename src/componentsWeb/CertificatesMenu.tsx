import { CertificatesList } from "@/data/certyfikaty";
import { Menu, Button } from "@chakra-ui/react";

const CertificatesMenu = () => {
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
        {CertificatesList.map((certyfikat) => (
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
