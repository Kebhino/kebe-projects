import { Button } from "@chakra-ui/react";

const MainSiteButton = () => {
  return (
    <Button
      borderRadius="xl"
      asChild
      colorPalette="black"
      variant="solid"
      justifyContent="center"
      _hover={{ transform: "scale(1.1)" }}
      transition="all 0.4s ease"
    >
      <a href="/">Strona Główna</a>
    </Button>
  );
};

export default MainSiteButton;
