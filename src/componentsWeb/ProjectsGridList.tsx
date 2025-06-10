import { Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

// 🔽 Lokalny JSON
import localProjects from "@/data/projects.ts";

interface ProjectCardProps {
  title: string;
  description: string;
  urlImage: string;
  git?: string;
  urlSite: string;
  id?: string;
}

const GridList = () => {
  const projects: ProjectCardProps[] = localProjects;
  return (
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
      {projects.map((project, index) => (
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
  );
};

export default GridList;
