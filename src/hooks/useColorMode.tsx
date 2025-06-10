import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="outline"
        size="sm"
        marginRight={4}
        borderRadius={"xl"}
        p={3}
      >
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </IconButton>
    </ClientOnly>
  );
};
export default ColorModeSwitch;
