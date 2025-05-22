import "./App.css";
import GridList from "./componentsWeb/GridList";
import Footer from "./componentsWeb/Footer";
import ColorModeSwitch from "./hooks/useColorMode";
import { HStack, Spacer } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import SnakeGame from "./pages/SnakeGame";

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
        path="/snakegame"
        element={
          <>
            <HStack>
              <Spacer />
              <ColorModeSwitch />
            </HStack>
            <SnakeGame />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
