import SkillCard from "@/components/atoms/skill_card";
import { useGlobalContext } from "@/contexts/globalContext";

export default function Skills() {
  const { profile } = useGlobalContext();
  return (
    <div className="py-5 px-5 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-3xl font-semibold">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-8 md:py-12 lg:py-16 sm:grid-cols-2">
        {profile?.user.skills?.map((skill: any, index: number) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
