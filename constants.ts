
import { Experience, Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Balvinder Singh",
  title: "Senior Software Engineer",
  // title: "Fullstack Web Developer",
  summary: `
  I work on software that already exists, already matters,
and cannot afford to break.

My focus is modernizing legacy systems, stabilizing
growing codebases, and improving performance and reliability
in production environments.

I’ve worked across startups and large organizations,
helping teams reduce operational risk while evolving
their systems with confidence.
`,
  // summary: "Immediate joiner with over 8 years of experience working in startups as well as MNCs. Expertise in React, Spring Boot, Angular, Node.js, and Java. Proven track record in building large-scale applications, managing teams, and optimizing full-stack performance.",
  email: "balvinder294@gmail.com",
  phone: "+91 8950517959",
  linkedin: "https://www.linkedin.com/in/balvinder-singh-667a908b/",
  location: "Hisar, Haryana, India",
  resumeUrl: "resume.pdf" 
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Fullstack Developer",
    company: "Voyager Partners",
    period: "Nov 2024 - Present",
    description: "Freelance Consultant on modernization projects in the Healthcare industry. Updating dependencies, fixing Veracode security issues, and deploying React/Java/Node applications using Github CI/CD, Kubernetes, and Azure."
  },
  {
    id: "exp2",
    role: "Senior Software Engineer",
    company: "Infosys",
    period: "Mar 2023 - Oct 2024",
    description: "Modernized banking applications for a US client. Built reusable UI components with React, configured Java libraries for PCF cloud, and achieved high unit test coverage. Worked closely with SonarQube for vulnerability management."
  },
  {
    id: "exp3",
    role: "Open Source Developer",
    company: "Freelance",
    period: "Nov 2021 - Mar 2023",
    description: "Developed decentralized platform apps for Blurt and Serey using ReactJS and NextJS. Implemented crypto-powered blogging features and managed deployments with Docker."
  },
  {
    id: "exp4",
    role: "Lead Software Engineer",
    company: "TTM Technologies",
    period: "May 2018 - May 2022",
    description: "Led a team of 4-5 developers. Managed full-stack delivery for Staffbox and Kidafter. Integrated AWS services (S3, Rekognition) and implemented face detection using Face-api.js."
  },
  {
    id: "exp5",
    role: "Product Engineer",
    company: "Simbalabs",
    period: "Nov 2017 - Mar 2019",
    description: "Built monoliths and microservices using JHipster (Spring Boot + Angular). Handled infrastructure with Ansible, Jenkins, and Nginx."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    image: 'banking_modernization.png',
    title: "Banking Modernization",
    duration: "464 Days",
    description: "Replaced legacy JSP frontend with a modern React/Redux interface. Integrated Java REST APIs and implemented comprehensive unit testing with React Testing Library.",
    tags: ["React", "Redux", "Java", "REST"]
  },
  {
    id: "p2",
    title: "Graphene Curation Reporter",
    image: "graphene_curation.jpg",
    duration: "615 Days",
    description: "Open-source Next.js tool for blockchain account analysis. Uses complex filtering logic to generate reports from blockchain data.",
    tags: ["Next.js", "Blockchain", "Node.js", "Chakra UI"]
  },
  {
    id: "p3",
    title: "Face Recognition System",
    image: "recognition.png",
    duration: "244 Days",
    description: "Angular and NestJS based application that identifies individuals by scanning images and storing data in MongoDB.",
    tags: ["NestJS", "Angular", "MongoDB", "Face-api.js"]
  },
  {
    id: "p4",
    title: "Medcopay Modernization",
    image: "medcopay_modernization.png",
    duration: "12 Months",
    description: "Healthcare modernization using Node.js APIs and React.js frontend. Implemented robust CI/CD pipelines for Kubernetes on Azure.",
    tags: ["Node.js", "React", "Kubernetes", "Azure"]
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Angular", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "Node.js/NestJS", level: 80, category: "Backend" },
  { name: "Java / Spring Boot", level: 88, category: "Backend" },
  { name: "Microservices", level: 75, category: "Backend" },
  { name: "REST APIs", level: 96, category: "Backend" },
  { name: "AWS", level: 80, category: "Cloud/DevOps" },
  { name: "AZURE", level: 80, category: "Cloud/DevOps" },
  { name: "Docker", level: 85, category: "Cloud/DevOps" },
  { name: "Kubernetes", level: 75, category: "Cloud/DevOps" },
  { name: "Git / CI/CD", level: 90, category: "Tools" },
  { name: "Jest / Testing", level: 85, category: "Tools" },
  { name: "VS CODE", level: 85, category: "Tools" },
  { name: "Intellij Idea", level: 80, category: "Tools" },
  { name: "Veracode", level: 80, category: "Security" },
  { name: "Sonar", level: 80, category: "Security" },
  { name: "GHS/Github Security", level: 70, category: "Security" }
];
