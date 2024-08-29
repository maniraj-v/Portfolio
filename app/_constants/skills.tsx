import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiApollographql,
  SiRedux,
  SiStyledcomponents,
  SiGhost,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiRedis,
  SiSocketdotio,
  SiMui,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiExpress,
  SiAzuredevops,
  SiAntdesign,
  SiTailwindcss,
  SiShadcnui,
  SiSourcetree,
} from "react-icons/si";
import { IconType } from "react-icons";

// Used in About Section
export const techStacks = [
  {
    label: "HTML",
    icon: <SiHtml5 />,
  },
  {
    label: "CSS",
    icon: <SiCss3 />,
  },
  {
    label: "Javascript (ES6+)",
    icon: <SiJavascript />,
  },
  {
    label: "Typescript",
    icon: <SiTypescript />,
  },
  {
    label: "React",
    icon: <SiReact />,
  },
  {
    label: "Next JS",
    icon: <SiNextdotjs />,
  },
  {
    label: "Node JS",
    icon: <SiNodedotjs />,
  },
  {
    label: "MongoDB ",
    icon: <SiMongodb />,
  },
];

export type SkillCategory =
  | "Frontend centric"
  | "Styling Libraries"
  | "CICD centric"
  | "Backend centric"
  | "Database centric"
  | "Productivity Boost";

export type Skill = {
  name: string;
  icon: IconType;
};

// Used in Skill Aresnal Dialog
export const allSkillsList: {
  [key in SkillCategory]: Skill[];
} = {
  "Frontend centric": [
    {
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "Javascript (ES6+)",
      icon: SiJavascript,
    },
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Next JS",
      icon: SiNextdotjs,
    },
    {
      name: "Apollo Graphql",
      icon: SiApollographql,
    },
    {
      name: "Redux",
      icon: SiRedux,
    },
  ],
  "Styling Libraries": [
    {
      name: "Styled Components",
      icon: SiStyledcomponents,
    },
    {
      name: "Ant Design",
      icon: SiAntdesign,
    },
    {
      name: "Material UI",
      icon: SiMui,
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Shadcn UI",
      icon: SiShadcnui,
    },
  ],
  "Backend centric": [
    {
      name: "Node JS",
      icon: SiNodedotjs,
    },
    {
      name: "Express JS",
      icon: SiExpress,
    },
  ],
  "Database centric": [
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "MongoDb",
      icon: SiMongodb,
    },
  ],
  "CICD centric": [
    {
      name: "Docker",
      icon: SiDocker,
    },
    {
      name: "Azure Devops",
      icon: SiAzuredevops,
    },
    {
      name: "Gitlab",
      icon: SiGitlab,
    },
  ],
  "Productivity Boost": [
    {
      name: "VSCode",
      icon: SiVisualstudiocode,
    },
    {
      name: "Git",
      icon: SiGit,
    },
    {
      name: "Bash",
      icon: SiGnubash,
    },
    {
      name: "SourceTree",
      icon: SiSourcetree,
    },
  ],
};

export const projectTechMap: {
  [key in string]: Skill[];
} = {
  "My Portfolio": [
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "Next JS",
      icon: SiNextdotjs,
    },
    {
      name: "Framer motion",
      icon: SiFramer,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
  ],
  "House Seekers": [
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Material UI",
      icon: SiMui,
    },
  ],
  "Visa Scout": [
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
  ],
  "Agent Copilot": [
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Material UI",
      icon: SiMui,
    },
    {
      name: "Web Socket",
      icon: SiSocketdotio,
    },
  ],
  "Comfy Sloth Store": [
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Styled Components",
      icon: SiStyledcomponents,
    },
  ],
};
