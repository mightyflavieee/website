import { SkillData } from "../models/Skill.model";

export function getSkills(): SkillData[] {
  const skills: SkillData[] = [
    { name: "Teamwork", icon: "mdi:account-supervisor" },
    { name: "Communication", icon: "mdi:account-voice" },
    { name: "Problem solving", icon: "mdi:puzzle" },
    { name: "Linux", icon: "mdi:linux" },
    { name: "Docker", icon: "mdi:docker" },
    { name: "Git", icon: "mdi:git" },
    { name: "CI/CD", icon: "mdi:cog-refresh-outline" },
    { name: "SQL", icon: "mdi:database" },
    { name: "NoSQL", icon: "ion:md-leaf" },
    { name: "Typescript", icon: "mdi:language-typescript" },
    { name: "Javascript", icon: "mdi:language-javascript" },
    { name: "Java", icon: "mdi:language-java" },
    { name: "", icon: "mdi:language-c" },
    { name: "Angular", icon: "mdi:angular" },
    { name: "NodeJS", icon: "mdi:nodejs" },
    { name: "HTML", icon: "mdi:language-html5" },
    { name: "CSS", icon: "mdi:language-css3" },
    { name: "Tailwind", icon: "mdi:tailwind" },
    { name: "Python", icon: "mdi:language-python" },
    { name: "Firebase", icon: "mdi:firebase" },
    { name: "Apache Kafka", icon: "mdi:apache-kafka" },
    { name: "Apache Spark", icon: "mdi:star" },
    { name: "Agile Development", icon: "mdi:jira" },
  ];

  return skills;
}
