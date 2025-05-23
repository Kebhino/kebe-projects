import { Grid, Spinner } from "@chakra-ui/react";
import ProjectCard from "@/componentsWeb/ProjectCard";
import { useQuery } from "@tanstack/react-query";

interface Certificate {
  tittle: string;
  description: string;
  urlImage: string;
  urlPDF: string;
  id: string;
}

const CertyficatesGridList = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<Certificate[]>({
    queryKey: ["certificates"],
    queryFn: () =>
      fetch(
        "https://projectkebedb.s3.eu-central-1.amazonaws.com/data/certyfikaty.json"
      )
        .then((res) => res.json())
        .then(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading) return <Spinner size="xl" />;
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
        position="relative"
        zIndex={"base"}
      >
        {}
        {data.map((certificat, index) => (
          <ProjectCard
            title={certificat.tittle}
            description={certificat.description}
            urlImage={certificat.urlImage}
            urlSite={certificat.urlPDF}
            key={index}
            id={certificat.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default CertyficatesGridList;
