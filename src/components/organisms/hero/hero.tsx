import { useGlobalContext } from "@/contexts/globalContext";
import { MoveRight } from "lucide-react";
import SocialHandles from "../social_handles/social_handles";

export default function Hero() {
  const { profile } = useGlobalContext();

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 px-4 md:px-8 lg:px-20"
    >
      <div className="flex flex-col items-center space-y-3 text-center md:text-left">
        <p className="text-lg md:text-xl text-white">
          Hello{" "}
          <span className="text-blue-800 font-bold text-xl md:text-2xl ml-1">
            I'm
          </span>
        </p>
        <h1 className="text-5xl md:text-9xl font-bold tracking-wide text-blue-800 shadow-sm first-letter:uppercase">
          {profile?.user?.about.name}
        </h1>
        <p className="text-2xl md:text-4xl font-semibold tracking-wide text-gray-300">
          {profile?.user?.about.title}
        </p>
      </div>
      <SocialHandles />
    </div>
  );
}
