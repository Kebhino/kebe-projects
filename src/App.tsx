import "./App.css";

import Footer from "./componentsWeb/Footer";
import ColorModeSwitch from "./hooks/useColorMode";
import { HStack, Spacer } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CertificatesMenu from "./componentsWeb/CertificatesMenu";
import MainSiteButton from "./componentsWeb/MainSiteButton";
import React, { Suspense } from "react";

const GridList = React.lazy(() => import("./componentsWeb/ProjectsGridList"));
const CertyficatesGridList = React.lazy(
  () => import("./pages/CertyficatesGridList")
);

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
            <Suspense fallback={<div>Ładowanie projektów...</div>}>
              <GridList />
            </Suspense>
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
              <MainSiteButton />
              <Spacer />
              <CertificatesMenu />

              <ColorModeSwitch />
            </HStack>
            <Suspense fallback={<div>Ładowanie certyfikatów...</div>}>
              <CertyficatesGridList />
            </Suspense>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
