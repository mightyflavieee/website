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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore corrupti doloremque hic ipsam sit, numquam tenetur perspiciatis quos! Laborum iste repellat quia aspernatur, ipsam illum, impedit quaerat porro atque explicabo, fugit delectus quo! Ipsum eveniet deleniti eius fugiat at.",
    link: "",
  };

  return project;
}

function getMastersOfReinassanceProject(): ProjectData {
  const project: ProjectData = {
    name: "Masters Of Reinassance",
    text_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore corrupti doloremque hic ipsam sit, numquam tenetur perspiciatis quos! Laborum iste repellat quia aspernatur, ipsam illum, impedit quaerat porro atque explicabo, fugit delectus quo! Ipsum eveniet deleniti eius fugiat at.",
    link: "",
  };

  return project;
}

function getLaGiocomotivaProject(): ProjectData {
  const project: ProjectData = {
    name: "lagiocomotiva.com",
    text_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore corrupti doloremque hic ipsam sit, numquam tenetur perspiciatis quos! Laborum iste repellat quia aspernatur, ipsam illum, impedit quaerat porro atque explicabo, fugit delectus quo! Ipsum eveniet deleniti eius fugiat at.",
    link: "",
  };

  return project;
}
