import projects from "../../projects.json";
import Project from "@/components/Portfolio/Proyect/project";

export default function ProjectPage({ params }) {
  const { key } = params;

  return <Project info={projects[key]} />;
}
