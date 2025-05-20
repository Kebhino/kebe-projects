import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const GridList = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={4}>
      <GridItem>
        <ProjectCard
          title="Snake Game - React TS"
          description=" Gra przeglądarkowa napisana w React i TypeScript. Gra polega na
                    zbieraniu jabłek i unikaniu przeszkód. Gra kończy się, gdy wąż
                    uderzy w siebie"
          url="https://snakegame-assets.s3.eu-north-1.amazonaws.com/snakeimg.png"
          git="https://github.com/Kebhino/snake-game"
        />
      </GridItem>
      <GridItem>
        <ProjectCard
          title="Game-Hub - React TS"
          description=" A dynamic web app built with React, TypeScript, and Chakra UI that allows users to browse video games fetched from the RAWG Video Games Database API."
          url="https://snakegame-assets.s3.eu-north-1.amazonaws.com/gamehub.webp"
          git="https://github.com/Kebhino/game-hub"
        />
      </GridItem>
      <GridItem>
        <ProjectCard
          title="Certificates
"
          description=" Here you'll find the most important courses I’ve completed, grouped by topic and with direct access to each certificate."
          url="https://snakegame-assets.s3.eu-north-1.amazonaws.com/certificate_card.webp"
          git="https://github.com/Kebhino/Certificates"
        />
      </GridItem>
    </Grid>
  );
};

export default GridList;
