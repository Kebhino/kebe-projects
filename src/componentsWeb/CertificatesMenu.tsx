import { Menu, Button, Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
interface Certyfikat {
  tittle: string;
  urlPDF: string;
}

const CertificatesMenu = () => {
  const { data } = useQuery<Certyfikat[]>({
    queryKey: ["certificates"],
    queryFn: () =>
      fetch(
        "https://projectkebedb.s3.eu-central-1.amazonaws.com/data/certyfikaty.json"
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <Box position="relative" display="inline-block">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button borderRadius="xl" colorPalette="teal" variant="solid">
            Certyfikaty
          </Button>
        </Menu.Trigger>
        {data && (
          <Menu.Content
            position="absolute"
            top="100%"
            left={0}
            minWidth="200px"
            mt="2"
            borderRadius="md"
            boxShadow="md"
            p="1"
            zIndex={9999}
            border={"1px solid white"}
          >
            {data?.map((certyfikat: Certyfikat, index) => (
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
        )}
      </Menu.Root>
    </Box>
  );
};

export default CertificatesMenu;
