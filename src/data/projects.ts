import portfolioImg from "@/assets/ProjectImages/programmer_portfolio_small.webp"
import gamehubImg from "../assets/ProjectImages/gamehub.webp";
import snakeImg from "../assets/ProjectImages/snakeimg_optimized.webp";
import instacodeImg from "../assets/ProjectImages/imageInstaCodeProject.webp";
import certificateImg from "../assets/ProjectImages/certificate_card.webp";

export interface Project {
  title: string;
  description: string;
  urlImage: string;
  urlSite: string;
  git: string;
  id?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio - React TS",
    description: "My personal portfolio website built with React and TypeScript, showcasing my projects and skills. You can find the source code on GitHub. Enjoy!",
    urlImage: portfolioImg,
    urlSite: "https://kebeprojects.com",
    git: "https://github.com/Kebhino/kebe-projects"
  },
  {
    title: "Game-Hub - React TS",
    description: "A dynamic web app built with React, TypeScript, and Chakra UI that allows users to browse video games fetched from the RAWG Video Games Database API.",
    urlImage: gamehubImg,
    urlSite: "https://gamehub.kebeprojects.com",
    git: "https://github.com/Kebhino/game-hub"
  },
  {
    title: "Snake Game - React TS",
    description: "A browser-based game built with React and TypeScript. The objective is to collect apples while avoiding obstacles. The game ends when the snake crashes into itself.",
    urlImage: snakeImg,
    urlSite: "https://snake.kebeprojects.com",
    git: "https://github.com/Kebhino/snake-game"
  },
  {
    title: "InstaCode React TS ChakraUI",
    description: "A modern business website built to present the InstaCode brand — including service offerings, key sectors, and contact details. Built with Chakra UI, React, and TypeScript. Features responsive design, smooth animations, and a clean user experience.",
    urlImage: instacodeImg,
    urlSite: "https://instacode.pl",
    git: "https://github.com/Kebhino/instacode-project"
  },
  {
    title: "Certificates",
    id: "certificates",
    description: "Here you'll find the most important courses I’ve completed, grouped by topic and with direct access to each certificate. You can also download them in PDF format.",
    urlImage: certificateImg,
    urlSite: "https://github.com/Kebhino/Certificates",
    git: "https://github.com/Kebhino/Certificates"
  }
];


export default projects;