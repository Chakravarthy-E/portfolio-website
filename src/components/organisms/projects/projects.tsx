import ProjectCard from "@/components/atoms/project_card";
import { useGlobalContext } from "@/contexts/globalContext";

export default function Projects() {
  const { profile } = useGlobalContext();

  const sortedProjects = profile?.user.projects?.sort(
    (a: any, b: any) => a.sequence - b.sequence
  );

  return (
    <div id="projects" className="py-5 px-5 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 md:py-12 lg:py-16">
        {sortedProjects?.map((project: any, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
