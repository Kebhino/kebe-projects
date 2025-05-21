import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const GridList = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      gap={6}
      padding={4}
    >
      <GridItem>
        <ProjectCard
          title="Snake Game - React TS"
          description=" Gra przeglądarkowa napisana w React i TypeScript. Gra polega na
                    zbieraniu jabłek i unikaniu przeszkód. Gra kończy się, gdy wąż
                    uderzy w siebie"
          urlImage="https://snakegame-assets.s3.eu-north-1.amazonaws.com/snakeimg.png"
          git="https://github.com/Kebhino/snake-game"
          urlSite="https://snake.kebeprojects.com	"
        />
      </GridItem>
      <GridItem>
        <ProjectCard
          title="Game-Hub - React TS"
          description=" A dynamic web app built with React, TypeScript, and Chakra UI that allows users to browse video games fetched from the RAWG Video Games Database API."
          urlImage="https://snakegame-assets.s3.eu-north-1.amazonaws.com/gamehub.webp"
          urlSite="https://gamehub.kebeprojects.com"
          git="https://github.com/Kebhino/game-hub"
        />
      </GridItem>
      <GridItem>
        <ProjectCard
          title="Certificates"
          id="certificates"
          description=" Here you'll find the most important courses I’ve completed, grouped by topic and with direct access to each certificate."
          urlImage="https://snakegame-assets.s3.eu-north-1.amazonaws.com/certificate_card.webp"
          urlSite="https://github.com/Kebhino/Certificates"
          git="https://github.com/Kebhino/Certificates"
        />
      </GridItem>
    </Grid>
  );
};

export default GridList;
