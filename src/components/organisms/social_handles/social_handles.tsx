import SocialCard from "@/components/atoms/social_card";
import { useGlobalContext } from "@/contexts/globalContext";

export default function SocialHandles() {
  const { profile } = useGlobalContext();

  return (
    <div className="text-white py-5 px-4 md:px-10 lg:px-20">
      <div className="flex justify-start items-center flex-wrap space-x-3 space-y-2">
        {profile?.user?.social_handles?.map((social, index) => (
          <SocialCard key={index} {...social} />
        ))}
      </div>
    </div>
  );
}
