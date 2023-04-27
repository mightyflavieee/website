import { ProjectData } from "../models/Project.model";

export function getProjects(): ProjectData[] {
  const projects: ProjectData[] = [];
  projects.push(getWebsiteProject());
  projects.push(getMastersOfReinassanceProject());
  projects.push(getLaGiocomotivaProject());
  return projects;
}

function getWebsiteProject(): ProjectData {
  const project: ProjectData = {
    name: "This Website!",
    text_description:
      "This is repository houses my personal portfolio website. This website is built using the Astro framework and components are styled with the use of TailwindCSS.",
    link: "this-website",
  };

  return project;
}

function getMastersOfReinassanceProject(): ProjectData {
  const project: ProjectData = {
    name: "Masters Of Reinassance",
    text_description:
      "Java distributed implementation of the tabletop game 'Masters of Reinassance'. The project is a distributed implementation of the game, where each player is connected to a remote server and can play the game with other players connected to the same server.",
    link: "masters-of-reinassance",
  };

  return project;
}

function getLaGiocomotivaProject(): ProjectData {
  const project: ProjectData = {
    name: "lagiocomotiva.it",
    text_description:
      "Aim of the project as to renovate the old company website, adopting a solution that would allow non-technical users to post articles and easily edit the layout of a blog posts or pages inside the website.",
    link: "la-giocomotiva-it",
  };

  return project;
}
