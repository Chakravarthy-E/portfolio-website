import SocialCard from "@/components/atoms/social_card";
import { useGlobalContext } from "@/contexts/globalContext";

export default function SocialHandles() {
  const { profile } = useGlobalContext();

  return (
    <div className="text-white py-1 px-1 md:px-10 lg:px-20">
      <div className="flex flex-wrap justify-center items-center space-x-3 space-y-2">
        {profile?.user?.social_handles?.map((social, index) => (
          <SocialCard key={index} {...social} />
        ))}
      </div>
    </div>
  );
}
