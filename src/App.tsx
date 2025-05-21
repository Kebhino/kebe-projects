import "./App.css";
import GridList from "./componentsWeb/GridList";
import Footer from "./componentsWeb/Footer";
import ColorModeSwitch from "./hooks/useColorMode";
import { HStack, Spacer } from "@chakra-ui/react";

function App() {
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
