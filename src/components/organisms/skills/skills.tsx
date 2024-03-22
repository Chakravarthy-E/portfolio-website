import SkillCard from "@/components/atoms/skill_card";
import { useGlobalContext } from "@/contexts/globalContext";

export default function Skills() {
  const { profile } = useGlobalContext();
  const sortedSkills = profile?.user.skills?.sort(
    (a: any, b: any) => a.sequence - b.sequence
  );
  return (
    <div id="skills" className="py-5 px-5 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-8 md:py-12 lg:py-16 sm:grid-cols-2">
        {sortedSkills?.map((skill: any, index: number) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
