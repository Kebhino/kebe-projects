import { Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";

interface ProjectCardProps {
  title: string;
  description: string;
  urlImage: string;
  git?: string;
  urlSite: string;
  id?: string;
}

const GridList = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<ProjectCardProps[]>({
    queryKey: ["projects"],
    queryFn: () =>
      fetch(
        "https://projectkebedb.s3.eu-central-1.amazonaws.com/data/projects.json"
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading) return <p>Ładowanie...</p>;
  if (isError) return <p>Błąd podczas pobierania danych</p>;

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
        {data.map((project, index) => (
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
    </>
  );
};

export default GridList;
