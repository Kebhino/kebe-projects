import { Grid } from "@chakra-ui/react";

import ProjectCard from "@/componentsWeb/ProjectCard";
import { CertificatesList } from "@/data/certyfikaty";

// console.log(Cards);

const CertyficatesGridList = () => {
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
        {CertificatesList.map((certificat, index) => (
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
