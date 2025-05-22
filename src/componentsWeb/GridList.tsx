import { Box, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Cards from "../data/projects";
import { Link } from "react-router-dom";

const GridList = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
        padding={4}
      >
        {Cards.map((project, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            urlImage={project.urlImage}
            urlSite={project.urlSite}
            git={project.git}
            key={index}
            id={project.id}
          />
        ))}
      </Grid>
      <Link to="/snakegame">
        <Box>Snake Game</Box>
      </Link>
    </>
  );
};

export default GridList;
