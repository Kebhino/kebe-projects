const express = require("express");
const AWS = require("aws-sdk");
const dotenv = require("dotenv");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

dotenv.config();

AWS.config.update({
  region: "eu-central-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Endpoint do dodawania projektu
app.post("/add-project", async (req, res) => {
  const { title, description, urlImage, urlSite, git } = req.body;

  const params = {
    TableName: "projects",
    Item: {
      id: uuidv4(), // Generujemy unikalne ID dla każdego projektu
      title,
      description,
      urlImage,
      urlSite,
      git,
    },
  };

  try {
    // Używamy put do dodania projektu
    await dynamodb.put(params).promise();
    res.status(200).json({ success: true, message: "Project added" });
  } catch (err) {
    console.error("❌ Błąd przy dodawaniu:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Endpoint do pobierania projektów
app.get("/get-projects", async (req, res) => {
  const params = {
    TableName: "projects",
  };

  try {
    const data = await dynamodb.scan(params).promise();  // Używamy scan, by pobrać wszystkie projekty
    res.status(200).json({ success: true, items: data.Items });
  } catch (err) {
    console.error("❌ Błąd przy pobieraniu projektów:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Endpoint do usuwania projektu
app.delete("/delete-project/:id", async (req, res) => {
  const { id } = req.params; // Pobieramy ID z parametrów URL
  console.log("Usuwanie projektu z ID:", id); // Dodajemy log, żeby sprawdzić, czy ID jest poprawne

  const params = {
    TableName: "projects",
    Key: {
      id: id, // Klucz projektu do usunięcia
    },
  };

  try {
    // Usuwanie projektu z DynamoDB
    await dynamodb.delete(params).promise();
    console.log(`✅ Projekt o ID ${id} został usunięty`);
    res.status(200).json({ success: true, message: "Project deleted" });
  } catch (err) {
    console.error("❌ Błąd przy usuwaniu projektu:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`🚀 Serwer działa na http://localhost:${PORT}`);
});
