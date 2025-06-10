import "./App.css";
import GridList from "./componentsWeb/ProjectsGridList";
import Footer from "./componentsWeb/Footer";
import ColorModeSwitch from "./hooks/useColorMode";
import { HStack, Spacer } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CertyficatesGridList from "./pages/CertyficatesGridList";
import CertificatesMenu from "./componentsWeb/CertificatesMenu";
import MainSiteButton from "./componentsWeb/MainSiteButton";
// import AddProjectForm from "./componentsWeb/AddProjectForm";

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
            {/* <AddProjectForm /> */}
          </>
        }
      />

      {/* Podstrona SnakeGame */}
      <Route
        path="/certificates"
        element={
          <>
            <HStack overflow="visible" position="relative" marginLeft={5}>
              <MainSiteButton />
              <Spacer />
              <CertificatesMenu />

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
