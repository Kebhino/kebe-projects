import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const GridList = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={4}>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
    </Grid>
  );
};

export default GridList;
