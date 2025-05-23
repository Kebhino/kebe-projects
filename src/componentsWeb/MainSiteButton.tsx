import { Link } from "@chakra-ui/react";

const MainSiteButton = () => {
  return (
    // <Button bgColor="red" color="white" borderRadius="xl">
    <Link marginLeft={3} variant="underline" href="/" colorPalette="teal">
      Strona Głowna
    </Link>
    /* </Button> */
  );
};

export default MainSiteButton;
