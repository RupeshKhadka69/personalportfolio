// Project.ts
export interface Project {
  title: string;
  description: string;
  github: string;
}

export const projects: Project[] = [ 
  {
    title: "JWT Auth",
    description: "This is the project done in nextjs , node and mongodb for storing user data and jwt is used for authorization and authentication",
    github:"somegithublink"
  },
  {
    title: "E-commerce",
    description: "this is the projects of ecommerce ",
    github:"somegithublink"
  }
]
