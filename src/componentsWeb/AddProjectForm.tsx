import React, { useState } from "react";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";

const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [urlSite, setUrlSite] = useState("");
  const [git, setGit] = useState("");
  const toast = useToast();

  // Funkcja do wysyłania danych do API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      title,
      description,
      urlImage,
      urlSite,
      git,
    };

    try {
      const response = await fetch("http://localhost:4000/add-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Projekt dodany",
          description: result.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Czyść formularz
        setTitle("");
        setDescription("");
        setUrlImage("");
        setUrlSite("");
        setGit("");
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Coś poszło nie tak. Spróbuj ponownie.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={4}
      maxW="md"
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
      mx="auto"
    >
      <form onSubmit={handleSubmit}>
        {/* Tytuł */}
        <Input
          id="title"
          placeholder="Tytuł projektu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mb={4}
        />

        {/* Opis */}
        <Textarea
          id="description"
          placeholder="Opis projektu"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={4}
        />

        {/* URL obrazka */}
        <Input
          id="urlImage"
          placeholder="URL do obrazka"
          value={urlImage}
          onChange={(e) => setUrlImage(e.target.value)}
          mb={4}
        />

        {/* URL strony */}
        <Input
          id="urlSite"
          placeholder="URL strony"
          value={urlSite}
          onChange={(e) => setUrlSite(e.target.value)}
          mb={4}
        />

        {/* GitHub link */}
        <Input
          id="git"
          placeholder="GitHub link"
          value={git}
          onChange={(e) => setGit(e.target.value)}
          mb={4}
        />

        <Button type="submit" colorScheme="teal" width="full">
          Dodaj projekt
        </Button>
      </form>
    </Box>
  );
};

export default AddProjectForm;
