import { Grid } from "@chakra-ui/react";
// import { Button  } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
// import { useMutation, useQueryClient} from "@tanstack/react-query";

// Funkcja do pobierania projektów z API
const fetchProjects = async () => {
  const response = await fetch(
    "https://yt8hdk3uz5.execute-api.eu-central-1.amazonaws.com/projects"
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data.items;
};

// Funkcja do usuwania projektu
// const deleteProject = async (id: string): Promise<void> => {
//   console.log(`Deleting project with ID: ${id}`); // Dodajmy logowanie ID
//   const response = await fetch(`http://localhost:4000/delete-project/${id}`, {
//     method: "DELETE",
//   });

//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.error);
//   }
//   console.log(`Deleted project with ID: ${id}`); // Logowanie usunięcia projektu
// };

const GridList = () => {
  // const queryClient = useQueryClient();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"], // Klucz zapytania
    queryFn: fetchProjects, // Funkcja pobierająca dane
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60, // Czas przechowywania danych w pamięci
  });

  // Mutacja do usuwania projektu
  // const { mutate } = useMutation({
  //   mutationFn: deleteProject, // Funkcja do usuwania projektu
  //   onSuccess: () => {
  //     console.log("Project deleted successfully!");
  //     queryClient.invalidateQueries({ queryKey: ["projects"] }); // Odświeżenie danych po usunięciu
  //   },
  //   onError: (error: any) => {
  //     console.error("Błąd usuwania projektu:", error);
  //   },
  // });

  if (isLoading) return <p>Ładowanie...</p>;
  if (isError) return <p>Błąd podczas pobierania danych</p>;

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
      {data.map((project: any, index: number) => (
        <div key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            urlImage={project.urlImage}
            urlSite={project.urlSite}
            git={project.git}
            id={project.id}
          />
          {/* 
          <Button
            colorScheme="red"
            mt={2}
            onClick={() => mutate(project.id)} // Usunięcie projektu
          >
            Usuń projekt
          </Button> 
          */}
        </div>
      ))}
    </Grid>
  );
};

export default GridList;
