// src/scripts/seedDynamoProjects.cjs

const dotenv = require('dotenv');
dotenv.config(); // <- MUSI być przed użyciem process.env

console.log("✅ AWS_ACCESS_KEY_ID:", process.env.AWS_ACCESS_KEY_ID);
console.log("✅ AWS_SECRET_ACCESS_KEY:", process.env.AWS_SECRET_ACCESS_KEY);

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
  region: 'eu-central-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const projects = [
  {
    title: "Portfolio - React TS",
    description: "My personal portfolio website built with React and TypeScript, showcasing my projects and skills. You can find the source code on GitHub. Enjoy!",
    urlImage: "https://snakegame-assets.s3.eu-north-1.amazonaws.com/programmer_portfolio_small.webp",
    urlSite: "https://kebeprojects.com",
    git: "https://github.com/Kebhino/kebe-projects",
  },
  {
    title: "Game-Hub - React TS",
    description: "A dynamic web app built with React, TypeScript, and Chakra UI that allows users to browse video games fetched from the RAWG Video Games Database API.",
    urlImage: "https://snakegame-assets.s3.eu-north-1.amazonaws.com/gamehub.webp",
    urlSite: "https://gamehub.kebeprojects.com",
    git: "https://github.com/Kebhino/game-hub",
  },
  {
    title: "Snake Game - React TS",
    description: "Gra przeglądarkowa napisana w React i TypeScript. Gra polega na zbieraniu jabłek i unikaniu przeszkód. Gra kończy się, gdy wąż uderzy w siebie",
    urlImage: "https://snakegame-assets.s3.eu-north-1.amazonaws.com/snakeimg_optimized.webp",
    urlSite: "https://snake.kebeprojects.com",
    git: "https://github.com/Kebhino/snake-game",
  },
  {
    title: "InstaCode React TS ChakraUI",
    description: "A modern business website built to present the InstaCode brand — including service offerings, key sectors, and contact details. Built with Chakra UI, React, and TypeScript. Features responsive design, smooth animations, and a clean user experience.",
    urlImage: "https://snakegame-assets.s3.eu-north-1.amazonaws.com/imageInstaCodeProject.webp",
    urlSite: "https://instacode.pl",
    git: "https://github.com/Kebhino/instacode-project",
  },
  {
    id: "certificates",
    title: "Certificates",
    description: "Here you'll find the most important courses I’ve completed, grouped by topic and with direct access to each certificate. You can also download them in PDF format.",
    urlImage: "https://snakegame-assets.s3.eu-north-1.amazonaws.com/certificate_card.webp",
    urlSite: "https://github.com/Kebhino/Certificates",
    git: "https://github.com/Kebhino/Certificates",
  },
];

async function seedProjects() {
  for (const project of projects) {
    const params = {
      TableName: "projects",
      Item: {
        id: project.id || uuidv4(),
        ...project,
      },
    };

    try {
      await dynamodb.put(params).promise();
      console.log(`✅ Dodano: ${project.title}`);
    } catch (err) {
      console.error(`❌ Błąd przy ${project.title}:`, err);
    }
  }
}

seedProjects();
