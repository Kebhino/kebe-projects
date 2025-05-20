import "./App.css";
import GridList from "./componentsWeb/GridList";
import Footer from "./componentsWeb/Footer";
import ColorModeSwitch from "./hooks/useColorMode";
import { HStack, Spacer } from "@chakra-ui/react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Portfolio - KeBe Projects";
  }, []);

  return (
    <>
      <HStack>
        <Spacer />
        <ColorModeSwitch />
      </HStack>
      <GridList />
      <Footer />
    </>
  );
}

export default App;
