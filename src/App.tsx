import "./App.css";
import GridList from "./componentsWeb/GridList";
import Footer from "./componentsWeb/Footer";
import ColorModeSwitch from "./hooks/useColorMode";
import { HStack, Spacer } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CertyficatesGridList from "./pages/CertyficatesGridList";
import CertificatesMenu from "./componentsWeb/CertificatesMenu";

function App() {
  return (
    <Routes>
      {/* Strona główna */}
      <Route
        path="/"
        element={
          <>
            <HStack>
              <Spacer />
              <ColorModeSwitch />
            </HStack>
            <GridList />
            <Footer />
          </>
        }
      />

      {/* Podstrona SnakeGame */}
      <Route
        path="/certificates"
        element={
          <>
            <HStack overflow="visible" position="relative" marginLeft={5}>
              <CertificatesMenu />
              <Spacer />
              <ColorModeSwitch />
            </HStack>
            <CertyficatesGridList />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
